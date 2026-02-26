import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Gala dinner", tall: true },
  { src: gallery2, alt: "Outdoor wedding" },
  { src: gallery3, alt: "Product launch", tall: true },
  { src: gallery4, alt: "Award ceremony" },
  { src: gallery5, alt: "Beach wedding", tall: true },
  { src: gallery6, alt: "Ballroom event" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-dark-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4 text-center"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Our <span className="text-gold-gradient italic">Gallery</span>
        </motion.h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                <span className="font-display text-lg text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
