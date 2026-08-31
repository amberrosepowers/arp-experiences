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

function Services() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="Services"
        title={
          <>
            <span className="block">Exceptional places.</span>
            <span className="block">Exceptional experiences.</span>
          </>
        }
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

      <Section className="!pt-0">
        <div className="text-center">
          <Link to="/inquire" className="btn-arp">
            Begin an inquiry
          </Link>
        </div>
      </Section>

    </>
  );
}
