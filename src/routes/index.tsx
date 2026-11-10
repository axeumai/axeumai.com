import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/axeum/SiteChrome";
import { Hero } from "@/components/axeum/Hero";
import { HonorSystem, Definition } from "@/components/axeum/HonorSystem";
import { Market } from "@/components/axeum/Market";
import { HowItWorks, Engage, RunningToday } from "@/components/axeum/HowItWorks";
import { Contact } from "@/components/axeum/Contact";

const TITLE = "AXEUM — Registry of Record for the Autonomous Economy";
const DESCRIPTION =
  "AXEUM is the Registry of Record: independently witnessed, sealed records of what systems executed, by whom, and under what conditions. Verify any receipt — no account required.";

// Organization + WebSite structured data for search and AI-answer engines.
// Wording mirrors the visible homepage copy; keep the two in step.
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://axeumai.com/#organization",
      name: "AXEUM",
      legalName: "Axeum Technologies, Inc.",
      alternateName: "Registry of Record",
      url: "https://axeumai.com/",
      logo: "https://axeumai.com/favicon.png",
      image: "https://axeumai.com/og-image.jpg",
      description:
        "AXEUM is the Registry of Record: independently witnessed, sealed records of what systems executed, by whom, and under what conditions.",
      slogan: "Registry of Record for the autonomous economy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "252 NW 29th St, 9th Floor",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33127",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://axeumai.com/#website",
      url: "https://axeumai.com/",
      name: "AXEUM — Registry of Record",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": "https://axeumai.com/#organization" },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://axeumai.com" },
      { property: "og:site_name", content: "AXEUM" },
      { property: "og:image", content: "https://axeumai.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://axeumai.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://axeumai.com" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(STRUCTURED_DATA) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <HonorSystem />
        <Definition />
        <Market />
        <HowItWorks />
        <Engage />
        <RunningToday />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
