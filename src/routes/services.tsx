import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";
import travelAsset from "@/assets/service-travel.jpg.asset.json";
import gatheringsAsset from "@/assets/service-gatherings.jpg.asset.json";
import conciergeAsset from "@/assets/service-concierge.jpg.asset.json";

const destination = travelAsset.url;
const gathering = gatheringsAsset.url;
const lobby = conciergeAsset.url;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARP Experiences" },
      {
        name: "description",
        content:
          "Private travel, group travel, retreats, destination weddings, celebrations, and concierge experiences from ARP Experiences.",
      },
      { property: "og:title", content: "Services — ARP Experiences" },
      {
        property: "og:description",
        content: "Travel. Groups & Gatherings. Experiences & Concierge.",
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    label: "Travel",
    lede: "Personalized travel planning and access for clients seeking exceptional places and experiences.",
    img: destination,
    w: 1440,
    h: 1920,
    items: [
      "Hotel and resort bookings",
      "Villas and private residences",
      "Private aviation",
      "Yacht and charter experiences",
      "Cruises",
      "Air travel",
      "Multi-destination travel",
      "Custom itineraries",
      "Honeymoons and milestone travel",
      "Family and multigenerational travel",
      "VIP and high-touch travel",
    ],
  },
  {
    label: "Groups & Gatherings",
    lede: "Bringing people together in places that elevate the experience.",
    img: gathering,
    w: 1440,
    h: 1920,
    items: [
      "Corporate retreats",
      "Executive off-sites",
      "Leadership gatherings",
      "Incentive travel",
      "Brand and client events",
      "Wellness and lifestyle retreats",
      "Destination weddings",
      "Wedding room blocks",
      "Family reunions",
      "Milestone celebrations",
      "Group leisure travel",
      "Multi-room and multi-property bookings",
    ],
  },
  {
    label: "Experiences & Concierge",
    lede: "The details that transform a trip into something more.",
    img: lobby,
    w: 1440,
    h: 1920,
    items: [
      "Restaurant reservations",
      "Private dining",
      "Chef experiences",
      "Cultural experiences",
      "Activities and excursions",
      "Nightlife",
      "Shopping",
      "Wellness experiences",
      "Local guides",
      "Transportation",
      "Private tours",
      "Special occasions and VIP requests",
      "Destination-specific recommendations",
    ],
  },
];

const howWeWork = [
  {
    q: "How do we begin?",
    a: "With a conversation. We start by understanding the person, the purpose, and the occasion before recommending a place or a property. From there, we shape the travel and the experiences around it.",
  },
  {
    q: "What does working with an advisor add?",
    a: "Relationships and insight. Our connections across hotels, destinations, and hospitality partners bring access, added value, and a point of view you cannot find in a search result.",
  },
  {
    q: "Do you only book hotels?",
    a: "No. The hotel is one part of the experience. We also arrange dining, private experiences, guides, transportation, and the details waiting when you arrive.",
  },
  {
    q: "How do you charge?",
    a: "Planning fees vary by the scope and complexity of the trip or gathering. We share fees clearly before any work begins.",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Exceptional places. Exceptional experiences."
        intro="We specialize in private travel, group travel, retreats, destination weddings, celebrations, and hospitality experiences — rooted in relationships rather than transactions."
      />

      {groups.map((g, i) => (
        <Section key={g.label} className={i === 0 ? "!pt-0" : ""}>
          <div
            className={`grid items-start gap-14 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <img
              src={g.img}
              alt={g.label}
              loading="lazy"
              width={g.w}
              height={g.h}
              className="aspect-[4/5] w-full object-cover"
            />
            <div>
              <p className="eyebrow">{`0${i + 1}`}</p>
              <h2 className="mt-5 text-4xl md:text-5xl">{g.label}</h2>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
                {g.lede}
              </p>
              <ul className="mt-10 grid gap-y-4 sm:grid-cols-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-3 text-sm font-light tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <section id="how-we-work" className="bg-secondary/70">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-6 max-w-2xl text-4xl md:text-5xl">
            A few questions we're asked most often.
          </h2>
          <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {howWeWork.map((f) => (
              <div key={f.q} className="border-t border-border pt-6">
                <h3 className="text-2xl leading-snug">{f.q}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center">
          <h2 className="mx-auto max-w-2xl text-4xl leading-tight md:text-5xl">
            Tell us about the person, the purpose, and the place.
          </h2>
          <Link to="/inquire" className="btn-arp mt-12">
            Begin an inquiry
          </Link>
        </div>
      </Section>
    </>
  );
}
