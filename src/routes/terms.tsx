import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/axeum/SiteChrome";
import { LegalPage, LegalH2, LegalList } from "@/components/axeum/LegalPage";

const TITLE = "Terms of Use — AXEUM Registry of Record";
const DESCRIPTION =
  "The Terms of Use governing access to Axeum Technologies, Inc. websites and products, including intellectual property, warranties, liability, and governing law.";

export const Route = createFileRoute("/terms")({
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
  component: TermsRoute,
});

function TermsRoute() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <LegalPage title="Terms of Use" effective="February 17, 2026" email="info@axeumai.com">
          <p>
            These Terms of Use ("Terms") govern your access to and use of axeumai.com (the "Site")
            operated by Axeum Technologies, Inc. ("Axeum," "we," "us," or "our"). By accessing the
            Site, you agree to these Terms.
          </p>

          <LegalH2>Use of the Site</LegalH2>
          <p>
            The Site is provided for informational purposes only. You agree to use the Site lawfully
            and in a manner that does not infringe upon or restrict others' use of the Site.
          </p>
          <p>You may not:</p>
          <LegalList
            items={[
              "Use the Site for any unlawful purpose",
              "Attempt to gain unauthorized access to any part of the Site or its infrastructure",
              "Interfere with or disrupt the Site's operation",
              "Scrape, crawl, or use automated means to access the Site without our express permission",
            ]}
          />

          <LegalH2>Healthcare Products — axeumCARE</LegalH2>
          <p>
            Use of Axeum's healthcare products (the axeumCARE family, including axeumFLOW at{" "}
            <a href="https://care.axeumai.com/" className="text-primary hover:underline">
              care.axeumai.com
            </a>
            , axeumAURA, axeumCOMPANION, and axeumSENSE) by healthcare practices or organizations is
            additionally governed by: (a) the executed Business Associate Agreement between Axeum and
            the applicable Covered Entity; (b) the{" "}
            <a
              href="https://www.axeumai.com/hipaa-notice.html"
              className="text-primary hover:underline"
            >
              Business Associate Privacy Practices
            </a>
            ; and (c) the{" "}
            <a
              href="https://www.axeumai.com/acceptable-use.html"
              className="text-primary hover:underline"
            >
              Acceptable Use Policy
            </a>
            . By accessing these products, authorized users represent that they have reviewed and
            agree to the Acceptable Use Policy. In the event of conflict between these Terms of Use
            and the Business Associate Agreement for matters involving PHI, the Business Associate
            Agreement controls.
          </p>

          <LegalH2>Intellectual Property</LegalH2>
          <p>
            All content on the Site, including text, graphics, logos, design elements, and software,
            is the property of Axeum Technologies, Inc. and is protected by United States and
            international intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from any content on
            the Site without our prior written consent.
          </p>

          <LegalH2>Trademarks and Patents</LegalH2>
          <p>
            AXEUM™, axeumOS™, axeumCARE™, Registry of Record™, Receipt of Record™, Execution
            Receipts™, ERI™, Governed Orchestration™, Copper Collar™, and related names, taglines,
            logos, and marks are trademarks of Axeum Technologies, Inc. Use of these marks without our
            prior written permission is prohibited. Nothing on the Site grants any license or right to
            use them, whether by implication, estoppel, or otherwise.
          </p>
          <p>
            Patent pending. The methods, systems, and architectures described on the Site are the
            subject of pending United States patent applications, including provisional filings held
            by Axeum Technologies, Inc. Third-party names and marks referenced on the Site are the
            property of their respective owners and are used for identification only; such reference
            does not imply any affiliation, sponsorship, or endorsement.
          </p>


          <LegalH2>Disclaimer of Warranties</LegalH2>
          <p>
            The Site is provided "as is" and "as available" without warranties of any kind, express or
            implied. We do not warrant that the Site will be uninterrupted, error-free, or free of
            harmful components.
          </p>

          <LegalH2>Limitation of Liability</LegalH2>
          <p>
            To the maximum extent permitted by law, Axeum Technologies, Inc. shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising from your
            use of or inability to use the Site.
          </p>

          <LegalH2>Indemnification</LegalH2>
          <p>
            You agree to indemnify and hold harmless Axeum Technologies, Inc. and its officers,
            directors, employees, and agents from any claims, damages, or expenses arising from your
            use of the Site or violation of these Terms.
          </p>

          <LegalH2>Governing Law</LegalH2>
          <p>
            These Terms are governed by the laws of the State of Florida, without regard to conflict
            of law principles. Any disputes shall be resolved in the courts located in Miami-Dade
            County, Florida.
          </p>

          <LegalH2>Changes to These Terms</LegalH2>
          <p>
            We may update these Terms at any time. Changes will be posted on this page with an updated
            effective date. Continued use of the Site after changes constitutes acceptance of the
            updated Terms.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </div>
  );
}
