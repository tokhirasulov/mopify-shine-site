import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      content: t('testimonials.client1.content'),
      rating: 5,
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      content: t('testimonials.client2.content'),
      rating: 5,
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      content: t('testimonials.client3.content'),
      rating: 5,
    },
  ];
  
  return (
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
