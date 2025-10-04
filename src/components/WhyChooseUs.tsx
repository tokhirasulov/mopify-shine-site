import { Shield, Clock, Leaf, Award, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: Shield,
      title: t('whyUs.certified.title'),
      description: t('whyUs.certified.description'),
    },
    {
      icon: Clock,
      title: t('whyUs.pricing.title'),
      description: t('whyUs.pricing.description'),
    },
    {
      icon: Leaf,
      title: t('whyUs.eco.title'),
      description: t('whyUs.eco.description'),
    },
    {
      icon: Award,
      title: t('whyUs.satisfaction.title'),
      description: t('whyUs.satisfaction.description'),
    },
  ];
  
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl hover:bg-card/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
