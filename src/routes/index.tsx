import { createFileRoute, Link } from "@tanstack/react-router";
import heroPlaceholder from "@/assets/hero-placeholder.jpg";
import serviceGatheringsPlaceholder from "@/assets/service-gatherings-placeholder.jpg";
import serviceConciergePlaceholder from "@/assets/service-concierge-placeholder.jpg";
import serviceTravelPlaceholder from "@/assets/service-travel-placeholder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARP Experiences — Travel, thoughtfully experienced." },
      {
        name: "description",
        content:
          "ARP Experiences is a relationship-led travel and hospitality company creating exceptional travel and gathering experiences for discerning clients.",
      },
      { property: "og:title", content: "ARP Experiences — Travel, thoughtfully experienced." },
      {
        property: "og:description",
        content: "Exceptional places. Personal relationships. Experiences worth remembering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const approach = [
  {
    title: "Relationship-Led",
    body: "Exceptional travel begins with understanding people. We build relationships with our clients, our hospitality partners, and the destinations we represent.",
  },
  {
    title: "Hospitality-Rooted",
    body: "We understand what makes people feel welcomed, cared for, and genuinely considered — because we have lived it from inside the industry.",
  },
  {
    title: "Experience-Driven",
    body: "The hotel is only part of it. We think about where you stay, where you gather, what you do, who you meet, and how it all comes together.",
  },
  {
    title: "Well-Connected",
    body: "Relationships across hotels, destinations, and hospitality professionals bring insight, access, and value to every trip.",
  },
  {
    title: "Personally Edited",
    body: "We don't believe in overwhelming clients with endless options. We believe in knowing enough to recommend the right ones.",
  },
  {
    title: "Detail-Oriented",
    body: "The room, the table, the timing, the welcome, the connection, the experience waiting when you arrive.",
  },
];

// Placeholder testimonials — swap for real client quotes when ready.
const testimonials = [
  {
    quote:
      "Every detail was considered before we thought to ask. The hotel knew our names, the table was already held, and the week unfolded without a single loose end.",
    name: "Private client",
    detail: "Family travel, Amalfi Coast",
  },
  {
    quote:
      "We had twenty-two people across four days and it felt effortless. Amber's relationships turned a company off-site into something our team still talks about.",
    name: "Leadership off-site",
    detail: "Technology company, Mexico City",
  },
  {
    quote:
      "She understood the occasion before she recommended a single property. That's the difference — it never felt like a list of options, it felt like the right answer.",
    name: "Milestone celebration",
    detail: "Anniversary travel, Paris",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={heroPlaceholder}
            alt="Warm, wood-panelled hotel suite in late afternoon light"
            width={1600}
            height={1104}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oxblood/75 via-walnut/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-6 pb-16 md:px-12 md:pb-24">
            <p className="eyebrow fade-up !text-primary-foreground/75">
              {"\n"}
            </p>
            <h1 className="fade-up mt-6 max-w-3xl text-5xl leading-[1.02] text-primary-foreground md:text-8xl">
              Travel, thoughtfully experienced.
            </h1>
            <div className="fade-up mt-10 flex flex-wrap gap-4">
              <Link to="/inquire" className="btn-arp-ghost">
                Begin an inquiry
              </Link>
              <Link
                to="/services"
                className="btn-arp-ghost !border-transparent !px-0 underline underline-offset-8"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <p className="mx-auto max-w-4xl text-center font-display text-3xl leading-[1.35] md:text-5xl">
          Where you go matters.
          <span className="text-oxblood"> How you experience it matters more.</span>
        </p>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-light leading-relaxed text-muted-foreground">
          ARP Experiences is a relationship-led travel and hospitality company creating exceptional
          travel and gathering experiences for discerning clients. We don't simply arrange travel.
          We create experiences around it.
        </p>
      </section>

      {/* Services trio */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              img: serviceTravelPlaceholder,
              w: 1408,
              h: 1008,
              label: "Travel",
              body: "Personalized planning and access for clients seeking exceptional places — hotels, villas, private aviation, yachts, and multi-destination itineraries.",
            },
            {
              img: serviceGatheringsPlaceholder,
              w: 1408,
              h: 1008,
              label: "Groups & Gatherings",
              body: "Retreats, off-sites, destination weddings, celebrations, and reunions in places that elevate the occasion.",
            },
            {
              img: serviceConciergePlaceholder,
              w: 1200,
              h: 1504,
              label: "Experiences & Concierge",
              body: "Private dining, cultural experiences, guides, transportation, and the details that transform a trip into something more.",
            },
          ].map((s) => (
            <article key={s.label} className="group">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  width={s.w}
                  height={s.h}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h2 className="mt-7 text-3xl">{s.label}</h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/services" className="eyebrow link-underline">
            All services
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="mt-28 bg-secondary/70">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-6 max-w-2xl text-4xl md:text-6xl">
            We begin with the person, not the destination.
          </h2>
          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {approach.map((a) => (
              <div key={a.title} className="border-t border-border pt-6">
                <h3 className="eyebrow !text-foreground">{a.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <p className="eyebrow">In their words</p>
        <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl">
          Relationships first — and it shows in the travel experience.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border-t border-border pt-8">
              <p className="font-display text-2xl leading-snug">“{t.quote}”</p>
              <footer className="mt-6">
                <p className="eyebrow !text-foreground">{t.name}</p>
                <p className="mt-2 text-sm font-light text-muted-foreground">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="bg-secondary/70">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <img
              src={serviceConciergePlaceholder}
              alt="Hotel interior detail with brass lamp and marble floor"
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="eyebrow">The founder</p>
              <h2 className="mt-6 text-4xl md:text-5xl">Amber Rose Powers</h2>
              <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground">
                More than two decades across fashion, boutique hotels, experiential design,
                partnerships, relationship management, and travel — from launching Detroit
                Foundation Hotel to serving as Chief Relationship Officer at Aparium Hotel Group.
              </p>
              <p className="mt-6 font-display text-2xl leading-snug">
                Understand the person, understand the purpose, know the place, and consider every
                detail.
              </p>
              <Link to="/about" className="eyebrow link-underline mt-10 inline-block">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-oxblood text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12">
          <p className="eyebrow !text-primary-foreground/70">Brand promise</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight md:text-6xl">
            Exceptional places. Personal relationships. Experiences worth remembering.
          </h2>
          <Link to="/inquire" className="btn-arp-ghost mt-12">
            Begin an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
