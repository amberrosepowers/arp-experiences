import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/page-shell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ARP Experiences" },
      {
        name: "description",
        content: "How ARP Experiences collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    heading: "Who We Are",
    body: [
      'ARP Experiences ("ARP Experiences," "we," "us," or "our") is a travel and hospitality advisory business operated by Amber Rose Powers, based in Franklin, Tennessee. ARP Experiences is an independent affiliate of Fora Travel, a Virtuoso company.',
      'This Privacy Policy explains how we collect, use, store, and protect information when you visit arpexperiences.com (the "Site") or submit an inquiry through our forms.',
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "When you submit a Quick Inquiry or Detailed Trip Intake form, we collect the information you provide directly, which may include: your name, email address, phone number, destination, travel dates, number of travelers, the type of service you're interested in, and any additional details you share about your trip.",
      "If you complete the Detailed Trip Intake form, we may also collect: traveler names and birthdates as listed on passports, departure city, budget preferences, accommodation and room preferences, flight class and airline preferences, allergies, mobility needs, dietary or drink preferences, and any other information relevant to planning your travel.",
      "We do not knowingly collect payment card numbers, bank account details, or Social Security numbers through this Site.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to your inquiry, plan and coordinate your travel, communicate with hotels, cruise lines, and other travel partners on your behalf, and provide the services you've requested.",
      "We may also use your information to follow up about your inquiry and provide updates relevant to your trip. We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "How We Store and Share Information",
    body: [
      "Information submitted through our forms is stored in a secure database (Supabase) and, for the purpose of responding to your inquiry, is also sent to our email via a transactional email service (Resend).",
      "We share information with third parties only as necessary to arrange your travel — for example, with hotels, cruise lines, airlines, and other travel partners required to fulfill a booking or reservation on your behalf — or when required by law or to protect our legal rights. We do not share your information with third parties for their own marketing purposes.",
      "Our Site is hosted on Cloudflare's infrastructure, which may process standard technical information (such as IP address and browser type) as part of delivering the Site to you securely.",
    ],
  },
  {
    heading: "Cookies & Tracking",
    body: [
      "This Site does not use advertising cookies or third-party tracking pixels. Our hosting provider may retain standard server logs for security and performance purposes.",
    ],
  },
  {
    heading: "How We Protect Your Data",
    body: [
      "We use reasonable technical and organizational measures to protect the information you share with us from unauthorized access, alteration, or disclosure. That said, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We retain the information you submit for as long as reasonably necessary to respond to your inquiry, provide our services, and maintain records consistent with our business and legal obligations.",
    ],
  },
  {
    heading: "Your Rights & Choices",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us at hello@arpexperiences.com. We will respond to reasonable requests in a timely manner.",
      "Depending on where you live, you may have additional rights under applicable privacy laws, including the right to know what personal information we collect, the right to request deletion of that information, and the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our services are intended for adults planning travel, and this Site is not directed to children under 13. We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The date of the most recent update will be reflected at the top of this page.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, please reach out to us at hello@arpexperiences.com.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Last updated September 2026." />
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
