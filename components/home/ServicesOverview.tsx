import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Building,
  Code2,
  RefreshCcw,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Enterprise Software Engineering",
    description:
      "Custom software solutions built with rigorous engineering practices. From architecture to deployment, we deliver systems that perform at scale.",
    href: "/services#enterprise",
  },
  {
    icon: Workflow,
    title: "Digital Transformation & Strategy",
    description:
      "Strategic technology roadmaps that align with business objectives. We help organizations modernize operations while managing risk.",
    href: "/services#transformation",
  },
  {
    icon: Building,
    title: "Government & NGO Systems",
    description:
      "Specialized solutions for public sector requirements. Compliance-ready systems that meet institutional standards and accountability requirements.",
    href: "/services#government",
  },
  {
    icon: Brain,
    title: "Intelligent & AI-Driven Solutions",
    description:
      "Practical applications of artificial intelligence that solve real business problems. Data-driven insights without the hype.",
    href: "/services#ai",
  },
  {
    icon: RefreshCcw,
    title: "System Modernization & Integration",
    description:
      "Transform legacy systems into modern, maintainable platforms. Seamless integration with existing infrastructure and workflows.",
    href: "/services#modernization",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Our Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Comprehensive Software Solutions for Complex Challenges
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine deep technical expertise with business understanding to
            deliver solutions that create lasting value for organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card-enterprise p-8 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="enterprise-outline" size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
