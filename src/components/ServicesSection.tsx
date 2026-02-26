import { motion } from "framer-motion";
import corporateImg from "@/assets/event-corporate.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import concertImg from "@/assets/event-concert.jpg";

const services = [
  {
    title: "Corporate Events",
    image: corporateImg,
    items: ["Conferences", "Product Launches", "Award Ceremonies"],
  },
  {
    title: "Weddings",
    image: weddingImg,
    items: ["Full Wedding Planning", "Destination Weddings", "Wedding Decor & Coordination"],
  },
  {
    title: "Concert Productions",
    image: concertImg,
    items: ["Stage & Sound Setup", "Artist Management", "Lighting & Visual Effects"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4 text-center"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Our <span className="text-gold-gradient italic">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg border border-gold bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-sm font-body tracking-widest uppercase text-primary hover:text-gold-light transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
