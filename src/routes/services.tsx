import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";

const destination = "/photos/service-travel-malta.jpg";
const gathering = "/photos/service-gatherings-dining.jpg";
const lobby = "/photos/service-concierge-balcony.jpg";

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
        content: "Nine ways ARP Experiences can take care of your trip.",
      },
    ],
  }),
  component: Services,
});

type Offering = {
  title: string;
  slug: string;
  lede: string;
  paragraphs?: string[];
  quote?: string;
  paragraphs2?: string[];
  items?: string[];
  investment: string;
  finenote?: string;
};

const offerings: Offering[] = [
  {
    title: "Hotel Only Bookings",
    slug: "hotel-only-bookings",
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
  {
    title: "Hotel Self-Booking Client Portal",
    slug: "hotel-self-booking-portal",
    lede: "For the traveler who already knows where they want to stay, or prefers to research independently.",
    paragraphs: [
      "Our client booking portal gives you access to select preferred partner rates while allowing you to browse and book on your own time. Once reserved, your stay is still personally serviced by ARP Experiences — we'll connect with the property ahead of your arrival, arrange your preferred partner amenities, note your preferences, advocate for upgrades, and make sure your reservation receives the attention it deserves.",
    ],
    quote: "The ease of booking yourself. The relationships behind the reservation.",
    paragraphs2: [
      "Portal access is reserved for registered ARP Experiences clients — reach out through our inquiry page to be welcomed in. Not every hotel partner is available in the portal just yet; if you don't see the hotel you're looking for, simply reach out and we'll arrange it directly, with applicable preferred partner benefits applied.",
    ],
    investment: "Complimentary",
  },
  {
    title: "Essential Itinerary Planning",
    slug: "essential-itinerary-planning",
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
  {
    title: "Full Itinerary Planning with Concierge Services",
    slug: "full-itinerary-planning",
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
  {
    title: "Group Bookings & Experiences",
    slug: "group-bookings-experiences",
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
  {
    title: "Cruise Bookings",
    slug: "cruise-bookings",
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
    slug: "flight-services",
    lede: "From premium economy through first class, arranged and managed alongside the rest of your itinerary.",
    paragraphs: [
      "We keep every moving piece connected — and when plans change, we're there. Our 24/7 support means you have someone to turn to when a flight is delayed, a connection shifts, or the unexpected happens mid-trip. No waiting in an airport queue. No navigating another time zone alone. Just someone who already knows where you're going — and what comes next.",
    ],
    investment: "$50 ticketing fee per passenger",
  },
  {
    title: "A La Carte Offerings",
    slug: "a-la-carte-offerings",
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
];

function OfferingRow({ offering, index }: { offering: Offering; index: number }) {
  return (
    <div
      id={offering.slug}
      className="scroll-mt-28 border-t border-border py-14 first:pt-0 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[100px_1fr]">
        <p className="font-display text-2xl text-brass md:text-3xl">{`0${index + 1}`}</p>
        <div>
          <h2 className="text-3xl md:text-4xl">{offering.title}</h2>
          <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
            {offering.lede}
          </p>

          {offering.paragraphs?.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}

          {offering.quote && (
            <p className="mt-6 max-w-xl font-display text-xl italic leading-snug text-foreground">
              {offering.quote}
            </p>
          )}

          {offering.paragraphs2?.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground"
            >
              {p}
            </p>
          ))}

          {offering.items && (
            <ul className="mt-8 grid max-w-3xl gap-y-3 sm:grid-cols-2">
              {offering.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-3 pr-4 text-sm font-light leading-snug tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="eyebrow border border-border px-5 py-3 text-oxblood">
              Investment — {offering.investment}
            </span>
          </div>

          {offering.finenote && (
            <p className="mt-4 max-w-2xl text-xs font-light italic leading-relaxed text-muted-foreground/80">
              {offering.finenote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="Services"
        title={
          <>
            <span className="block">Nine ways we can</span>
            <span className="block">take care of a trip.</span>
          </>
        }
        intro="From a single, complimentary hotel booking to a fully planned journey with concierge services — each one designed around your preferences and how you want the trip to feel."
      />

      <div className="grid grid-cols-3 gap-1 px-1">
        <img
          src={destination}
          alt="Travel"
          loading="lazy"
          width={720}
          height={900}
          className="aspect-[4/5] w-full object-cover"
        />
        <img
          src={gathering}
          alt="Gatherings"
          loading="lazy"
          width={720}
          height={900}
          className="aspect-[4/5] w-full object-cover"
        />
        <img
          src={lobby}
          alt="Concierge"
          loading="lazy"
          width={720}
          height={900}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <Section>
        {offerings.map((offering, i) => (
          <OfferingRow key={offering.title} offering={offering} index={i} />
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
