import { Shield, Clock, Leaf, Award, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Your property is protected with comprehensive insurance coverage",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book services at times that work best for your schedule",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, green cleaning solutions for your family and pets",
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Consistently top-rated by our satisfied customers",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Background-checked staff with extensive training",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick turnaround for last-minute cleaning needs",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Mopify</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our professional, reliable, and eco-conscious cleaning services
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
