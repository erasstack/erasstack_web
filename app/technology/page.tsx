import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  Layers,
  Lightbulb,
  Puzzle,
  Scale,
  Shield,
} from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: Scale,
    title: "Right Tool for the Job",
    description:
      "We select technologies based on fitness for purpose, not popularity or novelty. Every choice is justified by the specific requirements of the project and the capabilities of the client organization.",
    examples: [
      "Evaluating trade-offs between build vs. buy decisions",
      "Matching technology complexity to organizational capability",
      "Considering long-term maintenance and talent availability",
    ],
  },
  {
    icon: Clock,
    title: "Built to Last",
    description:
      "We design systems for longevity. This means favoring proven technologies, clear architectures, and comprehensive documentation over cutting-edge experiments that may not stand the test of time.",
    examples: [
      "Choosing mature, well-supported frameworks",
      "Designing for backward compatibility",
      "Planning for technology refresh cycles",
    ],
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Security is not a feature to be added later. We integrate security considerations into every phase of design and development, from architecture through deployment and operations.",
    examples: [
      "Threat modeling during design phase",
      "Secure coding practices as standard",
      "Regular security assessments and updates",
    ],
  },
  {
    icon: Layers,
    title: "Layered Simplicity",
    description:
      "Complex problems require thoughtful solutions, not complicated ones. We strive for architectures that are sophisticated enough to address requirements while remaining understandable and maintainable.",
    examples: [
      "Clear separation of concerns",
      "Well-defined interfaces between components",
      "Documentation that enables understanding",
    ],
  },
  {
    icon: Puzzle,
    title: "Integration-Ready",
    description:
      "No system exists in isolation. We design with integration in mind, ensuring that solutions can communicate with existing systems and accommodate future connections as needs evolve.",
    examples: [
      "API-first design approach",
      "Standard data formats and protocols",
      "Extensible architectures",
    ],
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description:
      "We embrace innovation where it creates value, not for its own sake. New technologies are adopted when they demonstrably improve outcomes, not simply because they're available.",
    examples: [
      "Proof-of-concept validation before adoption",
      "Measured rollout of new capabilities",
      "Continuous evaluation of emerging technologies",
    ],
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Technology Philosophy
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Principled Approach to Technology Decisions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don&apos;t believe in one-size-fits-all technology stacks. Instead,
              we apply a set of guiding principles that inform every technical
              decision we make, ensuring solutions that truly serve
              organizational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Technology Serves Strategy, Not the Reverse
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In our experience, technology failures rarely stem from
                  choosing the &quot;wrong&quot; framework or database. They result from
                  misalignment between technology decisions and organizational
                  realities—capacity, culture, constraints, and long-term
                  objectives.
                </p>
                <p>
                  This is why we begin every engagement by understanding your
                  business context, not by prescribing a technology stack. The
                  best technology for your organization is the one that your
                  team can effectively maintain, that integrates with your
                  existing ecosystem, and that scales appropriately with your
                  growth.
                </p>
                <p>
                  We resist the industry&apos;s obsession with novelty. While we stay
                  current with technological developments, we recommend new
                  technologies only when they offer clear, demonstrable
                  advantages over proven alternatives.
                </p>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
              <blockquote className="text-xl font-heading italic mb-6 leading-relaxed">
                &quote;The goal is not to build systems that use the latest
                technology. The goal is to build systems that solve problems
                effectively and continue to do so for years to come.&quot;
              </blockquote>
              <p className="text-primary-foreground/70 text-sm">
                — ErasStack Engineering Principles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="section-padding bg-cream">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Our Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Guiding Our Technical Decisions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These principles guide every technology recommendation we make,
              ensuring consistency and alignment with client interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-card rounded-xl border border-border p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <principle.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {principle.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    In Practice
                  </p>
                  <ul className="space-y-2">
                    {principle.examples.map((example) => (
                      <li
                        key={example}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              What We Avoid
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Technology-First Thinking",
                  description:
                    "We don't recommend solutions because we're enthusiastic about a technology. Every recommendation is grounded in your specific needs.",
                },
                {
                  title: "Resume-Driven Development",
                  description:
                    "We don't use client projects as opportunities to learn new technologies. We use proven expertise to deliver reliable results.",
                },
                {
                  title: "Vendor Lock-In",
                  description:
                    "We design for portability and avoid dependencies that limit your future options or negotiating leverage.",
                },
                {
                  title: "Unnecessary Complexity",
                  description:
                    "We don't over-engineer solutions. Complexity should be justified by requirements, not by technical ambition.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-lg border border-border p-6"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-enterprise text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Discuss Your Technology Needs
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Whether you&apos;re planning a new system, modernizing existing
            infrastructure, or evaluating technology options, we&apos;re here to
            provide thoughtful guidance.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link href="/consultation">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
