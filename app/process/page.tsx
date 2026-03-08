import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HeartHandshake,
  Rocket,
  Search,
  Target,
  TestTube,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    duration: "1-2 weeks",
    description:
      "We begin every engagement by thoroughly understanding your organization, objectives, constraints, and existing technology landscape.",
    activities: [
      "Stakeholder interviews and requirements gathering",
      "Current state technology assessment",
      "Business process analysis",
      "Risk and constraint identification",
      "Success criteria definition",
    ],
    deliverables: [
      "Discovery report with findings",
      "Initial recommendations",
      "Engagement scope proposal",
    ],
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy & Planning",
    duration: "2-4 weeks",
    description:
      "We develop a comprehensive plan that aligns technical solutions with business objectives, including architecture, timelines, and resource requirements.",
    activities: [
      "Solution architecture design",
      "Technology selection and justification",
      "Project planning and scheduling",
      "Risk mitigation planning",
      "Resource and budget estimation",
    ],
    deliverables: [
      "Technical architecture document",
      "Project plan with milestones",
      "Risk management plan",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Design & Development",
    duration: "Variable",
    description:
      "Our engineering team builds the solution using rigorous practices that ensure quality, security, and maintainability from the start.",
    activities: [
      "Detailed technical design",
      "Iterative development cycles",
      "Continuous code review and quality assurance",
      "Security implementation and testing",
      "Regular progress demonstrations",
    ],
    deliverables: [
      "Working software increments",
      "Technical documentation",
      "Progress reports and demos",
    ],
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & Validation",
    duration: "2-4 weeks",
    description:
      "Comprehensive testing ensures the solution meets all requirements, performs under load, and maintains security standards.",
    activities: [
      "Functional testing and validation",
      "Performance and load testing",
      "Security assessment and penetration testing",
      "User acceptance testing coordination",
      "Issue resolution and optimization",
    ],
    deliverables: [
      "Test reports and results",
      "Performance benchmarks",
      "Security assessment report",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Launch",
    duration: "1-2 weeks",
    description:
      "Careful deployment planning and execution ensures a smooth transition to production with minimal disruption to operations.",
    activities: [
      "Deployment planning and rehearsal",
      "Data migration execution",
      "Go-live coordination",
      "Immediate monitoring and support",
      "Post-launch optimization",
    ],
    deliverables: [
      "Deployment runbooks",
      "Operational handover documentation",
      "Post-launch support plan",
    ],
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Support & Evolution",
    duration: "Ongoing",
    description:
      "Our commitment extends beyond launch. We provide ongoing support and work with you to evolve the system as needs change.",
    activities: [
      "Production monitoring and support",
      "Issue response and resolution",
      "System optimization and tuning",
      "Feature enhancement planning",
      "Technology refresh guidance",
    ],
    deliverables: [
      "Support SLA compliance reports",
      "System health dashboards",
      "Evolution roadmap updates",
    ],
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              How We Work
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              A Proven Process for Reliable Outcomes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our engagement methodology has been refined through years of
              enterprise software delivery. It ensures transparency, manages
              risk, and consistently delivers results that meet institutional
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-16 lg:space-y-24">
              {phases.map((phase, index) => (
                <div
                  key={phase.number}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                    index % 2 === 1 ? "" : ""
                  }`}
                >
                  {/* Phase Number - Timeline Marker */}
                  <div
                    className="hidden lg:flex absolute left-[50%] -translate-x-1/2 w-16 h-16 rounded-full bg-primary items-center justify-center z-10"
                    style={{ top: `${index * (100 / phases.length)}%` }}
                  >
                    <span className="text-primary-foreground font-heading font-bold text-lg">
                      {phase.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="card-enterprise p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                          <phase.icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="lg:hidden text-sm font-semibold text-gold">
                              Phase {phase.number}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {phase.duration}
                            </span>
                          </div>
                          <h2 className="text-2xl font-heading font-bold text-foreground">
                            {phase.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                            Key Activities
                          </h3>
                          <ul className="space-y-2">
                            {phase.activities.map((activity) => (
                              <li
                                key={activity}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                            Deliverables
                          </h3>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable) => (
                              <li
                                key={deliverable}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div
                    className={
                      index % 2 === 1
                        ? "lg:col-start-1 lg:row-start-1"
                        : "hidden lg:block"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-cream">
        <div className="container-enterprise">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Guiding Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              How We Ensure Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transparency",
                description:
                  "Clear communication and honest progress reporting throughout the engagement.",
              },
              {
                title: "Collaboration",
                description:
                  "Your team is involved at every stage, ensuring alignment and knowledge transfer.",
              },
              {
                title: "Quality First",
                description:
                  "We never compromise on engineering standards, security, or documentation.",
              },
              {
                title: "Accountability",
                description:
                  "We take ownership of outcomes and stand behind our work.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-enterprise text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Every successful project starts with a conversation. Schedule a
            consultation to discuss your organization&apos;s needs and explore
            how we can help.
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

export default Process;
