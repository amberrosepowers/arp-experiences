import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Json } from "@/integrations/supabase/types";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(50).optional().default(""),
  experience_type: z.string().trim().max(200).optional().default(""),
  dates: z.string().trim().max(200).optional().default(""),
  destination: z.string().trim().max(200).optional().default(""),
  travelers: z.string().trim().max(200).optional().default(""),
  details: z.string().trim().max(4000).optional().default(""),
  referral_source: z.string().trim().max(200).optional().default(""),
  form_type: z.enum(["quick", "detailed"]).optional().default("quick"),
  intake_details: z.record(z.string(), z.unknown()).optional().default({}),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      experience_type: data.experience_type || null,
      dates: data.dates || null,
      destination: data.destination || null,
      travelers: data.travelers || null,
      details: data.details || null,
      referral_source: data.referral_source || null,
      form_type: data.form_type,
      intake_details: (data.intake_details ?? {}) as Json,
    });
    if (error) {
      console.error("Failed to save inquiry", error.message);
      throw new Error("We couldn't save your inquiry. Please try again.");
    }

    // Email notification is best-effort: a saved inquiry is the source of truth,
    // so a failed or skipped email should never fail the submission itself.
    try {
      const resendKey = process.env["RESEND_API_KEY"];
      if (resendKey) {
        const lines = [
          `Type: ${data.form_type === "detailed" ? "Detailed Trip Intake" : "Quick Inquiry"}`,
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone && `Phone: ${data.phone}`,
          data.experience_type && `Experience: ${data.experience_type}`,
          data.destination && `Destination: ${data.destination}`,
          data.dates && `Dates: ${data.dates}`,
          data.travelers && `Travelers: ${data.travelers}`,
          data.referral_source && `Referred by: ${data.referral_source}`,
          data.details && `Details: ${data.details}`,
          Object.keys(data.intake_details ?? {}).length > 0 &&
            `\nFull intake details:\n${JSON.stringify(data.intake_details, null, 2)}`,
        ].filter(Boolean);

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ARP Experiences <inquiries@arpexperiences.com>",
            to: "amber@arpexperiences.com",
            reply_to: data.email,
            subject: `New ${data.form_type === "detailed" ? "trip intake" : "inquiry"} from ${data.name}`,
            text: lines.join("\n"),
          }),
        });
        if (!emailResponse.ok) {
          console.error("Failed to send inquiry email", await emailResponse.text());
        }
      }
    } catch (emailError) {
      console.error("Inquiry email error", emailError);
    }

    return { ok: true };
  });

