import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  experience_type: z.string().trim().max(100).optional().default(""),
  dates: z.string().trim().max(200).optional().default(""),
  destination: z.string().trim().max(200).optional().default(""),
  travelers: z.string().trim().max(50).optional().default(""),
  details: z.string().trim().max(2000).optional().default(""),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      email: data.email,
      experience_type: data.experience_type || null,
      dates: data.dates || null,
      destination: data.destination || null,
      travelers: data.travelers || null,
      details: data.details || null,
    });
    if (error) {
      console.error("Failed to save inquiry", error.message);
      throw new Error("We couldn't save your inquiry. Please try again.");
    }
    return { ok: true };
  });
