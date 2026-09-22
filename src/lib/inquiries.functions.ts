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

// Friendly labels for the detailed intake form's raw field names.
const intakeLabels: Record<string, string> = {
  address: "Address",
  travelDatesFlexible: "Dates Flexible",
  departureCity: "Departure City",
  celebration: "Celebrating",
  travelerNames: "Traveler Names",
  servicesWanted: "Services Wanted",
  nightlyBudget: "Nightly Budget",
  totalBudget: "Total Budget",
  accommodationType: "Accommodation Type",
  roomType: "Room Type",
  amenities: "Amenities",
  flightClasses: "Flight Class",
  preferredAirline: "Preferred Airline",
  smallPlaneOk: "OK with Small Planes",
  bestExperience: "Best Travel Experience",
  personalStyle: "Personal Style",
  allergies: "Allergies",
  mobility: "Mobility Needs",
  drinkPreferences: "Drink Preferences",
  agreedPlanningFees: "Agreed to Planning Fees",
  agreedPackagedPricing: "Agreed to Packaged Pricing",
  agreedCommunication: "Agreed to Communication Terms",
  agreedPassportValidity: "Agreed to Passport Validity",
};

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

function formatIntakeValue(value: unknown): string | null {
  if (value === null || value === undefined || value === "") return null;
  if (Array.isArray(value)) return value.length ? value.join(", ") : null;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: z.infer<typeof inquirySchema>): string {
  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
  ];
  if (data.phone) rows.push(["Phone", formatPhone(data.phone)]);
  if (data.experience_type) rows.push(["Experience", data.experience_type]);
  if (data.destination) rows.push(["Destination", data.destination]);
  if (data.dates) rows.push(["Dates", data.dates]);
  if (data.travelers) rows.push(["Travelers", data.travelers]);
  if (data.referral_source) rows.push(["Referred By", data.referral_source]);

  const detailRows: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(data.intake_details ?? {})) {
    const formatted = formatIntakeValue(value);
    if (formatted === null) continue;
    detailRows.push([intakeLabels[key] ?? key, formatted]);
  }

  const rowHtml = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5ded2;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a7b68;white-space:nowrap;vertical-align:top;width:160px;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5ded2;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#442500;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;

  const detailsBlock = data.details
    ? `<div style="margin-top:24px;padding:20px;background:#f5f0e4;border:1px solid #e5ded2;">
         <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a7b68;">Trip Details</p>
         <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.6;color:#442500;">${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>
       </div>`
    : "";

  const intakeSection =
    detailRows.length > 0
      ? `<div style="margin-top:32px;">
           <p style="margin:0 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:18px;color:#442500;">Full Trip Intake</p>
           <table style="width:100%;border-collapse:collapse;margin-top:12px;">
             ${detailRows.map(([label, value]) => rowHtml(label, value)).join("")}
           </table>
         </div>`
      : "";

  return `
  <div style="background:#f5f0e4;padding:40px 20px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5ded2;">
      <div style="padding:32px 32px 24px;border-bottom:2px solid #442500;">
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;letter-spacing:0.12em;text-transform:uppercase;color:#442500;">ARP Experiences</p>
        <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8a7b68;">
          New ${data.form_type === "detailed" ? "Detailed Trip Intake" : "Quick Inquiry"}
        </p>
      </div>
      <div style="padding:24px 32px 32px;">
        <table style="width:100%;border-collapse:collapse;">
          ${rows.map(([label, value]) => rowHtml(label, value)).join("")}
        </table>
        ${detailsBlock}
        ${intakeSection}
      </div>
      <div style="padding:20px 32px;background:#442500;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.06em;color:#f5f0e4;">
          Reply directly to this email to respond to ${escapeHtml(data.name)}.
        </p>
      </div>
    </div>
  </div>`;
}

function buildEmailText(data: z.infer<typeof inquirySchema>): string {
  const lines = [
    `Type: ${data.form_type === "detailed" ? "Detailed Trip Intake" : "Quick Inquiry"}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${formatPhone(data.phone)}`,
    data.experience_type && `Experience: ${data.experience_type}`,
    data.destination && `Destination: ${data.destination}`,
    data.dates && `Dates: ${data.dates}`,
    data.travelers && `Travelers: ${data.travelers}`,
    data.referral_source && `Referred by: ${data.referral_source}`,
    data.details && `Details: ${data.details}`,
  ].filter(Boolean);

  const detailLines = Object.entries(data.intake_details ?? {})
    .map(([key, value]) => {
      const formatted = formatIntakeValue(value);
      return formatted === null ? null : `${intakeLabels[key] ?? key}: ${formatted}`;
    })
    .filter((line): line is string => line !== null);

  if (detailLines.length > 0) {
    lines.push("", "Full Trip Intake:", ...detailLines);
  }

  return lines.join("\n");
}

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
            html: buildEmailHtml(data),
            text: buildEmailText(data),
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
