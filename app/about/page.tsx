import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Compass,
  Eye,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and honesty. Our clients trust us with critical systems, and we honor that trust through ethical conduct and clear communication.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of engineering practice. Quality is never compromised, and we continuously refine our methods to deliver superior outcomes.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We view every engagement as a long-term relationship. Our success is measured by our clients' success, and we invest in understanding their unique challenges.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatism",
    description:
      "We choose solutions that work, not what's trendy. Every technical decision is grounded in practical value and sustainable outcomes.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              About ErasStack
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Engineering Excellence for Enterprise Success
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ErasStack is a technology firm that combines deep software
              engineering expertise with business acumen to deliver systems that
              drive organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl border border-border p-10">
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver enterprise-grade software solutions that enable
                organizations to operate more effectively, make better
                decisions, and achieve their strategic objectives. We accomplish
                this through rigorous engineering practices, deep domain
                understanding, and unwavering commitment to our clients'
                success.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-10">
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted technology partner of choice for organizations
                that require systems of the highest quality and reliability. We
                envision a world where technology serves institutional needs
                with precision, security, and sustainability—enabling rather
                than complicating the work of those who depend on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-cream">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Hybrid Firm for Complex Challenges
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ErasStack operates at the intersection of software engineering
                  and business operations. We understand that technology is a
                  means to an end—a tool for achieving organizational
                  objectives, not an end in itself.
                </p>
                <p>
                  Our team brings experience from enterprise software
                  development, government systems, and institutional technology
                  environments. This background enables us to navigate the
                  unique requirements of organizations that cannot afford system
                  failures or security compromises.
                </p>
                <p>
                  We design, build, modernize, and support software systems that
                  are secure, scalable, and maintainable. Our approach
                  emphasizes long-term sustainability over short-term
                  convenience, ensuring that the systems we deliver continue to
                  provide value for years to come.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-10">
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
                <Compass className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Our Approach
              </h3>
              <ul className="space-y-4">
                {[
                  "Begin with business objectives, not technical preferences",
                  "Apply rigorous engineering practices consistently",
                  "Prioritize security and compliance from day one",
                  "Build for maintainability and long-term evolution",
                  "Communicate clearly and manage expectations honestly",
                  "Transfer knowledge to ensure client independence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-gold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Principles That Guide Our Work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These core values inform every decision we make, from how we
              approach technical challenges to how we engage with our clients
              and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-enterprise p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
            Let's Build Something Meaningful Together
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            We're selective about the projects we take on because we invest
            deeply in every engagement. If you're looking for a technology
            partner that shares your commitment to excellence, we should talk.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/consultation">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
