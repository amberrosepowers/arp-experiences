import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { PageHeader, Section } from "@/components/page-shell";
import { Checkbox } from "@/components/ui/checkbox";
import { submitInquiry } from "@/lib/inquiries.functions";

export const Route = createFileRoute("/inquire")({
  head: () => ({
    meta: [
      { title: "Inquiry — ARP Experiences" },
      {
        name: "description",
        content:
          "Begin an inquiry with ARP Experiences. Send a quick note, or complete the detailed trip intake.",
      },
      { property: "og:title", content: "Inquiry — ARP Experiences" },
      {
        property: "og:description",
        content: "Tell us about the person, the purpose, and the occasion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inquire,
});

const fieldClass =
  "mt-3 w-full border-b border-border bg-transparent pb-3 text-base font-light outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-oxblood";

const labelClass = "eyebrow block";

const timing = [
  {
    q: "How far in advance should we reach out?",
    a: "For private travel, three to six months is comfortable. For groups, weddings, and retreats, nine to twelve months allows for the strongest options — though we are glad to work with shorter timelines when we can.",
  },
  {
    q: "What kinds of travel do you plan?",
    a: "Private travel, multi-destination itineraries, honeymoons and milestone travel, family and multigenerational trips, group travel, retreats, destination weddings, and celebrations.",
  },
];

const process = [
  {
    n: "01",
    title: "Inquire",
    body: "Complete our inquiry form and schedule your complimentary consultation — by phone or video, whichever feels most natural.",
  },
  {
    n: "02",
    title: "Connect",
    body: "We'll get to know each other, talk through your vision, and determine how ARP Experiences can best support your trip.",
  },
  {
    n: "03",
    title: "Formalize",
    body: "Hotel, villa, and cruise bookings are complimentary. For research, a $150 credit card guarantee applies, charged only if you choose not to book through ARP Experiences. For itinerary and group planning, a contract is signed and the planning fee is settled before work begins.",
  },
  {
    n: "04",
    title: "Propose",
    body: "Hotel, villa, and cruise recommendations are typically delivered within a week or less. Custom itinerary and group proposals are typically delivered within two weeks, depending on complexity.",
  },
  {
    n: "05",
    title: "Refine & Confirm",
    body: "We'll walk through the details together, refine as needed, and bring everything into place.",
  },
  {
    n: "06",
    title: "Arrive with Everything in Place",
    body: "Prior to departure, you'll receive your digital itinerary with confirmations, essential documents, and everything you need for what's ahead.",
  },
  {
    n: "07",
    title: "Return & Debrief",
    body: "After you return, we'll reach out to hear how it went. Your feedback becomes part of the relationship, helping every trip that follows feel more personal than the last.",
  },
];

const accommodationTypes = [
  "Luxury & exclusive",
  "Boutique & charming",
  "Centrally located & functional",
  "Large resort",
  "Villa",
  "Other",
];

const roomTypes = [
  "1 bed (Queen or King)",
  "2 beds (Double or Queen)",
  "Suite",
  "Adjoining Rooms",
  "Other",
];

const flightClasses = ["Premium Economy", "Business Class", "First Class", "No flights needed"];

function CheckboxRow({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2 text-sm font-light">
          <Checkbox name={name} value={opt} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function Inquire() {
  const send = useServerFn(submitInquiry);
  const [mode, setMode] = useState<"quick" | "detailed">("quick");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmitQuick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          experience_type: String(data.get("type") ?? ""),
          dates: String(data.get("dates") ?? ""),
          destination: String(data.get("destination") ?? ""),
          travelers: String(data.get("travelers") ?? ""),
          details: String(data.get("details") ?? ""),
          referral_source: String(data.get("referral") ?? ""),
          form_type: "quick",
          intake_details: {},
        },
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or email hello@arpexperiences.com.",
      );
    }
  }

  async function onSubmitDetailed(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    const getAll = (name: string) => data.getAll(name).map(String);
    const get = (name: string) => String(data.get(name) ?? "");

    const firstName = get("firstName");
    const lastName = get("lastName");

    const intake_details = {
      address: get("address"),
      travelDatesFlexible: get("datesFlexible"),
      departureCity: get("departureCity"),
      celebration: get("celebration"),
      travelerNames: get("travelerNames"),
      servicesWanted: get("servicesWanted"),
      nightlyBudget: get("nightlyBudget"),
      totalBudget: get("totalBudget"),
      accommodationType: getAll("accommodationType"),
      roomType: getAll("roomType"),
      amenities: get("amenities"),
      flightClasses: getAll("flightClasses"),
      preferredAirline: get("preferredAirline"),
      smallPlaneOk: get("smallPlaneOk"),
      bestExperience: get("bestExperience"),
      personalStyle: get("personalStyle"),
      allergies: get("allergies"),
      mobility: get("mobility"),
      drinkPreferences: get("drinkPreferences"),
      agreedPlanningFees: data.get("agreeFees") === "on",
      agreedPackagedPricing: data.get("agreePricing") === "on",
      agreedCommunication: data.get("agreeComm") === "on",
    };

    setStatus("sending");
    try {
      await send({
        data: {
          name: `${firstName} ${lastName}`.trim(),
          email: get("email"),
          phone: get("phone"),
          experience_type: get("servicesWanted"),
          dates: get("dates"),
          destination: get("destination"),
          travelers: get("travelerNames"),
          details: get("bestExperience"),
          referral_source: get("referral"),
          form_type: "detailed",
          intake_details,
        },
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or email hello@arpexperiences.com.",
      );
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Inquiry"
        title="Let's start planning."
        intro="Send a quick note to start the conversation, or complete the detailed trip intake if you're ready to share the full picture. Either way, we'll follow up to schedule your complimentary consultation."
      />

      <Section className="!pt-0">
        <div className="mb-14 inline-flex border border-walnut">
          <button
            type="button"
            onClick={() => setMode("quick")}
            className={`eyebrow px-6 py-3 transition-colors ${
              mode === "quick" ? "bg-walnut text-parchment" : "text-walnut"
            }`}
          >
            Quick Inquiry
          </button>
          <button
            type="button"
            onClick={() => setMode("detailed")}
            className={`eyebrow px-6 py-3 transition-colors ${
              mode === "detailed" ? "bg-walnut text-parchment" : "text-walnut"
            }`}
          >
            Detailed Trip Intake
          </button>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl">
            {mode === "quick" ? (
              <form onSubmit={onSubmitQuick} className="space-y-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className={fieldClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" name="phone" maxLength={50} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="type">
                      Type of experience
                    </label>
                    <select id="type" name="type" className={fieldClass}>
                      <option>Hotel Only Booking</option>
                      <option>Essential Itinerary Planning</option>
                      <option>Full Itinerary Planning with Concierge</option>
                      <option>Group Booking</option>
                      <option>Cruise</option>
                      <option>A La Carte Bookings & Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="destination">
                      Destination
                    </label>
                    <input
                      id="destination"
                      name="destination"
                      maxLength={200}
                      className={fieldClass}
                      placeholder="Or open to ideas"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="dates">
                      Dates or timing
                    </label>
                    <input
                      id="dates"
                      name="dates"
                      maxLength={200}
                      className={fieldClass}
                      placeholder="Approximate"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="travelers">
                    Number of travelers
                  </label>
                  <input
                    id="travelers"
                    name="travelers"
                    maxLength={50}
                    className={fieldClass}
                    placeholder="e.g. 2"
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="details">
                    Tell us about the trip you have in mind
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    maxLength={2000}
                    className={fieldClass}
                    placeholder="The purpose, the people, and how you'd like it to feel."
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="referral">
                    Who can we thank for referring you?
                  </label>
                  <input id="referral" name="referral" maxLength={200} className={fieldClass} />
                </div>

                <button type="submit" className="btn-arp" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                </button>

                {status === "sent" && (
                  <p aria-live="polite" className="text-sm font-light text-muted-foreground">
                    Thank you — your inquiry has been received. We'll follow up personally.
                  </p>
                )}
                {status === "error" && (
                  <p aria-live="polite" className="text-sm font-light text-oxblood">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <form onSubmit={onSubmitDetailed} className="space-y-14">
                <div className="space-y-8">
                  <p className="font-display text-2xl text-oxblood">Client Intake</p>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="firstName">
                        First Name
                      </label>
                      <input id="firstName" name="firstName" required className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="lastName">
                        Last Name
                      </label>
                      <input id="lastName" name="lastName" required className={fieldClass} />
                    </div>
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="d-email">
                        Email
                      </label>
                      <input
                        id="d-email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="d-phone">
                        Phone Number
                      </label>
                      <input id="d-phone" name="phone" className={fieldClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="address">
                      Address
                    </label>
                    <input id="address" name="address" className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="font-display text-2xl text-oxblood">Trip Details</p>
                  <div>
                    <label className={labelClass} htmlFor="d-destination">
                      Where would you like to go?
                    </label>
                    <input id="d-destination" name="destination" className={fieldClass} />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="d-dates">
                        What are your travel dates?
                      </label>
                      <input id="d-dates" name="dates" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="datesFlexible">
                        Are your travel dates flexible?
                      </label>
                      <input id="datesFlexible" name="datesFlexible" className={fieldClass} />
                    </div>
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="departureCity">
                        What is your departure city?
                      </label>
                      <input id="departureCity" name="departureCity" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="celebration">
                        Celebrating anything special?
                      </label>
                      <input id="celebration" name="celebration" className={fieldClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="travelerNames">
                      Who will be traveling with you? Please list all full legal names (including
                      yourself) and birthdates, as listed on passport.
                    </label>
                    <textarea
                      id="travelerNames"
                      name="travelerNames"
                      rows={3}
                      required
                      className={fieldClass}
                    />
                  </div>

                  <p className="border-l-2 border-oxblood/60 bg-secondary/60 p-5 text-xs font-light italic leading-relaxed text-muted-foreground">
                    Note on Planning Fees: Hotel-only bookings are complimentary, and I will add my
                    preferred partner perks &amp; VIP you at no additional cost. If you are looking
                    for help with accommodations, transfers, activities and tours, my planning fees
                    start at $525 per week of travel. For full itinerary planning including
                    concierge services (dinner recommendations &amp; reservations, spa appointments,
                    golf tee times, etc.), my planning fees start at $1,050 per week of travel.
                  </p>

                  <div>
                    <label className={labelClass} htmlFor="servicesWanted">
                      What travel services are you looking for?
                    </label>
                    <textarea
                      id="servicesWanted"
                      name="servicesWanted"
                      rows={2}
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="nightlyBudget">
                        Nightly budget for hotel-only bookings
                      </label>
                      <input id="nightlyBudget" name="nightlyBudget" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="totalBudget">
                        Total trip budget (not including airfare)
                      </label>
                      <input id="totalBudget" name="totalBudget" className={fieldClass} />
                    </div>
                  </div>

                  <div>
                    <p className={labelClass}>What best describes your desired accommodations?</p>
                    <CheckboxRow name="accommodationType" options={accommodationTypes} />
                  </div>

                  <div>
                    <p className={labelClass}>What kind of room would you like?</p>
                    <CheckboxRow name="roomType" options={roomTypes} />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="amenities">
                      What are your amenity "must haves"? (pool, on-site restaurant, bar, spa, gym,
                      wellness facilities, etc.)
                    </label>
                    <textarea id="amenities" name="amenities" rows={2} className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="font-display text-2xl text-oxblood">
                    Flight &amp; Airline Preferences
                  </p>
                  <div>
                    <p className={labelClass}>
                      Do you need flights? (Premium economy, business, and first class only — $50
                      ticketing fee per passenger)
                    </p>
                    <CheckboxRow name="flightClasses" options={flightClasses} />
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="preferredAirline">
                        Preferred airline (or airlines)
                      </label>
                      <input id="preferredAirline" name="preferredAirline" className={fieldClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="smallPlaneOk">
                        Will you fly in a helicopter or smaller plane?
                      </label>
                      <input id="smallPlaneOk" name="smallPlaneOk" className={fieldClass} />
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="font-display text-2xl text-oxblood">Trip Preferences</p>
                  <div>
                    <label className={labelClass} htmlFor="bestExperience">
                      What would make this trip the best experience for you?
                    </label>
                    <textarea
                      id="bestExperience"
                      name="bestExperience"
                      rows={3}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="personalStyle">
                      Help me understand your personal style. What are some of your favorite hotels
                      or experiences?
                    </label>
                    <textarea
                      id="personalStyle"
                      name="personalStyle"
                      rows={3}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="font-display text-2xl text-oxblood">
                    Health &amp; Dietary Information
                  </p>
                  <div>
                    <label className={labelClass} htmlFor="allergies">
                      Do you or any travelers have allergies that I should be aware of?
                    </label>
                    <textarea id="allergies" name="allergies" rows={2} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="mobility">
                      Does anyone in the group have any mobility issues?
                    </label>
                    <textarea id="mobility" name="mobility" rows={2} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="drinkPreferences">
                      What are your drink preferences? (coffee, tea, still or sparkling water, wine,
                      specialty cocktails, etc.)
                    </label>
                    <textarea
                      id="drinkPreferences"
                      name="drinkPreferences"
                      rows={2}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="d-referral">
                    Who can I thank for referring you to us?
                  </label>
                  <input id="d-referral" name="referral" className={fieldClass} />
                </div>

                <div className="space-y-6 border-t border-border pt-10">
                  <p className="font-display text-2xl text-oxblood">Let's Review the Fine Print</p>

                  <label className="flex items-start gap-3 text-xs font-light leading-relaxed text-muted-foreground">
                    <Checkbox name="agreeFees" required className="mt-0.5" />
                    <span>
                      Please be aware that there may be a planning fee associated with the creation
                      of your customized itinerary. During our complimentary intake call, we'll
                      discuss your travel details &amp; goals before providing you with a detailed
                      understanding of any associated fees based upon the unique aspects and
                      complexities of your trip request.{" "}
                      <strong className="text-foreground">Yes, I understand and agree.</strong>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-xs font-light leading-relaxed text-muted-foreground">
                    <Checkbox name="agreePricing" required className="mt-0.5" />
                    <span>
                      Some of our proposals come from suppliers who provide bundled rates without
                      breaking down individual components. This protects our valued partners who may
                      have confidential, contracted rates from local vendors, and creates a
                      seamless, holistic approach to your travel plans.{" "}
                      <strong className="text-foreground">
                        I understand my proposal will come as one packaged rate and itemized pricing
                        will not be available.
                      </strong>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-xs font-light leading-relaxed text-muted-foreground">
                    <Checkbox name="agreeComm" required className="mt-0.5" />
                    <span>
                      While planning your trip, we will primarily be in contact via email or
                      scheduled phone calls, to ensure no important information is overlooked — we
                      strongly discourage questions via text message. Before your departure, we'll
                      provide the best local contact information for prompt assistance after
                      business hours; unscheduled calls and texts remain available for any in-travel
                      emergencies.{" "}
                      <strong className="text-foreground">Yes, I understand and agree.</strong>
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn-arp" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Submit Trip Intake"}
                </button>

                {status === "sent" && (
                  <p aria-live="polite" className="text-sm font-light text-muted-foreground">
                    Thank you — we've received your trip intake and will follow up personally.
                  </p>
                )}
                {status === "error" && (
                  <p aria-live="polite" className="text-sm font-light text-oxblood">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <p className="eyebrow">Direct</p>
              <a
                href="mailto:hello@arpexperiences.com"
                className="link-underline mt-4 inline-block font-display text-2xl"
              >
                hello@arpexperiences.com
              </a>
            </div>
            <div className="rule-thin" />
            <div>
              <p className="eyebrow">What happens next</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                We review your inquiry, then schedule a conversation about the person, the purpose,
                and the place. See the full process below.
              </p>
            </div>
            <div className="rule-thin" />
            <div className="space-y-8">
              {timing.map((t) => (
                <div key={t.q}>
                  <p className="font-display text-xl leading-snug">{t.q}</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {t.a}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="border-t border-border pt-16">
          <div className="max-w-2xl">
            <p className="eyebrow">The ARP Process</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              From first hello to a trip well-remembered.
            </h2>
          </div>
          <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {process.map((p) => (
              <div key={p.title} className="flex gap-6 border-t border-border pt-6">
                <p className="font-display text-2xl text-brass">{p.n}</p>
                <div>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
