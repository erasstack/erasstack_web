import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Building,
  CheckCircle,
  Code2,
  RefreshCcw,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "enterprise",
    icon: Code2,
    title: "Enterprise Software Engineering",
    subtitle: "Custom solutions built for scale and reliability",
    description:
      "We design and develop custom software systems that address complex business requirements. Our engineering practices ensure that solutions are robust, maintainable, and capable of evolving with your organization.",
    capabilities: [
      "Custom application development",
      "API design and implementation",
      "Database architecture and optimization",
      "Microservices and distributed systems",
      "Performance engineering and testing",
      "Code quality and security audits",
    ],
    outcomes: [
      "Reduced operational complexity",
      "Improved system reliability",
      "Lower long-term maintenance costs",
      "Scalable foundation for growth",
    ],
  },
  {
    id: "transformation",
    icon: Workflow,
    title: "Digital Transformation & Strategy",
    subtitle: "Strategic technology roadmaps aligned with business goals",
    description:
      "We help organizations develop and execute technology strategies that support their business objectives. Our approach balances innovation with risk management, ensuring sustainable digital evolution.",
    capabilities: [
      "Technology assessment and roadmapping",
      "Process analysis and optimization",
      "Change management planning",
      "Vendor evaluation and selection",
      "Implementation oversight and governance",
      "Organizational capability development",
    ],
    outcomes: [
      "Clear technology direction",
      "Reduced implementation risk",
      "Improved operational efficiency",
      "Better resource allocation",
    ],
  },
  {
    id: "government",
    icon: Building,
    title: "Government & NGO Systems",
    subtitle: "Compliance-ready solutions for institutional requirements",
    description:
      "We understand the unique requirements of public sector and non-profit organizations. Our solutions meet stringent compliance standards while delivering the functionality needed to serve constituents effectively.",
    capabilities: [
      "Regulatory compliance architecture",
      "Secure data handling systems",
      "Public-facing service portals",
      "Internal workflow automation",
      "Reporting and audit systems",
      "Accessibility compliance (WCAG)",
    ],
    outcomes: [
      "Regulatory compliance assurance",
      "Enhanced public trust",
      "Improved service delivery",
      "Transparent accountability",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "Intelligent & AI-Driven Solutions",
    subtitle: "Practical AI applications that solve real problems",
    description:
      "We apply artificial intelligence and machine learning where they create genuine business value. Our approach focuses on practical outcomes rather than technology for its own sake.",
    capabilities: [
      "AI opportunity assessment",
      "Predictive analytics implementation",
      "Natural language processing systems",
      "Intelligent automation workflows",
      "Data pipeline development",
      "Model training and optimization",
    ],
    outcomes: [
      "Data-driven decision making",
      "Automated routine tasks",
      "Predictive operational insights",
      "Enhanced customer experiences",
    ],
  },
  {
    id: "modernization",
    icon: RefreshCcw,
    title: "System Modernization & Integration",
    subtitle: "Transform legacy systems into modern platforms",
    description:
      "We help organizations modernize aging systems without disrupting critical operations. Our integration expertise ensures that new and existing systems work together seamlessly.",
    capabilities: [
      "Legacy system assessment",
      "Incremental modernization planning",
      "Cloud migration strategy",
      "API-first integration architecture",
      "Data migration and transformation",
      "Continuous modernization programs",
    ],
    outcomes: [
      "Extended system lifespan",
      "Reduced technical debt",
      "Improved integration capabilities",
      "Modern user experiences",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Enterprise-Grade Solutions for Complex Challenges
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We deliver comprehensive technology services designed to meet the
              demanding requirements of businesses, government agencies, and
              non-profit organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-enterprise space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-gold font-medium mb-6">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Key Capabilities
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes Card */}
              <div
                className={`bg-cream rounded-2xl p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h3 className="font-heading font-semibold text-foreground mb-6">
                  Business Outcomes
                </h3>
                <div className="space-y-4">
                  {service.outcomes.map((outcome, i) => (
                    <div key={outcome} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-heading font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-foreground font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to discuss your requirements?
                  </p>
                  <Button variant="enterprise" asChild>
                    <Link href="/consultation">
                      Schedule Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-enterprise text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Every organization&apos;s needs are unique. Schedule a consultation
            to discuss your specific challenges and we&apos;ll help identify the
            right approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link href="/consultation">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="enterprise-outline"
              size="xl"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/process">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
