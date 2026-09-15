ALTER TABLE public.inquiries
  ADD COLUMN form_type TEXT NOT NULL DEFAULT 'quick' CHECK (form_type IN ('quick', 'detailed')),
  ADD COLUMN phone TEXT,
  ADD COLUMN referral_source TEXT,
  ADD COLUMN intake_details JSONB NOT NULL DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.inquiries.form_type IS 'Identifies the quick inquiry or detailed trip intake form.';
COMMENT ON COLUMN public.inquiries.intake_details IS 'Structured responses from the selected inquiry form.';