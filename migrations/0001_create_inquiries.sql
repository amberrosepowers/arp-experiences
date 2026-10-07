-- Inquiries from the Quick Inquiry and Detailed Trip Intake forms on /inquire.
-- Booleans are stored as 0/1. Multi-select answers are comma-separated text.
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  form_type TEXT NOT NULL DEFAULT 'quick' CHECK (form_type IN ('quick', 'detailed')),

  -- Shared by both forms
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  experience_type TEXT,
  dates TEXT,
  destination TEXT,
  travelers TEXT,
  details TEXT,
  referral_source TEXT,

  -- Detailed Trip Intake
  address TEXT,
  travel_dates_flexible TEXT,
  departure_city TEXT,
  celebration TEXT,
  traveler_names TEXT,
  services_wanted TEXT,
  nightly_budget TEXT,
  total_budget TEXT,
  accommodation_type TEXT,
  room_type TEXT,
  amenities TEXT,
  flight_classes TEXT,
  preferred_airline TEXT,
  small_plane_ok TEXT,
  best_experience TEXT,
  personal_style TEXT,
  allergies TEXT,
  mobility TEXT,
  drink_preferences TEXT,

  -- Fine print and marketing consent (both forms)
  agreed_planning_fees INTEGER NOT NULL DEFAULT 0 CHECK (agreed_planning_fees IN (0, 1)),
  agreed_packaged_pricing INTEGER NOT NULL DEFAULT 0 CHECK (agreed_packaged_pricing IN (0, 1)),
  agreed_communication INTEGER NOT NULL DEFAULT 0 CHECK (agreed_communication IN (0, 1)),
  agreed_passport_validity INTEGER NOT NULL DEFAULT 0 CHECK (agreed_passport_validity IN (0, 1)),
  email_opt_in INTEGER NOT NULL DEFAULT 0 CHECK (email_opt_in IN (0, 1)),

  -- Full raw form answers as JSON, so nothing is lost if a field is added later
  intake_details TEXT NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries (created_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries (email);
