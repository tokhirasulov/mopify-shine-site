import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold gradient-text">Mopify</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground/80 hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
