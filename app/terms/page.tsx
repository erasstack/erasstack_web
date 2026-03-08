import { Layout } from "@/components/layout/Layout";
import { Building2, Shield, Users } from "lucide-react";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These Terms of Service govern your access to and use of ErasStack
              services, platforms, and software solutions. By engaging with us,
              you agree to the terms outlined below.
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
              {/* About ErasStack */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  1. About ErasStack
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ErasStack designs, builds, and supports enterprise-grade
                  software systems for businesses, government agencies, and
                  non-governmental organizations (NGOs). Our solutions are
                  engineered to be secure, scalable, and reliable, with a focus
                  on long-term operational excellence.
                </p>
              </div>

              {/* Scope of Services */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  2. Scope of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services may include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom software design and development</li>
                  <li>System modernization and digital transformation</li>
                  <li>Enterprise system integration</li>
                  <li>Security architecture and compliance consulting</li>
                  <li>Ongoing maintenance and technical support</li>
                </ul>
              </div>

              {/* Client Responsibilities */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  3. Client Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Clients are responsible for providing accurate, complete, and
                  timely information required for project execution. Delays,
                  inaccuracies, or changes in scope may affect timelines,
                  deliverables, and costs.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All information shared between ErasStack and the client during
                  consultations, development, or support engagements is treated
                  as confidential. We do not disclose client information to
                  third parties without explicit consent, except where required
                  by law.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise agreed in writing, all intellectual property
                  developed by ErasStack remains the property of ErasStack until
                  full payment is received. Upon settlement, ownership or
                  licensing terms will be transferred as specified in the
                  project agreement.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ErasStack shall not be liable for indirect, incidental, or
                  consequential damages arising from the use or inability to use
                  our services. Our total liability shall not exceed the amount
                  paid by the client for the specific service giving rise to the
                  claim.
                </p>
              </div>

              {/* Termination */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  7. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate an engagement in accordance with
                  the terms defined in the applicable service agreement.
                  Obligations relating to confidentiality, intellectual
                  property, and payment shall survive termination.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  8. Changes to These Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ErasStack reserves the right to update or modify these Terms
                  of Service at any time. Changes will become effective upon
                  posting on our website. Continued use of our services
                  constitutes acceptance of the revised terms.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-cream rounded-xl p-8">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Who We Serve
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Private enterprises and corporations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Government agencies and public institutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gold mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      NGOs and mission-driven organizations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-heading font-semibold mb-4">
                  Legal Transparency
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  These terms are designed to ensure clarity, fairness, and
                  trust. For project-specific obligations, a separate written
                  agreement will always take precedence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
