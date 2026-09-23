import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — ARP Experiences" },
      {
        name: "description",
        content: "The terms that govern use of the ARP Experiences website and services.",
      },
    ],
  }),
  component: TermsConditions,
});

const sections = [
  {
    heading: "Agreement to Terms",
    body: [
      'These Terms & Conditions ("Terms") govern your use of arpexperiences.com (the "Site") and the travel advisory services offered by Amber Rose Powers, doing business as ARP Experiences ("ARP Experiences," "we," "us," or "our"), based in Franklin, Tennessee.',
      "By using this Site or submitting an inquiry, you agree to these Terms. If you do not agree, please do not use the Site or our services.",
    ],
  },
  {
    heading: "Our Services",
    body: [
      "ARP Experiences provides travel advisory services, including hotel bookings, itinerary planning, group bookings, cruise and flight arrangements, and a la carte travel services, as described on our Services page. ARP Experiences is an independent affiliate of Fora Travel, a Virtuoso company.",
      "We act as an intermediary connecting you with hotels, cruise lines, airlines, and other third-party travel suppliers. We do not own, operate, or control these third parties, and we are not responsible for their acts, omissions, or the quality of services they provide.",
    ],
  },
  {
    heading: "Planning & Fee Policy",
    body: [
      "Planning, research, curation, and service fees, where applicable, are due in full before work begins and are non-refundable, as described on our Services page.",
      "Flight ticketing fees are due at the time of ticketing and are non-refundable.",
      "Fees charged by ARP Experiences are separate from travel costs, bookings, and other third-party charges unless otherwise noted. Any deposits, payments, or charges required by hotels, cruise lines, airlines, or other suppliers are governed by that supplier's own terms and cancellation policies, not by ARP Experiences.",
    ],
  },
  {
    heading: "Travel Documentation",
    body: [
      "It is your responsibility to ensure you have valid passports, visas, and any other travel documentation required for your trip. For international travel, many countries require a passport to be valid for at least 6 months beyond your scheduled return date. ARP Experiences is not responsible for denied entry, travel delays, or other consequences resulting from inadequate travel documentation.",
    ],
  },
  {
    heading: "No Guarantee of Third-Party Services",
    body: [
      "While we work to secure the best available rates, availability, and benefits through our preferred partner relationships, we cannot guarantee specific room assignments, upgrades, amenities, or the availability of any third-party service. Benefits described as available through preferred partner programs are subject to that property's or supplier's own terms and availability at the time of your stay.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, ARP Experiences shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site or our services, including but not limited to travel delays, cancellations, injury, illness, loss of property, or acts of third-party suppliers.",
      "Your use of this Site and our services is at your own risk. Nothing in these Terms limits any liability that cannot be limited under applicable law.",
    ],
  },
  {
    heading: "Website Content & Intellectual Property",
    body: [
      "All content on this Site, including text, images, and design, is the property of ARP Experiences or its licensors and may not be reproduced, distributed, or used without prior written permission.",
    ],
  },
  {
    heading: "Communication",
    body: [
      "While planning your travel, we primarily communicate via email and scheduled phone calls to ensure important information isn't overlooked. We operate during standard business hours and ask that you honor them except in the case of an emergency. Before departure, we provide local contact information for prompt assistance after business hours for any in-travel emergencies.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Tennessee, without regard to its conflict of law principles.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. The date of the most recent update will be reflected at the top of this page. Continued use of the Site or our services after changes are posted constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about these Terms, please reach out to us at amber@arpexperiences.com.",
    ],
  },
];

function TermsConditions() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" intro="Last updated September 2026." />
      <Section className="!pt-0">
        <div className="mx-auto max-w-2xl space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl md:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
