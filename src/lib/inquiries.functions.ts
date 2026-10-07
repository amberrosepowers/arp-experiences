import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
  emailOptIn: "Opted In to Email Updates",
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

// ARP Experiences brand palette and type, with email-safe fallbacks for clients
// (like Gmail) that don't load web fonts.
const brand = {
  parchment: "#F5F0E4",
  card: "#FBF8F1",
  walnut: "#422E20",
  oxblood: "#5D221E",
  brass: "#A47F50",
  rule: "#E4D9C6",
  display: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
  body: "Archivo, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  logo: "https://www.arpexperiences.com/photos/arp-logo-walnut.png",
};

function buildEmailHtml(data: z.infer<typeof inquirySchema>): string {
  const isDetailed = data.form_type === "detailed";
  const intake = data.intake_details ?? {};
  const optedIn = intake["emailOptIn"] === true;

  const rows: Array<[string, string]> = [];
  if (data.experience_type) rows.push(["Experience", data.experience_type]);
  if (data.destination) rows.push(["Destination", data.destination]);
  if (data.dates) rows.push(["Dates", data.dates]);
  if (data.travelers) rows.push(["Travelers", data.travelers]);
  if (data.referral_source) rows.push(["Referred By", data.referral_source]);

  const detailRows: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(intake)) {
    if (key === "emailOptIn") continue;
    const formatted = formatIntakeValue(value);
    if (formatted === null) continue;
    // The detailed form also copies these answers into the summary fields above.
    if (key === "bestExperience" && formatted === data.details) continue;
    if (key === "servicesWanted" && formatted === data.experience_type) continue;
    if (key === "travelerNames" && formatted === data.travelers) continue;
    detailRows.push([intakeLabels[key] ?? key, formatted]);
  }

  const label = (text: string) =>
    `<p style="margin:0;font-family:${brand.body};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${brand.brass};">${escapeHtml(text)}</p>`;

  const rowHtml = ([name, value]: [string, string]) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${brand.rule};vertical-align:top;width:170px;">${label(name)}</td>
      <td style="padding:14px 0 14px 16px;border-bottom:1px solid ${brand.rule};vertical-align:top;font-family:${brand.body};font-size:15px;line-height:1.5;color:${brand.walnut};">${escapeHtml(value)}</td>
    </tr>`;

  const table = (items: Array<[string, string]>) =>
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${items.map(rowHtml).join("")}</table>`;

  const contact = [
    `<a href="mailto:${escapeHtml(data.email)}" style="color:${brand.walnut};text-decoration:underline;">${escapeHtml(data.email)}</a>`,
    data.phone
      ? `<a href="tel:${escapeHtml(data.phone.replace(/[^\d+]/g, ""))}" style="color:${brand.walnut};text-decoration:underline;">${escapeHtml(formatPhone(data.phone))}</a>`
      : "",
  ]
    .filter(Boolean)
    .join(`<span style="color:${brand.brass};padding:0 10px;">&middot;</span>`);

  const detailsBlock = data.details
    ? `<div style="margin-top:28px;padding:22px 24px;background:${brand.parchment};border-left:2px solid ${brand.brass};">
         ${label(isDetailed ? "Best Travel Experience" : "Trip Details")}
         <p style="margin:10px 0 0;font-family:${brand.display};font-size:19px;line-height:1.5;font-style:italic;color:${brand.walnut};">${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>
       </div>`
    : "";

  const intakeSection =
    detailRows.length > 0
      ? `<p style="margin:36px 0 4px;font-family:${brand.display};font-size:24px;font-weight:400;color:${brand.walnut};">${isDetailed ? "Full Trip Intake" : "Fine Print"}</p>
         ${table(detailRows)}`
      : "";

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:${brand.parchment};">
  <div style="background:${brand.parchment};padding:40px 16px;">
    <div style="max-width:620px;margin:0 auto;">
      <div style="text-align:center;padding:8px 0 28px;">
        <img src="${brand.logo}" width="150" alt="ARP Experiences" style="display:inline-block;width:150px;height:auto;border:0;">
      </div>
      <div style="background:${brand.card};border:1px solid ${brand.rule};padding:40px 36px 36px;">
        ${label(isDetailed ? "New Detailed Trip Intake" : "New Quick Inquiry")}
        <h1 style="margin:12px 0 0;font-family:${brand.display};font-size:34px;line-height:1.15;font-weight:400;color:${brand.walnut};">${escapeHtml(data.name)}</h1>
        <p style="margin:14px 0 0;font-family:${brand.body};font-size:15px;line-height:1.6;color:${brand.walnut};">${contact}</p>
        <p style="margin:16px 0 0;font-family:${brand.body};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${optedIn ? brand.oxblood : brand.brass};">
          ${optedIn ? "Opted in to email updates" : "Not opted in to email updates"}
        </p>
        <div style="height:1px;background:${brand.brass};margin:28px 0 8px;line-height:1px;font-size:1px;">&nbsp;</div>
        ${rows.length > 0 ? table(rows) : ""}
        ${detailsBlock}
        ${intakeSection}
        <div style="margin-top:36px;text-align:center;">
          <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:${brand.walnut};color:${brand.parchment};font-family:${brand.body};font-size:12px;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;padding:15px 30px;">Reply to ${escapeHtml(data.name.split(" ")[0] ?? data.name)}</a>
        </div>
      </div>
      <div style="background:${brand.walnut};padding:22px 36px;text-align:center;">
        <p style="margin:0;font-family:${brand.display};font-size:17px;font-style:italic;color:${brand.parchment};">Travel, thoughtfully experienced.</p>
      </div>
    </div>
  </div>
</body>
</html>`;
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

// Writes the inquiry to the Cloudflare D1 database bound as `DB` (arp-inquiries).
// Column names match migrations/0001_create_inquiries.sql.
async function saveInquiry(data: z.infer<typeof inquirySchema>): Promise<void> {
  const { env } = await import("cloudflare:workers");
  const intake = data.intake_details ?? {};
  const text = (key: string) => formatIntakeValue(intake[key]);
  const flag = (key: string) => (intake[key] === true ? 1 : 0);

  const row: Record<string, string | number | null> = {
    id: crypto.randomUUID(),
    form_type: data.form_type,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    experience_type: data.experience_type || null,
    dates: data.dates || null,
    destination: data.destination || null,
    travelers: data.travelers || null,
    details: data.details || null,
    referral_source: data.referral_source || null,
    address: text("address"),
    travel_dates_flexible: text("travelDatesFlexible"),
    departure_city: text("departureCity"),
    celebration: text("celebration"),
    traveler_names: text("travelerNames"),
    services_wanted: text("servicesWanted"),
    nightly_budget: text("nightlyBudget"),
    total_budget: text("totalBudget"),
    accommodation_type: text("accommodationType"),
    room_type: text("roomType"),
    amenities: text("amenities"),
    flight_classes: text("flightClasses"),
    preferred_airline: text("preferredAirline"),
    small_plane_ok: text("smallPlaneOk"),
    best_experience: text("bestExperience"),
    personal_style: text("personalStyle"),
    allergies: text("allergies"),
    mobility: text("mobility"),
    drink_preferences: text("drinkPreferences"),
    agreed_planning_fees: flag("agreedPlanningFees"),
    agreed_packaged_pricing: flag("agreedPackagedPricing"),
    agreed_communication: flag("agreedCommunication"),
    agreed_passport_validity: flag("agreedPassportValidity"),
    email_opt_in: flag("emailOptIn"),
    intake_details: JSON.stringify(intake),
  };

  const columns = Object.keys(row);
  await env.DB.prepare(
    `INSERT INTO inquiries (${columns.join(", ")}) VALUES (${columns.map(() => "?").join(", ")})`,
  )
    .bind(...Object.values(row))
    .run();
}

// Adds the inquiry as a row in Amber's private Google Sheet, via the Apps Script
// web app whose URL is stored in the INQUIRIES_SHEET_URL secret. The script
// (docs/inquiries-sheet-apps-script.js) adds the date and writes the header row.
async function appendToSheet(data: z.infer<typeof inquirySchema>): Promise<void> {
  const sheetUrl = process.env["INQUIRIES_SHEET_URL"];
  if (!sheetUrl) return;

  const intake = data.intake_details ?? {};
  const columns: Array<[string, string]> = [
    ["Form", data.form_type === "detailed" ? "Detailed Trip Intake" : "Quick Inquiry"],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone ? formatPhone(data.phone) : ""],
    ["Opted In to Email Updates", intake["emailOptIn"] === true ? "Yes" : "No"],
    ["Experience", data.experience_type],
    ["Destination", data.destination],
    ["Dates", data.dates],
    ["Travelers", data.travelers],
    ["Trip Details", data.details],
    ["Referred By", data.referral_source],
  ];
  for (const [key, label] of Object.entries(intakeLabels)) {
    if (key === "emailOptIn") continue;
    columns.push([label, formatIntakeValue(intake[key]) ?? ""]);
  }

  const response = await fetch(sheetUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      headers: columns.map(([label]) => label),
      values: columns.map(([, value]) => value),
    }),
  });
  if (!response.ok) {
    console.error("Failed to add inquiry to Google Sheet", response.status);
  }
}

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    try {
      await saveInquiry(data);
    } catch (error) {
      console.error("Failed to save inquiry", error);
      throw new Error("We couldn't save your inquiry. Please try again.");
    }

    // The Google Sheet copy is best-effort too: D1 already holds the inquiry.
    try {
      await appendToSheet(data);
    } catch (sheetError) {
      console.error("Inquiry Google Sheet error", sheetError);
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
