import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";
import founderStill from "@/assets/founder-still.jpg";
import destination from "@/assets/destination.jpg";

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
    ],
  }),
  component: About,
});

const expertise = [
  "Relationship Building",
  "Experience Design",
  "Partnership Development",
  "Brand Strategy",
  "Hospitality Management",
  "Travel & Destination Expertise",
  "VIP & High-Touch Service",
  "Group Travel & Gatherings",
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Where travel, hospitality, and experience design come together."
        intro="ARP Experiences is a relationship-led travel and hospitality company creating exceptional travel and gathering experiences for discerning clients."
      />

      <Section className="!pt-0">
        <div className="grid gap-14 md:grid-cols-2">
          <img
            src={founderStill}
            alt="Travel journals and a globe in warm window light"
            loading="lazy"
            width={1200}
            height={1504}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="space-y-6 text-base font-light leading-relaxed text-muted-foreground">
            <p className="font-display text-3xl leading-snug text-foreground">
              Amber Rose Powers — Founder
            </p>
            <p>
              Amber is a hospitality and travel professional with more than 25 years of experience
              across fashion, boutique hotels, experiential design, partnerships, relationship
              management, and travel.
            </p>
            <p>
              Her career began in fashion, with a degree in Apparel Design and experience spanning
              design, PR, sales, and brand relationships. She later moved into real estate
              development and boutique hospitality, helping launch Detroit Foundation Hotel before
              serving as its Director of Lifestyle, where she developed experiential programming,
              managed local and global VIP relationships, and worked alongside a Michelin-starred
              chef.
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

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="eyebrow">Mission</p>
              <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                To create exceptional travel and gathering experiences through deep relationships,
                genuine hospitality, and a discerning understanding of people and place.
              </p>
            </div>
            <div>
              <p className="eyebrow">Vision</p>
              <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                To build a trusted travel and hospitality company known for its relationships,
                expertise, taste, and ability to connect people with exceptional places.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <p className="eyebrow">Core expertise</p>
        <ul className="mt-10 grid gap-y-5 md:grid-cols-2">
          {expertise.map((item) => (
            <li key={item} className="border-b border-border pb-5 font-display text-2xl">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="!pt-0">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">The ARP difference</p>
            <h2 className="mt-6 text-4xl md:text-5xl">It begins with the person.</h2>
            <ul className="mt-8 space-y-3 text-base font-light text-muted-foreground">
              <li>Who are you traveling with?</li>
              <li>Why are you going?</li>
              <li>How do you want the experience to feel?</li>
              <li>What matters most?</li>
              <li>What will make it effortless?</li>
              <li>What will make it memorable?</li>
            </ul>
            <p className="mt-8 font-display text-2xl leading-snug">
              Exceptional travel isn't about having more choices. It's about knowing the right ones.
            </p>
            <Link to="/inquire" className="btn-arp mt-10">
              Inquire
            </Link>
          </div>
          <img
            src={destination}
            alt="Coastal town in golden late-afternoon light"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </Section>
    </>
  );
}
