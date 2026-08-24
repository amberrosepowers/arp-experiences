import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader, Section } from "@/components/page-shell";

export const Route = createFileRoute("/inquire")({
  head: () => ({
    meta: [
      { title: "Inquire — ARP Experiences" },
      {
        name: "description",
        content:
          "Begin an inquiry with ARP Experiences. Tell us about the person, the purpose, and the occasion.",
      },
      { property: "og:title", content: "Inquire — ARP Experiences" },
      {
        property: "og:description",
        content: "Tell us about the person, the purpose, and the occasion.",
      },
    ],
  }),
  component: Inquire,
});

const fieldClass =
  "mt-3 w-full border-b border-border bg-transparent pb-3 text-base font-light outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-oxblood";

const labelClass = "eyebrow block";

function Inquire() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [...data.entries()]
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join("\n\n");
    window.location.href = `mailto:hello@arpexperiences.com?subject=${encodeURIComponent(
      "New inquiry — ARP Experiences",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Inquire"
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
                <input id="name" name="name" required className={fieldClass} placeholder="Full name" />
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
                <input id="dates" name="dates" className={fieldClass} placeholder="Approximate" />
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
                  className={fieldClass}
                  placeholder="Or open to ideas"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="travelers">
                  Number of travelers
                </label>
                <input id="travelers" name="travelers" className={fieldClass} placeholder="e.g. 2" />
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
                className={fieldClass}
                placeholder="The purpose, the people, and how you'd like it to feel."
              />
            </div>

            <button type="submit" className="btn-arp">
              Send inquiry
            </button>

            {sent && (
              <p className="text-sm font-light text-muted-foreground">
                Thank you — your email client should now be open with the details. If it didn't,
                write to hello@arpexperiences.com.
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
          </aside>
        </div>
      </Section>
    </>
  );
}
