import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ARP Experiences" },
      {
        name: "description",
        content:
          "How working with ARP Experiences works — planning, access, groups, gatherings, and what to expect.",
      },
      { property: "og:title", content: "FAQ — ARP Experiences" },
      {
        property: "og:description",
        content: "Answers to common questions about working with ARP Experiences.",
      },
    ],
  }),
  component: Faq,
});

const faqs = [
  {
    q: "How do we begin?",
    a: "With a conversation. We start by understanding the person, the purpose, and the occasion before recommending a place or a property. From there, we shape the travel and the experiences around it.",
  },
  {
    q: "What kinds of travel do you plan?",
    a: "Private travel, multi-destination itineraries, honeymoons and milestone travel, family and multigenerational trips, group travel, retreats, destination weddings, and celebrations.",
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
    q: "How far in advance should we reach out?",
    a: "For private travel, three to six months is comfortable. For groups, weddings, and retreats, nine to twelve months allows for the strongest options. We are glad to work with shorter timelines when we can.",
  },
  {
    q: "How do you charge?",
    a: "Planning fees vary by the scope and complexity of the trip or gathering. We share fees clearly before any work begins.",
  },
];

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="How we work."
        intro="A few answers to the questions we're asked most often."
      />

      <Section className="!pt-0">
        <div className="max-w-3xl">
          {faqs.map((f) => (
            <div key={f.q} className="border-t border-border py-10">
              <h2 className="text-3xl leading-snug">{f.q}</h2>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </div>
          ))}
          <div className="border-t border-border pt-12">
            <Link to="/inquire" className="btn-arp">
              Ask us anything
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
