import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/axeum/SiteChrome";
import { LegalPage, LegalH2, LegalList } from "@/components/axeum/LegalPage";

const TITLE = "Legal Disclaimer — AXEUM Registry of Record";
const DESCRIPTION =
  "Legal disclaimers for Axeum Technologies, Inc. including confidentiality, liability, and the Registry of Record's non-trust stance.";

export const Route = createFileRoute("/disclaimer")({
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
  component: DisclaimerRoute,
});

function DisclaimerRoute() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <LegalPage title="Legal Disclaimer" effective="August 18, 2026" email="legal@axeumai.com">
          <p>
            The following legal disclaimers apply to all Axeum Technologies, Inc. ("Axeum") public
            websites, marketing materials, product documentation, and communications. By accessing
            or reviewing this website, you acknowledge and agree to these terms.
          </p>

          <LegalH2>Non-Disclosure and Confidentiality</LegalH2>
          <p>
            Unless otherwise expressly agreed in a signed confidentiality agreement, any information
            shared by Axeum is provided for informational purposes only and does not create a
            confidential relationship. If you are considering a business engagement with Axeum, a
            separate Non-Disclosure Agreement (NDA) may be required before the disclosure of
            proprietary technical, commercial, or operational information.
          </p>
          <p>
            No recipient of this website's content should rely on it as confidential advice,
            investment guidance, or a representation of Axeum's contractual obligations. All
            discussions regarding specific products, pricing, or implementations are subject to
            executed agreements.
          </p>

          <LegalH2>Registry of Record — Non-Trust Stance</LegalH2>
          <p>
            <strong className="text-foreground">AXEUM is not a trust layer.</strong> The AXEUM
            Registry of Record<sup className="align-super text-[0.7em]">™</sup> is a sealed
            record-keeping infrastructure designed to produce verifiable, tamper-evident evidence of
            events, transactions, and device outputs. It is built to be verified, not trusted.
          </p>
          <p>The AXEUM system does not:</p>
          <LegalList
            items={[
              "Replace legal contracts, regulatory approvals, or fiduciary duties",
              "Guarantee the truth, accuracy, or completeness of underlying data submitted by users or devices",
              "Create a fiduciary, advisory, or custodial relationship with any user or counterparty",
              "Insure against loss, fraud, or operational failure",
              "Substitute for independent legal, compliance, or audit advice",
            ]}
          />
          <p>
            A sealed record means that the state of the record at a given point in time can be
            independently verified and shown to be unaltered since it was recorded. It does not mean
            that the contents of the record are inherently true, complete, or legally dispositive.
            Verification is a property of the record's integrity, not a warranty of the underlying
            facts.
          </p>

          <LegalH2>Liability and Limitation of Liability</LegalH2>
          <p>
            To the maximum extent permitted by applicable law, Axeum Technologies, Inc., its
            officers, directors, employees, agents, affiliates, and licensors shall not be liable
            for any direct, indirect, incidental, special, consequential, exemplary, or punitive
            damages arising from or relating to:
          </p>
          <LegalList
            items={[
              "Use of or reliance on any information on this website",
              "Any products, services, or technologies described herein, whether or not they are later adopted",
              "Any unauthorized access, modification, or unavailability of systems or records",
              "Any act or omission of a user, device, counterparty, or third-party service provider",
              "Any business, legal, or regulatory decision made in reliance on AXEUM records or materials",
            ]}
          />
          <p>
            Liability for any claim relating to this website or the information contained herein shall
            in no event exceed the amount paid by you to Axeum, if any, for access to the specific
            service giving rise to the claim in the twelve (12) months preceding the claim.
          </p>

          <LegalH2>No Warranty</LegalH2>
          <p>
            All information, materials, and software on this website are provided "as is" and "as
            available," without any warranties of any kind, either express or implied. Axeum expressly
            disclaims all warranties, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, non-infringement, title, and any
            warranties arising from course of dealing or usage of trade.
          </p>
          <p>
            Axeum does not warrant that the website will be uninterrupted, timely, secure, error-free,
            or free from viruses or other harmful components. Any reliance on the website or its content
            is at your own risk.
          </p>

          <LegalH2>Forward-Looking Statements</LegalH2>
          <p>
            This website may contain forward-looking statements regarding Axeum's technology roadmap,
            market opportunities, product capabilities, or strategic direction. These statements are
            based on current expectations and assumptions and are subject to risks, uncertainties, and
            changes in circumstances. Actual results may differ materially from those described.
            Axeum undertakes no obligation to update any forward-looking statements.
          </p>

          <LegalH2>Third-Party References and Links</LegalH2>
          <p>
            References to third parties, industry standards, regulations, or comparable systems are
            for illustrative purposes only. They do not imply endorsement, affiliation, or equivalence
            between AXEUM and those third parties. Links to external websites are provided for
            convenience and do not constitute Axeum's endorsement of their content or practices.
          </p>

          <LegalH2>No Legal, Regulatory, or Compliance Advice</LegalH2>
          <p>
            Nothing on this website is intended to be or should be construed as legal, tax,
            regulatory, compliance, or investment advice. Users are responsible for evaluating how
            AXEUM technologies fit within their own legal, regulatory, and operational frameworks and
            for consulting qualified professionals as appropriate.
          </p>

          <LegalH2>Governing Law and Dispute Resolution</LegalH2>
          <p>
            These disclaimers are governed by the laws of the State of Florida, without regard to
            conflict of law principles. Any dispute arising from or relating to these disclaimers or
            this website shall be resolved exclusively in the state or federal courts located in
            Miami-Dade County, Florida.
          </p>

          <LegalH2>Changes to This Disclaimer</LegalH2>
          <p>
            Axeum may update this Legal Disclaimer from time to time. Material changes will be posted on
            this page with an updated effective date. Your continued use of the website after any
            changes constitutes acceptance of the updated disclaimer.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </div>
  );
}
