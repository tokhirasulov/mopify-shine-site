import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
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
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              {t('hero.title')}{" "}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                {t('hero.getStarted')}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                {t('hero.learnMore')}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">{t('hero.benefit1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">{t('hero.benefit2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm">{t('hero.benefit3')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center">
                <div className="text-4xl font-bold text-primary mb-2">{t('hero.stat1Value')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat1Title')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center">
                <div className="text-4xl font-bold text-secondary mb-2">{t('hero.stat2Value')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat2Title')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center">
                <div className="text-4xl font-bold text-accent mb-2">{t('hero.stat3Value')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat3Title')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center">
                <div className="text-4xl font-bold text-primary mb-2">{t('hero.stat4Value')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat4Title')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
