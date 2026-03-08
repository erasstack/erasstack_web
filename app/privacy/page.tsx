import { Layout } from "@/components/layout/Layout";
import { Database, Lock, Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This Privacy Policy explains how ErasStack collects, uses,
              protects, and handles personal and organizational data when you
              interact with our services, platforms, and communications.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ErasStack is committed to protecting the privacy and security
                  of our clients, partners, and website visitors. This policy
                  outlines the types of information we collect and how that
                  information is used, stored, and safeguarded.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following categories of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Contact details such as name, email address, phone number,
                    and organization
                  </li>
                  <li>
                    Project-related information provided during consultations or
                    engagements
                  </li>
                  <li>
                    Technical data such as IP address, browser type, and device
                    information
                  </li>
                  <li>
                    Communications exchanged via email, forms, or support
                    channels
                  </li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Information collected by ErasStack is used for the following
                  purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Responding to inquiries and consultation requests</li>
                  <li>Delivering, maintaining, and improving our services</li>
                  <li>Project communication and client support</li>
                  <li>Security monitoring and fraud prevention</li>
                  <li>Compliance with legal and regulatory obligations</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ErasStack does not sell, rent, or trade personal information.
                  Data may only be shared with trusted service providers or
                  partners where necessary to deliver services, or where
                  required by law. All such parties are bound by confidentiality
                  obligations.
                </p>
              </div>

              {/* Data Security */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement administrative, technical, and organizational
                  security measures to protect information against unauthorized
                  access, disclosure, alteration, or destruction. These include
                  access controls, encryption, secure infrastructure, and
                  regular security reviews.
                </p>
              </div>

              {/* Data Retention */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  6. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Personal data is retained only for as long as necessary to
                  fulfill the purposes outlined in this policy, unless a longer
                  retention period is required by law or contractual obligation.
                </p>
              </div>

              {/* Your Rights */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your jurisdiction, you may have the right to
                  access, correct, or request deletion of your personal data.
                  Requests related to data privacy can be made by contacting
                  ErasStack directly.
                </p>
              </div>

              {/* Policy Updates */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy may be updated periodically to reflect
                  changes in our practices, technologies, or legal requirements.
                  Updates will be posted on this page with the revised effective
                  date.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-cream rounded-xl p-8">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Our Commitment
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Responsible data handling practices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Secure systems and infrastructure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Minimal and purpose-driven data collection
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-heading font-semibold mb-4">
                  Transparency & Trust
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  Privacy is a core principle at ErasStack. We design our
                  systems and processes to respect confidentiality and comply
                  with applicable data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
