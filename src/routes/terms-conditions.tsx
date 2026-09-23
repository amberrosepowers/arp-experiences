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
      'These Terms & Conditions ("Terms") govern your use of arpexperiences.com (the "Site") and the travel advisory services offered by Amber Rose Powers, doing business as ARP Experiences ("ARP Experiences," "we," "us," or "our"), an independent affiliate of Fora Travel, based in Franklin, Tennessee.',
      "By using this Site, submitting an inquiry, or engaging our services, you agree to these Terms on behalf of yourself and all members of your traveling party. If you do not agree, please do not use the Site or our services.",
    ],
  },
  {
    heading: "Our Services",
    body: [
      "ARP Experiences provides travel advisory services, including hotel bookings, itinerary planning, group bookings, cruise and flight arrangements, and a la carte travel services, as described on our Services page.",
    ],
  },
  {
    heading: "Our Role as Your Agent",
    body: [
      'ARP Experiences acts as a sales agent for the airlines, hotels, cruise lines, tour operators, and other service providers ("Suppliers") named in your itinerary or confirmation. We are not responsible for the acts or omissions of any Supplier, or a Supplier\'s failure to adhere to its own schedules, provide services or refunds, or honor future travel credits.',
      "Your travel plans may be interrupted or canceled by a Supplier, a government entity, or another third party outside our control. A Supplier's own cancellation, rebooking, and refund policies — subject to applicable law — govern your rights and remedies, including any right to a refund. We work only with Suppliers we believe to be financially sound and reliable, but we have no special knowledge of a Supplier's financial condition and no liability for recommending a future travel credit in lieu of a refund.",
    ],
  },
  {
    heading: "Please Review Your Travel Documents",
    body: [
      "Please review your itinerary and other travel documents as soon as you receive them, and let us know promptly of any issues. The names on your documents must match your government-issued ID exactly — please call us with any questions.",
    ],
  },
  {
    heading: "Passports, Visas & Entry Requirements",
    body: [
      "You are responsible for checking and verifying all passport, visa, vaccination, and other entry requirements for your destination and any connecting points, along with all conditions regarding health, safety, security, and civil stability at those destinations. Many countries require your passport to be valid for six months or more beyond your date of entry, and some countries will not admit persons with certain criminal convictions or minors traveling without both parents' consent.",
      "If you are a non-U.S. citizen, different immigration requirements will apply, and you are responsible for contacting the relevant consulate. Without proper identification and any necessary visas, you will not be permitted to depart. We're glad to assist with questions about passports or visas — please reach out.",
    ],
  },
  {
    heading: "Risks of Travel",
    body: [
      "We assume no responsibility and shall not be liable for the acts or omissions of any party outside our control, or for acts of God, unsafe conditions, terrorism, health hazards including pandemics, illness, weather, or the suitability of any portion of a trip for a traveler with a disability. We have no special knowledge of dangers at any destination.",
      "For destination-specific guidance, we recommend the U.S. State Department's travel site (travel.state.gov) and the CDC's travel health site (cdc.gov/travel). It is ultimately your responsibility to understand and comply with all requirements and restrictions for your trip, which may include health affidavits, health or temperature screenings, travel authorizations, and in-country requirements such as quarantine. Failure to meet these requirements may result in fines, quarantine, or deportation at your own expense.",
    ],
  },
  {
    heading: "Travel Insurance",
    body: [
      "ARP Experiences strongly recommends travel insurance for every trip. If you purchase a policy, its terms determine whether and to what extent coverage applies — including for pandemics, pre-existing conditions, and other exclusions — so please consult your insurance carrier directly with questions. Nothing said by ARP Experiences constitutes a binding assurance about any insurance policy, and supplier-provided insurance or waivers may not include insolvency coverage.",
      "You agree to hold ARP Experiences harmless for your decision not to purchase travel insurance, and for any denial of a claim by your travel insurer.",
    ],
  },
  {
    heading: "Check-In & Flight Times",
    body: [
      "We recommend arriving at least 1 to 1.5 hours before domestic flights and 2 to 3 hours before international flights, allowing extra time given current security measures. Failure to arrive within your airline's specified check-in window could result in denied boarding.",
      "Flight changes, delays, and cancellations should be tracked directly through your airline's app or with the airline — a paper itinerary cannot reflect real-time changes. Times, flights, and fares are based on current tariffs and are subject to change without notice.",
    ],
  },
  {
    heading: "Planning & Fee Policy",
    body: [
      "Planning, research, curation, and service fees, where applicable, are due in full before work begins and are non-refundable, as described on our Services page.",
      "Flight ticketing fees are due at the time of ticketing and are non-refundable.",
      "Fees charged by ARP Experiences are separate from travel costs, bookings, and other third-party charges unless otherwise noted.",
    ],
  },
  {
    heading: "Cancellations, Changes & Refunds",
    body: [
      "ARP Experiences reserves the right to charge processing fees in the event of a full trip cancellation. Flight changes or cancellations must be made prior to the originally scheduled departure — no value remains after departure. If you're holding a guaranteed hotel or car reservation you wish to cancel or change, you must contact us directly and adhere to the cancellation policy provided at the time of booking, as policies vary by property and supplier.",
      "We are not responsible for any loss you incur from a failure to travel or a failure to follow a Supplier's change or cancellation policies. If you reschedule your trip, you will not incur any additional ARP Experiences processing fees.",
    ],
  },
  {
    heading: "Rates, Billing & Trip Costs",
    body: [
      "Hotel and other rates cannot be guaranteed until a deposit is paid and confirmed per that property's or Supplier's own policy. ARP Experiences is not responsible for a Supplier's own errors — including an incorrect number of nights, meal plans, taxes, exchange rates, or fees — and does not assume liability for client costs. It is your responsibility to review all costs at the time of booking.",
      "If you request a service by text, email, phone, or in person, you assume responsibility for the costs associated with that service, including fees for last-minute changes, deviations, cancellations, and after-hours support.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, ARP Experiences shall not be liable for any indirect, incidental, or consequential damages arising from your use of this Site or our services, including travel delays, cancellations, injury, illness, loss of property, or the acts of any Supplier.",
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
      "If you have questions about these Terms, please reach out to us at hello@arpexperiences.com.",
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
