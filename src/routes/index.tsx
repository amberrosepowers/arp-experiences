import { createFileRoute, Link } from "@tanstack/react-router";

const heroPlaceholder = "/photos/hero-balzac-lobby.jpg";
const founderPortrait = "/photos/founder-amber.jpg";

const cardHotel = "/photos/offering-hotel-seafront-room.jpg";
const cardItinerary = "/photos/offering-flights-paris-dusk.jpg";
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
      {
        property: "og:image",
        content: "https://www.arpexperiences.com/photos/hero-balzac-lobby-wide.jpg",
      },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://www.arpexperiences.com/photos/hero-balzac-lobby-wide.jpg",
      },
    ],
  }),
  component: Home,
});

const testimonials = [
  {
    name: "Brandon S.",
    context: "Hotel Chelsea, New York",
    quote:
      "Amber took the time to recommend hotels based on exactly what we liked, and managed to get us an amazing rate along with a free suite upgrade, welcome gift, and other perks.",
  },
  {
    name: "Meghan K.",
    context: "Château Grattequina, France",
    quote:
      "Amber went above and beyond in helping us secure our reservations, especially with some international banking snafus — she was incredibly wonderful and we can't wait to book with her again.",
  },
  {
    name: "Gabriel H.",
    context: "Unico 20°N 87°W, Riviera Maya",
    quote:
      "Amber was incredibly helpful! She is knowledgeable about the resort and the area, and gave valuable information so the trip was tailor made. Having booked trips without help before, I'd most definitely contact her again.",
  },
  {
    name: "Hubert T.",
    context: "Mezzatorre Hotel & Thermal Spa, Italy",
    quote:
      "Amber Powers is the epitome of a perfect travel agent. Every detail was arranged to perfection, with each hotel greeting us with handwritten notes. Her regular check-ins ensured everything ran smoothly.",
  },
  {
    name: "Lindsey R.",
    context: "Lotte New York Palace",
    quote:
      "In Amber I trust! She told me she didn't think I'd love this hotel, but I was in a jam and on a budget — she got me upgraded and it was fantastic. I only want to travel with her as my guide from here on out.",
  },
  {
    name: "Paige P.",
    context: "Hotel Van Zandt, Austin",
    quote:
      "Amber is one of the best travel advisors I have ever worked with. Her recommendations are so thoughtful that even for places she's never been, you'd never know it. Highly recommend working with her.",
  },
  {
    name: "Ali B.",
    context: "The Manner, New York",
    quote:
      "Working with Amber makes everything easier! She makes sure I feel comfortable and taken care of, with great perks like room upgrades and F&B credits that help me get the most out of a hotel.",
  },
  {
    name: "Joel P.",
    context: "Surf & Sand Resort, Laguna Beach",
    quote:
      "Amber is a travel genius. She understands our needs and wants and is always on point with her suggestions. She goes above and beyond and has beautiful taste.",
  },
  {
    name: "Ashley G.",
    context: "Il Borro, Tuscany",
    quote:
      "Working with Amber was so easy! I told her what I was looking for and she found the most amazing places to stay. Could not be happier!",
  },
  {
    name: "Scott C.",
    context: "Amanera, Dominican Republic",
    quote:
      "Amber is a consummate professional — always knowledgeable about the resorts and great with communication and details.",
  },
  {
    name: "Patricia P.",
    context: "Southall Farm & Inn, Franklin",
    quote:
      "Amber is terrific and we enjoy working with her. She is very responsive, and we appreciate her customer service and attention to detail.",
  },
  {
    name: "Elizabeth J.",
    context: "Four Seasons Hotel at The Surf Club, Miami",
    quote:
      "Amber was so helpful! She got everything we needed booked, checked in regularly, and was absolutely a pleasure to work with. We will definitely use her again!",
  },
  {
    name: "Meagan R.",
    context: "COMO Parrot Cay, Turks and Caicos",
    quote:
      "Amber had great suggestions to accommodate our desired locations, priorities, and price range. She was informative and efficient, and made the process smooth and seamless.",
  },
];

const services = [
  {
    n: "01",
    label: "Hotel Only Booking",
    body: "Preferred partner perks and VIP treatment, booked through our direct hotel relationships — breakfast, upgrades, hotel credits, early check-in & late check-out, where available.",
    to: "hotel-only-bookings",
    img: cardHotel,
  },
  {
    n: "02",
    label: "Itinerary Planning",
    body: "From accommodations, transportation and tours to dining, spa, and concierge-level details — itineraries planned intentionally around how you want your travel experience to feel.",
    to: "essential-itinerary-planning",
    img: cardItinerary,
  },
  {
    n: "03",
    label: "Group Bookings",
    body: "From hotel sourcing to room blocks, rate negotiation, meeting spaces, and concessions — let us help guide your off-sites, weddings, retreats, corporate gatherings, and milestone celebrations.",
    to: "group-bookings-experiences",
    img: cardGroup,
  },
  {
    n: "04",
    label: "A La Carte Services",
    body: "Cruises, flights, villas, yacht charters, and private aviation — plus tickets to hard-to-get events — arranged individually or in addition to other planning services.",
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
        </div>
      </section>

      {/* Cream spacer */}
      <div className="h-10 md:h-16" />

      {/* Statement */}
      <section className="bg-walnut text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-16 text-center md:px-12 md:py-20">
          <h1 className="mx-auto max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            Where travel, hospitality, and experience design align.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed !text-primary-foreground/80 md:text-lg">
            ARP Experiences is a relationship-led travel and hospitality company creating
            exceptional travel and gathering experiences for discerning clients. We don't simply
            arrange travel. We create experiences around it.
          </p>
          <p className="mx-auto mt-10 max-w-4xl font-display text-2xl leading-tight md:text-4xl">
            Travel, thoughtfully experienced.
          </p>
          <Link to="/inquire" className="btn-arp-ghost mt-10">
            Inquire
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-12 md:pt-20 md:pb-32">
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
        <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-24 md:px-12 md:pb-16 md:pt-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <img
              src={founderPortrait}
              alt="Portrait of Amber Rose Powers, founder of ARP Experiences"
              loading="lazy"
              width={1440}
              height={1920}
              className="aspect-[4/5] w-full max-w-[300px] mx-auto object-cover object-[center_65%]"
            />
            <div>
              <p className="eyebrow">Our Founder</p>
              <h2 className="mt-6 text-4xl md:text-5xl">Amber Rose Powers</h2>
              <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground">
                Amber Rose Powers is a luxury travel and hospitality leader with over two decades of
                experience building the kinds of places and experiences people never forget. She is
                highly relationship-driven, with an instinct for what makes people feel genuinely
                cared for, connected, and at home.
              </p>
              <Link to="/about" className="eyebrow link-underline mt-10 inline-block">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 md:py-16">
        <div className="text-center">
          <p className="eyebrow">Client Stories</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-4xl md:text-5xl">
            Trusted by discerning travelers.
          </h2>
        </div>
        <div className="mt-16 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:-mx-12 md:px-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[300px] shrink-0 snap-start border border-border bg-secondary/40 p-8 md:w-[360px]"
            >
              <p className="font-display text-3xl text-brass">&ldquo;</p>
              <p className="-mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <p className="mt-6 text-sm text-foreground">{t.name}</p>
              <p className="mt-1 text-xs font-light text-muted-foreground/70">{t.context}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
