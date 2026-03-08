import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-enterprise">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-8">
            <Calendar className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Begin with a Consultation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Discuss Your Project?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our team to explore how ErasStack 
            can address your organization's technology needs. We're here to listen, 
            understand, and provide actionable recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="xl" 
              asChild
              className="shadow-lg"
            >
              <Link to="/consultation">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="enterprise-outline" 
              size="xl" 
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            No obligation. Confidential discussion of your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
