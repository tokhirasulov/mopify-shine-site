import { Home, Building2, Sparkles, Droplets, Wind, Shirt } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Home,
      title: t('services.residential.title'),
      description: t('services.residential.description'),
      color: "text-primary",
    },
    {
      icon: Building2,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: t('services.deepCleaning.title'),
      description: t('services.deepCleaning.description'),
      color: "text-accent",
    },
    {
      icon: Droplets,
      title: t('services.carpet.title'),
      description: t('services.carpet.description'),
      color: "text-primary",
    },
    {
      icon: Wind,
      title: t('services.window.title'),
      description: t('services.window.description'),
      color: "text-secondary",
    },
    {
      icon: Shirt,
      title: t('services.moveCleaning.title'),
      description: t('services.moveCleaning.description'),
      color: "text-accent",
    },
  ];
  
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
