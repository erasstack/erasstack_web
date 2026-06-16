import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { theme } from "@/theme";
import type { Metadata } from "next";

const t = theme;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${t.brand.name} — how we collect, use, and protect your personal information.`,
};

const navy = "#0C1E3E";
const bodyText = "#1F2937";
const mutedText = "#6B7280";
const gold = "#C8943A";
const borderColor = "rgba(12,30,62,0.1)";
const lightBg = "#F5F7FA";

export default function PrivacyPage() {
  return (
    <main style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "140px 24px 96px",
        }}
      >
        {/* Page header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: gold, marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: navy, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 13, color: mutedText }}>Last updated: June 2025</p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

          <Section title="1. Introduction">
            <P>
              ErasStack (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a software development company
              registered in Nigeria under the Corporate Affairs Commission (CAC). This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website <Strong>erasstack.com</Strong> or engage our services.
            </P>
            <P>
              By accessing our website or using our services, you agree to the terms outlined in
              this Privacy Policy. If you do not agree, please refrain from using our website or
              services.
            </P>
          </Section>

          <Section title="2. Information We Collect">
            <P>We may collect the following categories of information:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li><Strong>Contact information</Strong> — name, email address, and phone number provided through our contact form or direct correspondence.</Li>
              <Li><Strong>Business information</Strong> — company name, project description, and other details you share when requesting our services.</Li>
              <Li><Strong>Usage data</Strong> — anonymised information about how you interact with our website, collected via standard web analytics.</Li>
            </ul>
            <P>We do not collect sensitive personal data such as financial information, identification numbers, or biometric data through our website.</P>
          </Section>

          <Section title="3. How We Use Your Information">
            <P>We use the information we collect for the following purposes:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>To respond to enquiries and communicate about our services.</Li>
              <Li>To assess project requirements and provide relevant proposals.</Li>
              <Li>To fulfil contractual obligations where a service agreement exists.</Li>
              <Li>To improve our website and service offerings based on anonymised usage patterns.</Li>
              <Li>To comply with applicable legal obligations under Nigerian law.</Li>
            </ul>
            <P>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</P>
          </Section>

          <Section title="4. Information Sharing">
            <P>We may share your information only in the following limited circumstances:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li><Strong>Service providers</Strong> — trusted third-party vendors who assist in operating our business, bound by confidentiality obligations.</Li>
              <Li><Strong>Legal requirements</Strong> — when required to comply with applicable laws or valid legal processes in Nigeria.</Li>
              <Li><Strong>Business transfers</Strong> — in the event of a merger, acquisition, or sale of company assets, with prior notice to affected parties.</Li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <P>
              We retain personal data only for as long as necessary to fulfil the purposes outlined in
              this policy or as required by applicable law. Contact and project-related information is
              retained for the duration of the business relationship and a reasonable period thereafter,
              not exceeding five (5) years unless legally required.
            </P>
          </Section>

          <Section title="6. Data Security">
            <P>
              We implement reasonable technical and organisational measures to protect your personal
              information against unauthorised access, disclosure, alteration, or destruction. However,
              no method of transmission over the internet is completely secure, and we cannot guarantee
              absolute security.
            </P>
          </Section>

          <Section title="7. Your Rights">
            <P>Subject to applicable law, you have the right to:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>Request access to the personal data we hold about you.</Li>
              <Li>Request correction of inaccurate or incomplete data.</Li>
              <Li>Request deletion of your data, subject to legal retention obligations.</Li>
              <Li>Withdraw consent where processing is based on consent.</Li>
            </ul>
            <P>To exercise any of these rights, contact us at <Strong>{t.brand.email}</Strong>.</P>
          </Section>

          <Section title="8. Cookies">
            <P>
              Our website may use standard browser cookies and analytics technologies to understand
              usage patterns. We do not use cookies for advertising tracking. You may disable cookies
              in your browser settings; however, this may affect certain website functionality.
            </P>
          </Section>

          <Section title="9. Third-Party Links">
            <P>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites and encourage you to review their respective
              privacy policies.
            </P>
          </Section>

          <Section title="10. Changes to This Policy">
            <P>
              We may update this Privacy Policy from time to time. The revised policy will be published
              on this page with an updated effective date. We encourage you to review this page
              periodically.
            </P>
          </Section>

          <Section title="11. Contact">
            <P>
              If you have questions or concerns about this Privacy Policy, please contact us:
            </P>
            <div style={{ marginTop: 16, padding: "20px 24px", background: lightBg, border: `1px solid ${borderColor}`, borderRadius: 10, display: "flex", flexDirection: "column", gap: 4 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: navy, margin: 0 }}>{t.brand.name}</p>
              <p style={{ fontSize: 14, color: bodyText, margin: 0 }}>{t.brand.location}</p>
              <p style={{ fontSize: 14, color: bodyText, margin: 0 }}>{t.brand.email}</p>
              <p style={{ fontSize: 14, color: bodyText, margin: 0 }}>{t.brand.phone}</p>
            </div>
          </Section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontSize: 17, fontWeight: 600, color: navy, marginBottom: 12, borderBottom: `2px solid ${gold}`, paddingBottom: 8, display: "inline-block" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, lineHeight: 1.7, color: bodyText, margin: 0 }}>{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li style={{ fontSize: 15, lineHeight: 1.7, color: bodyText }}>{children}</li>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong style={{ fontWeight: 600, color: navy }}>{children}</strong>;
}
