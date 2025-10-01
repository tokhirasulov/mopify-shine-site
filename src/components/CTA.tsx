import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 sm:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready for a <span className="gradient-text">Spotless Space?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free, no-obligation quote today and discover why thousands trust Mopify 
              for all their cleaning needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Available 24/7 • Same-day service available • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
