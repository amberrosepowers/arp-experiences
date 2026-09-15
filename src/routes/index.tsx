import { createFileRoute, Link } from "@tanstack/react-router";
import founderAsset from "@/assets/founder-portrait.jpg.asset.json";

const heroPlaceholder = "/photos/hero-balzac-lobby.jpg";
const founderPortrait = founderAsset.url;

const cardHotel = "/photos/offering-hotel-seafront-room.jpg";
const cardItinerary = "/photos/offering-itinerary-colonnade.jpg";
const cardGroup = "/photos/service-gatherings-dining.jpg";
const cardALaCarte = "/photos/service-travel-malta.jpg";

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

const services = [
  {
    n: "01",
    label: "Hotel Only Booking",
    body: "Preferred rates and VIP perks, with a personal relationship connected to the property. Complimentary.",
    to: "hotel-only-bookings",
    img: cardHotel,
  },
  {
    n: "02",
    label: "Itinerary Planning",
    body: "From the essentials to full concierge service, planned around how you want the trip to feel.",
    to: "essential-itinerary-planning",
    img: cardItinerary,
  },
  {
    n: "03",
    label: "Group Bookings",
    body: "Room blocks, rate negotiation, and logistics for weddings, retreats, and corporate gatherings.",
    to: "group-bookings-experiences",
    img: cardGroup,
  },
  {
    n: "04",
    label: "A La Carte",
    body: "Cruises, flights, villas, yachts, and concierge services — arranged whenever you need them.",
    to: "cruise-bookings",
    img: cardALaCarte,
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
            alt="Wood-paneled hotel lobby with black-and-white checkerboard marble floor"
            width={1440}
            height={1920}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-walnut/45" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center md:px-12">
            <h1 className="fade-up font-display text-3xl leading-[1.3] text-white md:text-5xl">
              <span className="block">Where you go matters.</span>
              <span className="block">How you experience it matters more.</span>
              <span className="block">Travel, thoughtfully experienced.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-14 md:px-12 md:pb-20 md:pt-16">
        <p className="mx-auto max-w-2xl text-center text-lg font-light leading-relaxed text-muted-foreground">
          ARP Experiences is a relationship-led travel and hospitality company creating exceptional
          travel and gathering experiences for discerning clients. We don't simply arrange travel.
          We create experiences around it.
        </p>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {services.map((s) => (
            <Link key={s.label} to="/services" hash={s.to} className="group block">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  width={900}
                  height={1125}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-6 font-display text-2xl text-brass">{s.n}</p>
              <h3 className="link-underline mt-2 inline-block text-2xl">{s.label}</h3>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/services" className="eyebrow link-underline">
            All services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-walnut text-primary-foreground">
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

      {/* Founder */}
      <section className="bg-secondary/70">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <img
              src={founderPortrait}
              alt="Portrait of Amber Rose Powers, founder of ARP Experiences"
              loading="lazy"
              width={1440}
              height={1920}
              className="aspect-[4/5] w-full max-w-[300px] mx-auto object-cover"
            />
            <div>
              <p className="eyebrow">The founder</p>
              <h2 className="mt-6 text-4xl md:text-5xl">Amber Rose Powers</h2>
              <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground">
                Amber is a hospitality and travel professional with more than two decades of
                experience across fashion, boutique hotels, experiential design, partnerships,
                relationship management, and travel. She is highly relationship-driven and is
                passionate about guiding her clients to beautiful destinations, paired with
                incredible experiences.
              </p>
              <Link to="/about" className="eyebrow link-underline mt-10 inline-block">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
