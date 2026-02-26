import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 + i * 0.03 },
  }),
};

const HeroSection = () => {
  const line1 = "Creating";
  const line2 = "Unforgettable";
  const line3 = "Experiences";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury event venue" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-primary mb-6"
        >
          Premium Event Planning
        </motion.p>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="inline-block">
            {line1.split("").map((char, i) => (
              <motion.span key={`l1-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>{" "}
          <br />
          <span className="text-gold-gradient italic inline-block">
            {line2.split("").map((char, i) => (
              <motion.span key={`l2-${i}`} custom={i + line1.length} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="inline-block">
            {line3.split("").map((char, i) => (
              <motion.span key={`l3-${i}`} custom={i + line1.length + line2.length} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-serif text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Premium Event Planning & Production Services
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-3 bg-gold-gradient text-primary-foreground font-body text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity">
            Plan Your Event
          </a>
          <a href="#services" className="px-8 py-3 border border-gold text-foreground font-body text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-colors">
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body tracking-widest uppercase text-muted-foreground">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
