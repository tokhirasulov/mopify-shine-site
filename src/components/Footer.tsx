import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text">Mopify</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional cleaning services that transform your space. 
              Trusted by thousands for residential and commercial cleaning needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@mopify.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Clean Street, Sparkle City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Carpet Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
