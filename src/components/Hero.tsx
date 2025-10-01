import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <img 
          src={heroImage} 
          alt="Sparkling clean home interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Trusted by 500+ Happy Customers
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              The future of{" "}
              <span className="gradient-text">clean spaces</span>{" "}
              has arrived.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Experience spotless perfection with Mopify's professional cleaning services. 
              We combine cutting-edge techniques with eco-friendly products to deliver results 
              that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                See Our Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">Insured & Bonded</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Available Service</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 mt-8">
                <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 -mt-4">
                <div className="text-4xl font-bold text-accent mb-2">10k+</div>
                <div className="text-sm text-muted-foreground">Homes Cleaned</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2">2hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
