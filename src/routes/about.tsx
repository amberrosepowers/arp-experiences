import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";
import founderPortraitAsset from "@/assets/founder-portrait.jpg.asset.json";

const founderPortrait = founderPortraitAsset.url;
const partnersImage = "/photos/about-closing-staircase.jpg";
const approachImage = "/photos/about-approach-window-flowers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARP Experiences" },
      {
        name: "description",
        content:
          "ARP Experiences brings together travel, hospitality, relationships, and experience design. Founded by Amber Rose Powers.",
      },
      { property: "og:title", content: "About — ARP Experiences" },
      {
        property: "og:description",
        content:
          "Founded by Amber Rose Powers, ARP Experiences approaches travel through a hospitality lens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
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
    body: "We think about where you stay, where you gather, what you do, who you meet, and how it all comes together.",
  },
  {
    title: "Well-Connected",
    body: "Our relationships across hotels, destinations, and hospitality professionals bring insight, access, value, and a personal touch.",
  },
  {
    title: "Personally Edited",
    body: "We don't believe in overwhelming clients with endless options. We believe in knowing enough to recommend the right ones.",
  },
  {
    title: "Detail-Oriented",
    body: "The location, the atmosphere, the welcome, the room choice, the amenities, the F&B, the design, the hospitality — it all matters to us.",
  },
];

const partners = [
  "Aman",
  "Auberge Collection",
  "Belmond — Bellini Club",
  "Dorchester Collection — Diamond Club",
  "Four Seasons — Preferred Partner",
  "Hilton for Luxury",
  "Hyatt Privé",
  "IHG Destined",
  "Langham — Couture",
  "Mandarin Oriental — Fan Club",
  "Marriott — STARS & Luminous",
  "Maybourne — Illustrated",
  "Oetker Hotels — Masterpiece Collection",
  "One&Only",
  "Preferred Hotels & Resorts",
  "Relais & Châteaux",
  "Rocco Forte — Knights",
  "Rosewood — Elite",
  "Shangri-La Hotels & Resorts",
  "The Leading Hotels of the World",
  "The Peninsula — PenClub",
  "Virtuoso",
  "Waldorf Astoria Hotels & Residences",
];

function About() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="About"
        title="Travel, thoughtfully experienced."
        intro="ARP Experiences is a relationship-led travel and hospitality company creating exceptional travel and gathering experiences for discerning clients. We don't simply arrange travel. We create experiences around it."
        introClassName="max-w-4xl"
      />

      <div className="-mt-10 mb-10 text-center md:-mt-14">
        <Link to="/inquire" className="btn-arp-outline">
          Inquire
        </Link>
      </div>

      <Section className="!pt-0 !pb-0">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <img
            src={approachImage}
            alt="Fresh flowers on a desk beside a tall window"
            loading="lazy"
            width={900}
            height={1125}
            className="aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              We begin with the person, then build the experience.
            </h2>
            <div className="mt-10 space-y-6">
              {approach.map((a) => (
                <div key={a.title} className="border-t border-border pt-5">
                  <h3 className="font-display text-xl text-oxblood">{a.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-secondary/70">
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="order-2 px-6 py-16 md:order-1 md:px-12 md:py-20">
              <p className="eyebrow">Preferred Partners</p>
              <h2 className="mt-6 max-w-lg text-3xl md:text-4xl">
                Direct relationships, meaningful benefits.
              </h2>
              <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
                We invest significant time building direct relationships with the properties we
                recommend, so our clients receive priority consideration, exclusive rates, access to
                unpublished availability, and meaningful benefits — at no additional cost to you.
                Some of the preferred partner programs we work with:
              </p>
              <div className="mt-10 columns-2 gap-x-8">
                {partners.map((p) => (
                  <p
                    key={p}
                    className="break-inside-avoid border-b border-border py-2.5 font-display text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={partnersImage}
              alt="Grand curved staircase with wrought-iron railing and glass orb lighting"
              loading="lazy"
              width={900}
              height={1200}
              className="order-1 h-full min-h-[420px] w-full object-cover md:order-2"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <img
              src={founderPortrait}
              alt="Portrait of Amber Rose Powers, founder of ARP Experiences"
              loading="lazy"
              width={933}
              height={1400}
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="eyebrow">Our Founder</p>
          </div>
          <div className="space-y-6 text-base font-light leading-relaxed text-muted-foreground">
            <p className="font-display text-3xl leading-snug text-foreground">
              Amber Rose Powers — Founder
            </p>
            <p>
              Amber is a hospitality and travel professional with over two decades of experience
              across fashion, boutique hotels, experiential design, partnerships, relationship
              management, and travel. She is highly relationship-driven and is passionate about
              helping others to experience travel and gather well.
            </p>
            <p>
              Her career began in fashion, with a degree in Apparel Design and experience spanning
              design, PR, sales, and brand relationships, before she moved into real estate
              development and boutique hospitality — helping launch Detroit Foundation Hotel and
              later serving as its Director of Lifestyle, developing experiential programming and
              managing VIP relationships alongside a Michelin-starred chef.
            </p>
            <p>
              She subsequently joined Aparium Hotel Group headquarters in Chicago as Chief
              Relationship Officer, working across a portfolio of boutique hotels with a focus on
              relationships, partnerships, culture, and lifestyle-driven initiatives.
            </p>
            <p>
              In 2022, Amber brought that hospitality perspective into travel advising, developing a
              deep network of industry relationships and firsthand knowledge of the hotels,
              destinations, and partners that create exceptional guest experiences.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
