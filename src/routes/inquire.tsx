import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { PageHeader, Section } from "@/components/page-shell";
import { submitInquiry } from "@/lib/inquiries.functions";

export const Route = createFileRoute("/inquire")({
  head: () => ({
    meta: [
      { title: "Inquiry — ARP Experiences" },
      {
        name: "description",
        content:
          "Begin an inquiry with ARP Experiences. Tell us about the person, the purpose, and the occasion.",
      },
      { property: "og:title", content: "Inquiry — ARP Experiences" },
      {
        property: "og:description",
        content: "Tell us about the person, the purpose, and the occasion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inquire,
});

const fieldClass =
  "mt-3 w-full border-b border-border bg-transparent pb-3 text-base font-light outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-oxblood";

const labelClass = "eyebrow block";

const timing = [
  {
    q: "How far in advance should we reach out?",
    a: "For private travel, three to six months is comfortable. For groups, weddings, and retreats, nine to twelve months allows for the strongest options — though we are glad to work with shorter timelines when we can.",
  },
  {
    q: "What kinds of travel do you plan?",
    a: "Private travel, multi-destination itineraries, honeymoons and milestone travel, family and multigenerational trips, group travel, retreats, destination weddings, and celebrations.",
  },
];

function Inquire() {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          experience_type: String(data.get("type") ?? ""),
          dates: String(data.get("dates") ?? ""),
          destination: String(data.get("destination") ?? ""),
          travelers: String(data.get("travelers") ?? ""),
          details: String(data.get("details") ?? ""),
        },
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or email hello@arpexperiences.com.",
      );
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Inquiry"
        title="Let's begin with a conversation."
        intro="Share a little about who is traveling, why, and how you'd like it to feel. We'll follow up personally."
      />

      <Section className="!pt-0">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="max-w-2xl space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className={fieldClass}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className={fieldClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="type">
                  Type of experience
                </label>
                <select id="type" name="type" className={fieldClass}>
                  <option>Private travel</option>
                  <option>Group travel</option>
                  <option>Retreat or off-site</option>
                  <option>Destination wedding</option>
                  <option>Celebration or gathering</option>
                  <option>Concierge experiences</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="dates">
                  Dates or timing
                </label>
                <input
                  id="dates"
                  name="dates"
                  maxLength={200}
                  className={fieldClass}
                  placeholder="Approximate"
                />
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="destination">
                  Destination
                </label>
                <input
                  id="destination"
                  name="destination"
                  maxLength={200}
                  className={fieldClass}
                  placeholder="Or open to ideas"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="travelers">
                  Number of travelers
                </label>
                <input
                  id="travelers"
                  name="travelers"
                  maxLength={50}
                  className={fieldClass}
                  placeholder="e.g. 2"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="details">
                Tell us about the occasion
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                maxLength={2000}
                className={fieldClass}
                placeholder="The purpose, the people, and how you'd like it to feel."
              />
            </div>

            <button type="submit" className="btn-arp" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send inquiry"}
            </button>

            {status === "sent" && (
              <p aria-live="polite" className="text-sm font-light text-muted-foreground">
                Thank you — your inquiry has been received. We'll follow up personally.
              </p>
            )}
            {status === "error" && (
              <p aria-live="polite" className="text-sm font-light text-oxblood">
                {error}
              </p>
            )}
          </form>

          <aside className="space-y-10">
            <div>
              <p className="eyebrow">Direct</p>
              <a
                href="mailto:hello@arpexperiences.com"
                className="link-underline mt-4 inline-block font-display text-2xl"
              >
                hello@arpexperiences.com
              </a>
            </div>
            <div className="rule-thin" />
            <div>
              <p className="eyebrow">What happens next</p>
              <ol className="mt-5 space-y-4 text-sm font-light leading-relaxed text-muted-foreground">
                <li>01 — We review your inquiry and respond personally.</li>
                <li>02 — A conversation about the person, purpose, and place.</li>
                <li>03 — A considered set of recommendations, not endless options.</li>
                <li>04 — We handle the details, the partners, and the arrival.</li>
              </ol>
            </div>
            <div className="rule-thin" />
            <div className="space-y-8">
              {timing.map((t) => (
                <div key={t.q}>
                  <p className="font-display text-xl leading-snug">{t.q}</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {t.a}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
