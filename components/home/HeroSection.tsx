import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Zap, label: "Scalable Systems" },
  { icon: Building2, label: "Institutional Grade" },
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-cream to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23172554' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-enterprise relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-24">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by Leading Institutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
              Enterprise Software That{" "}
              <span className="text-primary">Delivers Results</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We design, build, and support enterprise-grade software systems for businesses, 
              government agencies, and NGOs. Our solutions are secure, scalable, and built 
              for long-term operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="enterprise" size="xl" asChild>
                <Link to="/consultation">
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="enterprise-outline" size="xl" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-gold/5 rounded-3xl" />
            <div className="relative bg-card rounded-2xl border border-border shadow-lg p-8">
              {/* Abstract representation of system architecture */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Enterprise Architecture</p>
                    <p className="text-sm text-muted-foreground">Scalable & Secure by Design</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 rounded-lg bg-secondary/50 border border-border" />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-cream border border-border" />
                  ))}
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary to-navy-light">
                  <span className="text-primary-foreground font-medium text-sm">System Integration Layer</span>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
