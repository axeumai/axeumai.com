-- Combine the "Engage the Registry" contact form and the A2P 10DLC SMS opt-in
-- into a single form, so the opt-in produces a retained record of consent.
--
-- Until this is applied, the client falls back to inserting without these two
-- columns (PostgREST returns PGRST204 for an unknown column) and the consent is
-- accepted but not stored — the same behaviour as the standalone opt-in, which
-- never had a backend. Once applied, consent persists with no code change.

ALTER TABLE public.contact_requests
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS sms_consent BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN public.contact_requests.phone IS
  'Optional mobile number supplied for account updates and security alerts.';
COMMENT ON COLUMN public.contact_requests.sms_consent IS
  'A2P 10DLC proof of consent: true only when the submitter checked the SMS consent box. Never default to true.';
