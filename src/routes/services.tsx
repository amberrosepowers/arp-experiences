import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARP Experiences" },
      {
        name: "description",
        content:
          "Hotel bookings, itinerary planning with concierge services, group experiences, cruises, and flights from ARP Experiences.",
      },
      { property: "og:title", content: "Services — ARP Experiences" },
      {
        property: "og:description",
        content: "How ARP Experiences takes care of your trip.",
      },
    ],
  }),
  component: Services,
});

type Block = {
  title: string;
  num: string;
  lede: string;
  paragraphs?: string[];
  quote?: string;
  paragraphs2?: string[];
  items?: string[];
  investment: string;
  finenote?: string;
  inquireType?: string;
  inquireLabel?: string;
  externalLink?: string;
  externalLinkLabel?: string;
};

type Offering = {
  slug: string;
  img?: string;
  imgAlt?: string;
  blocks: Block[];
};

const offerings: Offering[] = [
  {
    slug: "hotel-only-bookings",
    img: "/photos/offering-hotel-seafront-room.jpg",
    imgAlt: "Elegant seafront hotel room with arched balcony doors",
    blocks: [
      {
        title: "Hotel Only Bookings",
        num: "01",
        inquireType: "Hotel Only Booking",
        inquireLabel: "Inquire about Hotel Booking",
        lede: "A more personal layer to hotel bookings — whether you know exactly where you want to stay, or you're looking for us to uncover the right place.",
        paragraphs: [
          "We connect directly with the property before you arrive, sharing who you are, what matters to you, and how you'd like the stay to feel — so the right people know you're coming. Because the experience isn't simply what comes with the room. It's how you're welcomed into it.",
          "Through our preferred partner relationships, hotel bookings come with benefits and privileges that may not be available through direct bookings, credit card portals, or other booking platforms:",
        ],
        items: [
          "Daily breakfast for up to two guests per room",
          "Room or suite upgrade, subject to availability",
          "Early check-in and late check-out, subject to availability",
          "Hotel or resort credit",
          "Exclusive welcome amenities",
          "Additional benefits based on the property and partner program",
        ],
        investment: "Complimentary",
        finenote:
          "If you'd like us to research and select hotel options within your destination of choice, a $150 credit card guarantee applies and is charged only if you choose not to book through ARP Experiences.",
      },
    ],
  },
  {
    slug: "hotel-self-booking-portal",
    img: "/photos/offering-portal-suite-desk.jpg",
    imgAlt: "Quiet suite sitting area with desk by a window",
    blocks: [
      {
        title: "Hotel Self-Booking Client Portal",
        num: "02",
        lede: "For the traveler who already knows where they want to stay, or prefers to research independently.",
        paragraphs: [
          "Our client booking portal gives you access to select preferred partner rates while allowing you to browse and book on your own time. Once reserved, your stay is still personally serviced by ARP Experiences — we'll connect with the property ahead of your arrival, arrange your preferred partner amenities, note your preferences, advocate for upgrades, and make sure your reservation receives the attention it deserves.",
        ],
        quote: "The ease of booking yourself. The relationships behind the reservation.",
        paragraphs2: [
          "Portal access is reserved for registered ARP Experiences clients — reach out through our inquiry page to be welcomed in. Not every hotel partner is available in the portal just yet; if you don't see the hotel you're looking for, simply reach out and we'll arrange it directly, with applicable preferred partner benefits applied.",
        ],
        investment: "Complimentary",
        externalLink: "https://trips.foratravel.com/amber-rose-powers/book",
        externalLinkLabel: "Go to the Booking Portal",
      },
    ],
  },
  {
    slug: "essential-itinerary-planning",
    img: "/photos/offering-itinerary-colonnade.jpg",
    imgAlt: "Sunlit stone colonnade with long shadows",
    blocks: [
      {
        title: "Essential Itinerary Planning",
        num: "03",
        inquireType: "Essential Itinerary Planning",
        inquireLabel: "Inquire about Essential Itinerary Planning",
        lede: "For travelers who want accommodations, tours, and transportation handled — without the full concierge layer.",
        paragraphs: [
          "We take a tailored approach to every itinerary, designing each one around your preferences and how you want your travel experience to feel. We take care of the essential parts of your trip, so you know where you're staying, how you're getting there, and what you will experience.",
        ],
        items: [
          "Research and selection of accommodations tailored to your preferences and travel style",
          "Booking and management of tours, activities, and immersive experiences",
          "Ground transportation — private transfers, drivers, trains, ferries, and rental vehicles",
          "A beautifully organized digital itinerary with confirmations and essential travel documents",
          "Direct connection with the hotel concierge team for reservation scheduling",
          "Post-trip follow-up to gather feedback and refine future travel",
        ],
        investment: "Starting at $525 per week of travel",
      },
    ],
  },
  {
    slug: "full-itinerary-planning",
    img: "/photos/service-concierge-balcony.jpg",
    imgAlt: "Champagne chilling on a Paris balcony at golden hour",
    blocks: [
      {
        title: "Full Itinerary Planning with Concierge Services",
        num: "04",
        inquireType: "Full Itinerary Planning with Concierge",
        inquireLabel: "Inquire about Full Itinerary Planning",
        lede: "For travelers who want more than just the essentials — every detail of the trip, planned strategically throughout.",
        paragraphs: [
          "From accommodations, tours, and transportation to dining reservations, spa appointments, golf tee times, wellness activities, and any other experience you'd like, we design your itinerary around your preferences and how you want your trip to feel.",
        ],
        items: [
          "Research and selection of accommodations tailored to your preferences and travel style",
          "Booking and management of tours, activities, and immersive experiences",
          "Ground transportation — private transfers, drivers, trains, ferries, and rental vehicles",
          "Concierge-level restaurant and cocktail reservations",
          "Spa appointments and wellness experiences",
          "Golf tee times",
          "A beautifully organized digital itinerary with confirmations and essential travel documents",
          "Access to our trusted local partners throughout your time away",
          "Special requests and personal touches arranged throughout your stay",
          "Post-trip follow-up to gather feedback and refine future travel",
        ],
        investment: "Starting at $1,050 per week of travel",
      },
    ],
  },
  {
    slug: "group-bookings-experiences",
    img: "/photos/service-gatherings-dining.jpg",
    imgAlt: "Wood-paneled dining room set for a group, with a statement ring-light fixture",
    blocks: [
      {
        title: "Group Bookings & Experiences",
        num: "05",
        inquireType: "Group Booking",
        inquireLabel: "Inquire about Group Booking",
        lede: "Some of the most meaningful travel happens together — and it starts with the right location and logistics.",
        paragraphs: [
          "ARP Experiences sources locations and negotiates group rates, room blocks, amenities, upgrades, and concessions with hotels, resorts, cruise lines, and hospitality partners on your behalf — from wedding room blocks to corporate group stays, retreats, and milestone celebrations.",
        ],
        items: [
          "Guidance choosing the right accommodation",
          "Room category and rate negotiations",
          "Meeting space and F&B minimum negotiation",
          "Corporate and executive retreats",
          "Leadership gatherings and off-sites",
          "Wellness retreats",
          "Multigenerational travel",
          "Milestone celebrations",
          "Group cruises and sailing experiences",
        ],
        investment: "Complimentary",
        finenote:
          "If you'd like us to source hotels, negotiate rates, and request proposals for your group, a $750 credit card guarantee applies and is charged only if you choose not to book through ARP Experiences. If you'd like any on-site logistics, or offsite activities, dining, or transportation coordinated for your gathering, fees may apply based on scope.",
      },
    ],
  },
  {
    slug: "cruise-bookings",
    img: "/photos/service-travel-malta.jpg",
    imgAlt: "Stone archway framing a yacht in a Malta harbor",
    blocks: [
      {
        title: "Cruise Bookings",
        num: "06",
        inquireType: "Cruise",
        inquireLabel: "Inquire about Cruise Booking",
        lede: "That same personal layer to cruise bookings — whether you know exactly which sailing you want, or you're looking for us to uncover the right one.",
        paragraphs: [
          "We research, recommend, and book on your behalf with the same care and attention as any hotel reservation. Cruises often include onboard credit depending on the ship and specific sailing — among the cruise lines we work with are Explora Journeys, Ponant, Aman at Sea, Orient Express Sailing Yachts, Celebrity Cruises, Four Seasons Yachts, The Ritz-Carlton Yacht Collection, Uniworld, Sea Cloud Cruises, Belmond, Silversea, and National Geographic | Lindblad Expeditions.",
        ],
        investment: "Complimentary",
        finenote:
          "If you'd like us to research and select cruise options within your destination of choice, a $150 credit card guarantee applies and is charged only if you choose not to book through ARP Experiences.",
      },
      {
        title: "Flight Services",
        num: "07",
        inquireType: "A La Carte Bookings & Services",
        inquireLabel: "Inquire about Flight Services",
        lede: "From premium economy through first class, arranged and managed alongside the rest of your itinerary.",
        paragraphs: [
          "We keep every moving piece connected — and when plans change, we're there. Our 24/7 support means you have someone to turn to when a flight is delayed, a connection shifts, or the unexpected happens mid-trip. No waiting in an airport queue. No navigating another time zone alone. Just someone who already knows where you're going — and what comes next.",
        ],
        investment: "$50 ticketing fee per passenger",
      },
    ],
  },
  {
    slug: "a-la-carte-offerings",
    img: "/photos/offering-alacarte-staircase-orbs.jpg",
    imgAlt: "Grand curved staircase viewed from above, hung with glass orb lighting",
    blocks: [
      {
        title: "A La Carte Bookings & Services",
        num: "08",
        inquireType: "A La Carte Bookings & Services",
        inquireLabel: "Inquire about A La Carte Bookings & Services",
        lede: "Individual travel offerings, each thoughtfully tailored to your needs.",
        items: [
          "Villa bookings",
          "Apartment bookings",
          "Yacht charters",
          "Private aviation",
          "Concierge services",
          "Travel consultation session",
          "Special experiences and celebrations",
          "Other custom travel arrangements",
        ],
        investment: "Varies by scope",
        finenote: "Fees may apply depending on the request and scope of planning needed.",
      },
    ],
  },
];

function BlockContent({ block }: { block: Block }) {
  return (
    <div>
      <p className="font-display text-2xl text-brass">{block.num}</p>
      <h2 className="mt-2 text-3xl md:text-4xl">{block.title}</h2>
      <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
        {block.lede}
      </p>

      {block.paragraphs?.map((p) => (
        <p
          key={p.slice(0, 24)}
          className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground"
        >
          {p}
        </p>
      ))}

      {block.quote && (
        <p className="mt-6 max-w-xl font-display text-xl italic leading-snug text-foreground">
          {block.quote}
        </p>
      )}

      {block.paragraphs2?.map((p) => (
        <p
          key={p.slice(0, 24)}
          className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground"
        >
          {p}
        </p>
      ))}

      {block.items && (
        <ul className="mt-8 grid max-w-xl gap-y-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="border-b border-border pb-3 pr-4 text-sm font-light leading-snug tracking-wide"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 text-sm font-light text-muted-foreground">
        Investment — {block.investment}
      </p>

      {block.finenote && (
        <p className="mt-4 max-w-xl text-xs font-light italic leading-relaxed text-muted-foreground/80">
          {block.finenote}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {block.inquireType && (
          <Link
            to="/inquire"
            search={{ type: block.inquireType }}
            className="eyebrow border border-border px-5 py-3 text-oxblood transition-colors hover:bg-oxblood hover:text-primary-foreground"
          >
            {block.inquireLabel ?? "Inquire about this"}
          </Link>
        )}

        {block.externalLink && (
          <a
            href={block.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow border border-border px-5 py-3 text-oxblood transition-colors hover:bg-oxblood hover:text-primary-foreground"
          >
            {block.externalLinkLabel ?? "Learn more"}
          </a>
        )}
      </div>
    </div>
  );
}

function OfferingRow({ offering, index }: { offering: Offering; index: number }) {
  const imageFirst = index % 2 === 0;
  const hasImage = Boolean(offering.img);

  return (
    <div
      id={offering.slug}
      className="scroll-mt-28 border-t border-border py-14 first:pt-0 md:py-16"
    >
      {hasImage ? (
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className={imageFirst ? "md:order-1" : "md:order-2"}>
            <img
              src={offering.img}
              alt={offering.imgAlt}
              loading="lazy"
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className={`space-y-14 ${imageFirst ? "md:order-2" : "md:order-1"}`}>
            {offering.blocks.map((block) => (
              <BlockContent key={block.title} block={block} />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-14">
          {offering.blocks.map((block) => (
            <BlockContent key={block.title} block={block} />
          ))}
        </div>
      )}
    </div>
  );
}

function Services() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="Services"
        title="How to Work with Us"
        intro="From a single, complimentary hotel booking to a fully planned itinerary with concierge services — each one is designed around your preferences and how you want the trip to be experienced."
        introClassName="max-w-4xl"
      />

      <Section className="!pt-0">
        {offerings.map((offering, i) => (
          <OfferingRow key={offering.slug} offering={offering} index={i} />
        ))}
      </Section>

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
