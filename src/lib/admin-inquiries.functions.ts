import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type InquiryRow = Record<string, string | number | null>;

async function sha256(value: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
}

// Compares fixed-length digests so the check takes the same time for any guess.
async function passwordMatches(provided: string, expected: string): Promise<boolean> {
  const [a, b] = await Promise.all([sha256(provided), sha256(expected)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}

// Returns saved inquiries, newest first, for the private /admin/inquiries page.
// Protected by the INQUIRIES_PASSWORD secret set on the Cloudflare Worker.
export const listInquiries = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ password: z.string().max(200) }).parse(data))
  .handler(async ({ data }) => {
    const expected = process.env["INQUIRIES_PASSWORD"];
    if (!expected) {
      throw new Error("The inquiries password hasn't been set up yet.");
    }
    if (!(await passwordMatches(data.password, expected))) {
      throw new Error("That password isn't right. Please try again.");
    }

    const { env } = await import("cloudflare:workers");
    const result = await env.DB.prepare(
      "SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 500",
    ).all<InquiryRow>();
    return { inquiries: result.results ?? [] };
  });
