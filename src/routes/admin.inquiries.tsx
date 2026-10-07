import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState, type FormEvent } from "react";
import { listInquiries, type InquiryRow } from "@/lib/admin-inquiries.functions";

export const Route = createFileRoute("/admin/inquiries")({
  head: () => ({
    meta: [
      { title: "Inquiries — ARP Experiences" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminInquiries,
});

const STORAGE_KEY = "arp-inquiries-password";

// Shown in this order on each card, skipping empty answers.
const tripFields: Array<[string, string]> = [
  ["experience_type", "Experience"],
  ["services_wanted", "Services Wanted"],
  ["destination", "Destination"],
  ["dates", "Dates"],
  ["travel_dates_flexible", "Dates Flexible"],
  ["departure_city", "Departure City"],
  ["travelers", "Travelers"],
  ["traveler_names", "Traveler Names"],
  ["celebration", "Celebrating"],
  ["nightly_budget", "Nightly Budget"],
  ["total_budget", "Total Budget"],
  ["accommodation_type", "Accommodation Type"],
  ["room_type", "Room Type"],
  ["amenities", "Amenities"],
  ["flight_classes", "Flight Class"],
  ["preferred_airline", "Preferred Airline"],
  ["small_plane_ok", "OK with Small Planes"],
  ["personal_style", "Personal Style"],
  ["allergies", "Allergies"],
  ["mobility", "Mobility Needs"],
  ["drink_preferences", "Drink Preferences"],
  ["address", "Address"],
  ["referral_source", "Referred By"],
];

const agreementFields: Array<[string, string]> = [
  ["agreed_planning_fees", "Planning fees"],
  ["agreed_packaged_pricing", "Packaged pricing"],
  ["agreed_communication", "Communication"],
  ["agreed_passport_validity", "Passport validity"],
];

const csvColumns: Array<[string, string]> = [
  ["created_at", "Received"],
  ["form_type", "Form"],
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["email_opt_in", "Email Opt-In"],
  ...tripFields,
  ["details", "Trip Details"],
  ["best_experience", "Best Travel Experience"],
];

function readStoredPassword(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function storePassword(value: string | null) {
  try {
    if (value) sessionStorage.setItem(STORAGE_KEY, value);
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage can be unavailable (private windows); the page still works for this visit.
  }
}

function text(row: InquiryRow, key: string): string {
  const value = row[key];
  return value === null || value === undefined ? "" : String(value).trim();
}

function formatReceived(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function downloadCsv(rows: InquiryRow[]) {
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
  const lines = [
    csvColumns.map(([, label]) => escape(label)).join(","),
    ...rows.map((row) =>
      csvColumns
        .map(([key]) => {
          if (key === "email_opt_in") return escape(row[key] === 1 ? "Yes" : "No");
          if (key === "created_at") return escape(formatReceived(text(row, key)));
          return escape(text(row, key));
        })
        .join(","),
    ),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `arp-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function InquiryCard({ row }: { row: InquiryRow }) {
  const isDetailed = row["form_type"] === "detailed";
  const optedIn = row["email_opt_in"] === 1;
  const phone = text(row, "phone");
  const details = text(row, "details");
  const bestExperience = text(row, "best_experience");
  const fields = tripFields
    .map(([key, label]) => [label, text(row, key)] as const)
    .filter(([, value]) => value !== "")
    // The detailed form copies these answers into the shared columns too; show them once.
    .filter(
      ([label, value]) =>
        !(label === "Services Wanted" && value === text(row, "experience_type")) &&
        !(label === "Traveler Names" && value === text(row, "travelers")),
    );
  const agreed = agreementFields.filter(([key]) => row[key] === 1).map(([, label]) => label);

  return (
    <article className="border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="font-display text-3xl text-foreground">{text(row, "name")}</h2>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {formatReceived(text(row, "created_at"))}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.1em]">
        <span className="bg-secondary px-2.5 py-1 text-secondary-foreground">
          {isDetailed ? "Detailed Trip Intake" : "Quick Inquiry"}
        </span>
        <span
          className={
            optedIn
              ? "bg-primary px-2.5 py-1 text-primary-foreground"
              : "bg-muted px-2.5 py-1 text-muted-foreground"
          }
        >
          {optedIn ? "Opted in to emails" : "No marketing emails"}
        </span>
      </div>

      <p className="mt-5 text-sm">
        <a
          className="text-primary underline underline-offset-4"
          href={`mailto:${text(row, "email")}`}
        >
          {text(row, "email")}
        </a>
        {phone && (
          <>
            <span className="mx-3 text-muted-foreground">·</span>
            <a className="text-primary underline underline-offset-4" href={`tel:${phone}`}>
              {phone}
            </a>
          </>
        )}
      </p>

      {fields.length > 0 && (
        <dl className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {fields.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {details && (
        <div className="mt-6 bg-background p-5">
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Trip Details
          </p>
          <p className="mt-2 whitespace-pre-line font-display text-lg leading-relaxed">{details}</p>
        </div>
      )}

      {bestExperience && bestExperience !== details && (
        <div className="mt-4 bg-background p-5">
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Best Travel Experience
          </p>
          <p className="mt-2 whitespace-pre-line font-display text-lg leading-relaxed">
            {bestExperience}
          </p>
        </div>
      )}

      <p className="mt-6 text-xs text-muted-foreground">
        {agreed.length > 0 ? `Agreed to: ${agreed.join(", ")}` : "No fine-print agreements checked"}
      </p>
    </article>
  );
}

function AdminInquiries() {
  const load = useServerFn(listInquiries);
  const [inquiries, setInquiries] = useState<InquiryRow[] | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const [optInOnly, setOptInOnly] = useState(false);

  async function fetchInquiries(password: string) {
    setStatus("loading");
    setError("");
    try {
      const result = await load({ data: { password } });
      storePassword(password);
      setInquiries(result.inquiries);
      setStatus("idle");
    } catch (err) {
      storePassword(null);
      setInquiries(null);
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  useEffect(() => {
    const saved = readStoredPassword();
    if (saved) void fetchInquiries(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = String(new FormData(event.currentTarget).get("password") ?? "");
    void fetchInquiries(password);
  }

  if (inquiries === null) {
    return (
      <section className="mx-auto max-w-md px-6 py-24">
        <p className="eyebrow">Private</p>
        <h1 className="mt-4 text-5xl">Inquiries</h1>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <label
            className="block text-xs uppercase tracking-[0.1em] text-muted-foreground"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full border border-input bg-card px-4 py-3 text-base"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary px-4 py-3 text-xs uppercase tracking-[0.14em] text-primary-foreground disabled:opacity-60"
          >
            {status === "loading" ? "Opening…" : "View inquiries"}
          </button>
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
        </form>
      </section>
    );
  }

  const shown = optInOnly ? inquiries.filter((row) => row["email_opt_in"] === 1) : inquiries;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="eyebrow">Private</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl">Inquiries</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {shown.length} {shown.length === 1 ? "inquiry" : "inquiries"}, newest first
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={optInOnly}
              onChange={(e) => setOptInOnly(e.target.checked)}
            />
            Email opt-ins only
          </label>
          <button
            type="button"
            onClick={() => downloadCsv(shown)}
            className="border border-primary px-4 py-2 text-xs uppercase tracking-[0.14em] text-primary"
          >
            Download spreadsheet
          </button>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {shown.length === 0 ? (
          <p className="text-muted-foreground">No inquiries yet.</p>
        ) : (
          shown.map((row) => <InquiryCard key={String(row["id"])} row={row} />)
        )}
      </div>
    </section>
  );
}
