import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { theme } from "@/theme";
import type { Metadata } from "next";

const t = theme;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${t.brand.name} — the terms and conditions governing use of our website and services.`,
};

const navy = "#0C1E3E";
const bodyText = "#1F2937";
const mutedText = "#6B7280";
const gold = "#C8943A";
const borderColor = "rgba(12,30,62,0.1)";
const lightBg = "#F5F7FA";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: 13, color: mutedText }}>Last updated: June 2025</p>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

          <Section title="1. Introduction">
            <P>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website{" "}
              <Strong>erasstack.com</Strong> and any services provided by ErasStack, a software
              development company registered in Nigeria under the Corporate Affairs Commission (CAC).
            </P>
            <P>
              By accessing our website or engaging our services, you agree to be bound by these Terms.
              If you do not agree, do not use our website or services.
            </P>
          </Section>

          <Section title="2. Services">
            <P>ErasStack provides professional software development services including, but not limited to:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>Custom software application development</Li>
              <Li>Backend systems and database architecture</Li>
              <Li>Mobile application development (iOS and Android)</Li>
              <Li>API development and systems integration</Li>
              <Li>Technical consulting and software architecture advisory</Li>
            </ul>
            <P>
              The specific scope, deliverables, timelines, and fees for any engagement are agreed upon
              in a separate written agreement or Statement of Work (SOW) between ErasStack and the
              client.
            </P>
          </Section>

          <Section title="3. Use of Website">
            <P>You agree to use this website only for lawful purposes. You must not:</P>
            <ul style={{ paddingLeft: 20, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <Li>Use the website in any way that violates applicable local, national, or international laws or regulations.</Li>
              <Li>Transmit any unsolicited commercial communications or spam.</Li>
              <Li>Attempt to gain unauthorised access to any part of the website or its related systems.</Li>
              <Li>Engage in any conduct that disrupts, damages, or impairs the functionality of the website.</Li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <P>
              All content on this website — including text, graphics, logos, and code — is the property
              of ErasStack or its content suppliers and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works from any content on
              this website without prior written permission from ErasStack.
            </P>
            <P>
              Software and systems developed for clients under a service agreement remain subject to
              the intellectual property terms specified in that agreement.
            </P>
          </Section>

          <Section title="5. Payment and Fees">
            <P>
              Fees for services are specified in individual client agreements. Payment terms, milestones,
              and conditions are defined in the relevant Statement of Work. ErasStack reserves the right
              to suspend or terminate services in the event of non-payment in accordance with the agreed
              payment schedule.
            </P>
          </Section>

          <Section title="6. Confidentiality">
            <P>
              Both parties agree to treat as confidential any proprietary or sensitive information shared
              in the course of a service engagement. This obligation survives the termination of any
              service agreement. Specific confidentiality terms are detailed in individual client
              contracts or Non-Disclosure Agreements (NDAs) where applicable.
            </P>
          </Section>

          <Section title="7. Limitation of Liability">
            <P>
              To the fullest extent permitted by applicable law, ErasStack shall not be liable for any
              indirect, incidental, consequential, or punitive damages arising from your use of this
              website or our services. Our total liability in connection with any service shall not
              exceed the total fees paid by the client for that specific engagement.
            </P>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <P>
              This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties
              of any kind, either express or implied. ErasStack does not warrant that the website will
              be uninterrupted, error-free, or free of viruses or other harmful components.
            </P>
          </Section>

          <Section title="9. Termination">
            <P>
              ErasStack reserves the right to terminate or suspend access to our website or services at
              our sole discretion, without notice, for conduct that we believe violates these Terms or
              is harmful to other users, third parties, or for any other reason.
            </P>
          </Section>

          <Section title="10. Governing Law">
            <P>
              These Terms shall be governed by and construed in accordance with the laws of the Federal
              Republic of Nigeria. Any disputes arising from these Terms or your use of our services
              shall be subject to the exclusive jurisdiction of the Nigerian courts.
            </P>
          </Section>

          <Section title="11. Changes to These Terms">
            <P>
              ErasStack reserves the right to modify these Terms at any time. Changes will be published
              on this page with an updated effective date. Continued use of the website following any
              changes constitutes your acceptance of the revised Terms.
            </P>
          </Section>

          <Section title="12. Contact">
            <P>For questions regarding these Terms of Service, please contact us:</P>
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
