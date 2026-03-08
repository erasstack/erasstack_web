import { CheckCircle, Shield, Target, Users } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We start with your business objectives, not technology preferences. Every solution is designed to deliver measurable outcomes.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Security is foundational, not an afterthought. Our systems meet the stringent requirements of government and institutional clients.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We build relationships, not just software. Our commitment extends beyond delivery to ongoing support and evolution.",
  },
];

const capabilities = [
  "Rigorous software engineering practices",
  "Compliance-ready architectures",
  "Scalable and maintainable systems",
  "Transparent project management",
  "Knowledge transfer and documentation",
  "Post-deployment support and maintenance",
];

export function WhyErasStack() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-enterprise">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Why ErasStack
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              A Partner You Can Trust for Critical Systems
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ErasStack combines deep software engineering expertise with a
              thorough understanding of business operations. We deliver systems
              that work reliably today and adapt to tomorrow's requirements.
            </p>

            <div className="space-y-6 mb-8">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg p-8 lg:p-10">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-heading font-bold text-primary">
                  15+
                </div>
                <p className="text-sm text-muted-foreground">
                  Years of combined experience
                  <br />
                  in enterprise software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
