import { Home, Building2, Sparkles, Droplets, Wind, Shirt } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning services tailored to your needs, from regular maintenance to deep cleaning.",
    color: "text-primary",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning that keeps your business looking its best.",
    color: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning for those hard-to-reach areas, perfect for seasonal refreshes or move-ins.",
    color: "text-accent",
  },
  {
    icon: Droplets,
    title: "Carpet & Upholstery",
    description: "Advanced steam cleaning to remove stains and refresh your carpets and furniture.",
    color: "text-primary",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out, using professional equipment and techniques.",
    color: "text-secondary",
  },
  {
    icon: Shirt,
    title: "Laundry Services",
    description: "Wash, dry, and fold services to take the burden off your busy schedule.",
    color: "text-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential to commercial spaces, we've got all your cleaning needs covered
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
