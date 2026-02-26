import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Palette, CalendarCheck, Handshake, Clock } from "lucide-react";

const reasons = [
  { icon: Users, title: "Professional Team", desc: "Experienced event management professionals" },
  { icon: Palette, title: "Creative Concepts", desc: "Customized & unique event designs" },
  { icon: CalendarCheck, title: "End-to-End Planning", desc: "Complete planning & execution" },
  { icon: Handshake, title: "Vendor Network", desc: "Strong relationships with top vendors" },
  { icon: Clock, title: "On-Time Delivery", desc: "Budget-friendly & punctual execution" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-dark-gradient">
      <div className="max-w-6xl mx-auto">
        {/* Our Story */}
        <div id="our-story" ref={ref} className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl font-bold mb-8"
          >
            Crafting <span className="text-gold-gradient italic">Extraordinary</span> Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            At DK Events, we are passionate event planners who transform visions into extraordinary experiences. 
            Specializing in luxury weddings and corporate events, our dedicated team brings creativity, precision, 
            and elegance to every celebration. From intimate gatherings to grand galas, we craft moments that 
            leave lasting impressions.
          </motion.p>
        </div>

        {/* Why Choose Us */}
        <div id="why-choose-us">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4 text-center"
          >
            Why Choose Us
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl font-bold mb-16 text-center"
          >
            Excellence in Every Detail
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-base font-semibold mb-2">{reason.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
