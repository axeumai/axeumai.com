import { createFileRoute } from "@tanstack/react-router";

import { SiteNav, SiteFooter } from "@/components/axeum/SiteChrome";
import { LegalPage, LegalH2, LegalList } from "@/components/axeum/LegalPage";

const TITLE = "Privacy Policy — AXEUM Registry of Record";
const DESCRIPTION =
  "How Axeum Technologies, Inc. collects, uses, stores, and protects information across its websites, cloud-hosted platforms, and connected device integrations.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <LegalPage title="Privacy Policy" effective="March 1, 2026" email="privacy@axeumai.com">
          <p>
            Axeum Technologies, Inc. ("Axeum," "we," "us," or "our") respects your privacy. This
            Privacy Policy describes how we collect, use, store, and protect information across our
            websites, cloud-hosted software platforms, and connected device integrations
            (collectively, the "Services"). By using any of our Services, you agree to the practices
            described in this policy.
          </p>

          <LegalH2>Scope</LegalH2>
          <p>
            This policy applies to all Axeum websites, web applications, application programming
            interfaces (APIs), and device connectivity services operated by Axeum Technologies, Inc.
            Where our Services process data on behalf of a healthcare provider or covered entity, we
            act as a Business Associate under the Health Insurance Portability and Accountability Act
            of 1996 (HIPAA), and the terms of the applicable Business Associate Agreement govern the
            handling of Protected Health Information.
          </p>

          <LegalH2>Information We Collect</LegalH2>
          <p>
            <strong className="text-foreground">Account and contact information.</strong> When you
            create an account, contact us, or are provisioned as a user by an authorized
            organization, we may collect your name, email address, organizational affiliation, and
            authentication credentials.
          </p>
          <p>
            <strong className="text-foreground">Health and clinical data.</strong> Certain Services
            process health-related information on behalf of healthcare providers, including
            physiologic measurements transmitted from connected medical devices, clinical records,
            and related care documentation. This data is collected and processed solely at the
            direction of the healthcare provider or covered entity that controls it.
          </p>
          <p>
            <strong className="text-foreground">Connected device data.</strong> When medical devices
            transmit data through our Services, we receive measurement values, device identifiers,
            and transmission metadata. Device data is received directly from authorized devices or
            authorized device software without routing through third-party intermediary platforms,
            preserving an unbroken chain of custody from the point of measurement.
          </p>
          <p>
            <strong className="text-foreground">Usage and access data.</strong> We collect standard
            technical information necessary for security and service operation, including IP
            addresses, browser type, access timestamps, and pages or features accessed. We do not use
            third-party tracking pixels or behavioral advertising technologies.
          </p>
          <p>
            <strong className="text-foreground">Website enquiry data.</strong> When you submit the
            contact form on this website, we collect the name, organization, work email address,
            stated intent, and any workflow description you choose to provide. We use this
            information solely to respond to your enquiry, to route it to the appropriate team, and
            to maintain a record of the correspondence. We do not sell it, and we do not use it for
            advertising. Please do not submit Protected Health Information, personal health details,
            trade secrets, or other confidential material through the contact form; submitting the
            form does not create a non-disclosure agreement or any other contract between us.
          </p>

          <LegalH2>Cookies and Tracking</LegalH2>
          <p>
            This website does not set analytics cookies, advertising cookies, behavioral tracking
            pixels, session-replay tools, or third-party marketing tags. We use only the strictly
            necessary storage required for the site to function and to keep it secure. Because we
            perform no cross-site tracking, there is nothing to opt out of, and Global Privacy
            Control and Do Not Track browser signals require no additional action on our part.
          </p>
          <p>
            Authenticated Axeum applications may use strictly necessary cookies or local storage to
            maintain your signed-in session and enforce security controls. These are required for the
            application to operate and are not used for advertising or profiling. If we ever
            introduce analytics or other non-essential technologies, we will update this policy and
            provide notice and choice before doing so.
          </p>


          <LegalH2>How We Use Information</LegalH2>
          <p>We use the information we collect to:</p>
          <LegalList
            items={[
              "Provide, operate, and maintain our Services",
              "Process and store health data at the direction of authorized healthcare providers",
              "Generate verifiable, tamper-evident records of service delivery and data provenance",
              "Authenticate users and enforce access controls",
              "Respond to inquiries and provide support",
              "Comply with applicable laws and regulations",
              "Ensure security, detect fraud, and prevent abuse",
            ]}
          />

          <LegalH2>Artificial Intelligence and Automated Processing</LegalH2>
          <p>
            Certain Services use artificial intelligence to assist with clinical decision support,
            documentation, and data analysis. Before any health data is processed by AI systems, all
            direct patient identifiers are removed through an automated de-identification process.
            AI-generated outputs are provided as decision support for licensed healthcare
            professionals and do not constitute independent medical advice. We do not use patient
            data to train general-purpose AI models. AI processing occurs within our secured
            infrastructure and is not shared with AI providers in identifiable form.
          </p>

          <LegalH2>Information Sharing</LegalH2>
          <p>
            We do not sell, rent, or trade personal information or health data. We share information
            only in the following circumstances:
          </p>
          <LegalList
            items={[
              <>
                <strong className="text-foreground">With authorized healthcare providers</strong> who
                direct us to process data on their behalf
              </>,
              <>
                <strong className="text-foreground">With infrastructure service providers</strong>{" "}
                that host or support our Services, bound by confidentiality obligations and, where
                applicable, Business Associate Agreements
              </>,
              <>
                <strong className="text-foreground">When required by law</strong>, regulation, legal
                process, or enforceable government request
              </>,
              <>
                <strong className="text-foreground">To protect rights and safety</strong>, including
                enforcing our terms, protecting our operations, or protecting the safety of any
                person
              </>,
            ]}
          />
          <p>
            We do not share health data with device manufacturers, wearable platform vendors, or any
            third party not directly necessary for service delivery.
          </p>

          <LegalH2>Data Security</LegalH2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect
            information consistent with industry standards and applicable regulatory requirements,
            including:
          </p>
          <LegalList
            items={[
              "Encryption of data in transit (TLS) and at rest",
              "Role-based access controls and single sign-on authentication",
              "Cryptographic integrity verification for critical records",
              "Append-only audit logging for data access and modification events",
              "Automated session management and idle timeout protections",
              "Infrastructure hosted within the United States by established cloud providers",
            ]}
          />
          <p>
            No method of electronic transmission or storage is 100% secure. While we strive to use
            commercially acceptable means to protect information, we cannot guarantee absolute
            security.
          </p>

          <LegalH2>HIPAA Compliance</LegalH2>
          <p>
            Where our Services process Protected Health Information (PHI) on behalf of a covered
            entity or business associate, we comply with the privacy, security, and breach
            notification requirements of HIPAA and the HITECH Act. We enter into Business Associate
            Agreements with covered entities prior to processing PHI. We maintain policies,
            procedures, and technical safeguards aligned with the HIPAA Security Rule. Specific
            details regarding our HIPAA compliance posture are available upon request to authorized
            partners under appropriate confidentiality protections.
          </p>

          <LegalH2>Connected Device and Medical Data Integrity</LegalH2>
          <p>
            Our Services are designed to maintain the integrity and provenance of data received from
            connected medical devices. Device data is captured at the point of receipt, validated
            against expected parameters, and sealed into verifiable records that document the
            complete chain of custody. We do not alter, interpolate, or reconstruct device
            measurements after receipt. This approach supports regulatory compliance, billing
            integrity, and the evidentiary value of health data records.
          </p>

          <LegalH2>Data Retention</LegalH2>
          <p>
            We retain information for as long as necessary to provide our Services, comply with legal
            obligations, resolve disputes, and enforce agreements. Health data is retained in
            accordance with applicable healthcare record retention requirements and the terms of our
            agreements with healthcare providers. Upon termination of a service relationship, data is
            returned or securely destroyed in accordance with our data disposition procedures, unless
            retention is required by law.
          </p>

          <LegalH2>Children's Privacy</LegalH2>
          <p>
            Our Services are not directed to children under 13. We do not knowingly collect personal
            information from children under 13 except as directed by an authorized healthcare
            provider for the purpose of clinical care. If you believe we have collected information
            from a child without proper authorization, please contact us immediately.
          </p>

          <LegalH2>Your Rights</LegalH2>
          <p>
            Depending on your jurisdiction and the nature of the data, you may have the right to
            access, correct, delete, or port your personal information. For health data processed on
            behalf of a healthcare provider, rights requests should be directed to the provider who
            controls the data, and we will cooperate with the provider to fulfill such requests. For
            all other inquiries, contact us at{" "}
            <a href="mailto:privacy@axeumai.com" className="text-primary hover:underline">
              privacy@axeumai.com
            </a>
            .
          </p>

          <LegalH2>International Users</LegalH2>
          <p>
            Our Services are operated from and hosted within the United States. If you access our
            Services from outside the United States, your information may be transferred to and
            processed in the United States, where data protection laws may differ from those in your
            jurisdiction.
          </p>

          <LegalH2>Changes to This Policy</LegalH2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be posted on
            this page with an updated effective date. Where required by law, we will provide
            additional notice. Your continued use of our Services after changes constitutes
            acceptance of the updated policy.
          </p>

          <LegalH2>Healthcare Services — axeumCARE</LegalH2>
          <p>
            When Axeum's healthcare products (the axeumCARE family, including axeumFLOW, axeumAURA,
            axeumCOMPANION, and axeumSENSE) are used by healthcare practices or organizations, Axeum
            processes Protected Health Information (PHI) as a HIPAA Business Associate. For
            information about how PHI is handled in that context, please review our{" "}
            <a
              href="https://www.axeumai.com/hipaa-notice.html"
              className="text-primary hover:underline"
            >
              Business Associate Privacy Practices
            </a>
            . The terms of that statement govern the handling of PHI and supplement this Privacy
            Policy for healthcare use cases. In the event of conflict between this Privacy Policy and
            the Business Associate Privacy Practices for matters involving PHI, the Business
            Associate Privacy Practices control.
          </p>
        </LegalPage>
      </main>
      <SiteFooter />
    </div>
  );
}
