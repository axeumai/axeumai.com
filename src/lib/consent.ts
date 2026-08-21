/**
 * Google Consent Mode v2 state.
 *
 * The default state is declared in <head> (see src/routes/__root.tsx) and denies
 * every storage type before gtag.js loads, so nothing is written until a visitor
 * chooses. This module only ever *raises* consent for analytics.
 *
 * Advertising signals (ad_storage, ad_user_data, ad_personalization) are never
 * granted — the site runs no ads and the privacy policy says so. Do not add them
 * here without changing that policy first.
 */
export const CONSENT_STORAGE_KEY = "axeum-consent-v1";
export const CONSENT_EVENT = "axeum:open-consent";

export type ConsentChoice = "granted" | "denied";

type GtagFn = (...args: unknown[]) => void;

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: GtagFn };
  // Push directly: the inline head snippet defines gtag(), but pushing to
  // dataLayer is equivalent and survives the snippet being absent.
  if (w.gtag) w.gtag(...args);
  else (w.dataLayer = w.dataLayer || []).push(args);
}

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Private browsing / storage blocked — treat as undecided, stay denied.
    return null;
  }
}

export function applyConsent(choice: ConsentChoice): void {
  gtag("consent", "update", {
    analytics_storage: choice === "granted" ? "granted" : "denied",
  });
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Non-fatal: the choice still applies for this page view.
  }
  applyConsent(choice);
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
