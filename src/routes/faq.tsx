import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ARP Experiences" },
      {
        name: "description",
        content: "Frequently asked questions about working with ARP Experiences.",
      },
      { property: "og:title", content: "FAQ — ARP Experiences" },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "Why are hotel & cruise bookings complimentary?",
    a: "Hotels, cruise lines, and other preferred hospitality partners compensate us when we arrange eligible bookings through our professional relationships. This allows us to provide the booking service at no additional cost to you while still offering personal planning, property or cruise line communication, and ongoing support.",
  },
  {
    q: "Why do you charge a planning fee for itinerary planning?",
    a: "This work involves considerably more than making reservations. The planning fee covers the time, research, expertise, creative direction, supplier communication, itinerary development, revisions, coordination, and ongoing support required to design a trip around you. It also allows us to remain focused on your experience rather than relying only on supplier commissions. Once the planning fee is settled, we can thoughtfully research and select the right options, even when a particular recommendation does not generate commission. The fee is based on the scope and complexity of your trip and is discussed before work begins.",
  },
  {
    q: "I already booked my hotel directly. Can we still work together?",
    a: "Potentially. If your reservation is eligible, we may be able to add ARP Experiences to the booking and provide support before and during your stay. Preferred partner benefits generally need to be arranged before arrival, so the sooner you reach out, the more we may be able to do.",
  },
  {
    q: "Can I earn hotel loyalty points or cruise loyalty benefits when booking through you?",
    a: "Yes. Loyalty program eligibility depends on the hotel brand, property, cruise line, rate, booking method, and program terms. We're happy to add your membership details and confirm what applies to your reservation.",
  },
  {
    q: "If I already have a credit card that offers travel benefits, is it the same thing?",
    a: "No. Credit card benefits are tied to the card and its third-party booking channel. Our preferred partner benefits come through our direct relationships with hotels, villas, cruise lines, and hospitality partners. We also communicate with the property or cruise line about your preferences, arrival, and stay. ARP Experiences is your direct line of communication to your trip.",
  },
  {
    q: "Can I use credit card points toward a hotel, villa, or cruise booking?",
    a: "No. We are not able to utilize your points when booking directly with our preferred partners.",
  },
  {
    q: "Can I work with ARP Experiences for a short weekend away?",
    a: "Absolutely. We work with travelers planning everything from a single hotel stay to a longer, more layered trip. For itinerary planning, the scope and planning fee will depend on the destination, length, complexity, and level of support required.",
  },
  {
    q: "Do you work with Airbnb or VRBO?",
    a: "No. We generally focus on hotels, villas, private residences, resorts, cruise lines, and other hospitality partners with whom we can provide a high level of service and support. We do have access to book apartments and homes in select locations through our preferred partners, so please inquire if interested.",
  },
];

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="A few things clients often ask before their first conversation with us."
      />

      <Section className="!pt-0">
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border py-2">
                <AccordionTrigger className="font-display text-xl font-normal normal-case tracking-normal hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="text-center">
          <p className="font-display text-2xl">Still have a question?</p>
          <Link to="/inquire" className="btn-arp mt-8">
            Begin an inquiry
          </Link>
        </div>
      </Section>
    </>
  );
}
