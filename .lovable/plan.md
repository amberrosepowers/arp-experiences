# ARP Experiences content and inquiry expansion

## Homepage
- Restore “Travel, thoughtfully experienced.” to its original large display size and position it lower over the lounge image while preserving readability and mobile fit.
- Replace the introductory copy with the exact “About ARP Experiences” wording supplied.
- Keep the Brand Promise before the founder section and use the exact supplied promise.
- Update the Our Approach heading and all six principles with the supplied wording, preserving intentional paragraph flow without forcing awkward line breaks on smaller screens.

## Services
- Replace all existing service copy with the eight offerings in the exact order provided:
  1. Hotel Only Bookings
  2. Hotel Self-Booking Client Portal
  3. Essential Itinerary Planning
  4. Full Itinerary Planning with Concierge Services
  5. Group Bookings & Experiences
  6. Cruise Bookings
  7. Flight Services
  8. A La Carte Offerings
- Preserve all supplied investment amounts, guarantee notes, bullets, and emphasis while presenting the long content in an editorial, readable layout.
- Add “ARP Experiences Preferred Partners” with the supplied introduction and clearly labeled temporary logo spaces for future hotel and cruise partner artwork.
- Add “The ARP Experiences Process” with all seven supplied steps.
- Add the supplied Frequently Asked Questions as accessible expandable rows.
- Update Services page metadata to reflect the expanded offerings.

## Inquiry experience
- Add a clear two-option switch between “Quick Inquiry” and “Detailed Trip Intake.”
- Quick Inquiry will contain exactly: name, email, phone, destination, trip notes, and referral source.
- Detailed Trip Intake will include every supplied section and question: client details, trip details, planning-fee note, services, budgets, accommodation and room preferences, amenities, flights, trip preferences, health and dietary information, referral, and all three required fine-print acknowledgements.
- Use appropriate controls for each answer type, including multi-select checkboxes, yes/no choices, date fields, phone/email inputs, and large text areas.
- Keep both forms accessible, mobile-friendly, validated, and connected to the existing success/error flow.
- Add a Calendly consultation action after successful submission and in the inquiry sidebar. Link the project to the owner’s Calendly account and use its active consultation booking page.

## Submission storage
- Extend the existing inquiry record with a form-type field and a structured details field so both short and detailed submissions remain reviewable without creating dozens of fragile columns.
- Update server-side validation and submission mapping for both form modes.
- Preserve the existing protected storage model: public visitors submit through the server, while records are not publicly readable.
- Regenerate the database types after the schema update.

## Verification
- Check the homepage, Services, and Inquire pages at desktop and mobile sizes for wrapping, spacing, form switching, validation, and successful submission.
- Verify the Calendly action opens the correct booking experience.
- Confirm the preview builds cleanly and that a test inquiry is stored with the selected form type and complete answers.

## Technical details
- Main files: `src/routes/index.tsx`, `src/routes/services.tsx`, `src/routes/inquire.tsx`, and `src/lib/inquiries.functions.ts`.
- Reuse the existing design system, image set, tabs, checkbox/radio controls, and accordion components.
- Apply one database migration adding `form_type` and JSON details to `inquiries`; existing inquiry rows remain valid as Quick Inquiry records.
