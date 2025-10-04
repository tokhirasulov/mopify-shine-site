import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 sm:p-16 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('cta.title')} <span className="gradient-text">{t('cta.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                {t('cta.getFreeQuote')}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5" />
                {t('cta.callNow')}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              {t('cta.availability')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
