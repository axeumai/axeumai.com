import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/axeum/SiteChrome";
import { Hero } from "@/components/axeum/Hero";
import { HonorSystem, Definition } from "@/components/axeum/HonorSystem";
import { Market } from "@/components/axeum/Market";
import { HowItWorks, Engage, RunningToday } from "@/components/axeum/HowItWorks";
import { Contact } from "@/components/axeum/Contact";
import { SmsOptIn } from "@/components/axeum/SmsOptIn";

const TITLE = "AXEUM — Registry of Record for the Autonomous Economy";
const DESCRIPTION =
  "AXEUM is the Registry of Record: independently witnessed, sealed records of what systems executed, by whom, and under what conditions. Verify any receipt — no account required.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
        <SmsOptIn />
      </main>
      <SiteFooter />
    </div>
  );
}
