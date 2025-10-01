import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Mopify transformed my home! The team was professional, thorough, and used eco-friendly products. I couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Our office has never looked better. The cleaning crew is reliable, efficient, and always goes above and beyond. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    content: "Managing multiple properties is easier with Mopify. Their consistency and attention to detail make them stand out from other services.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
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
