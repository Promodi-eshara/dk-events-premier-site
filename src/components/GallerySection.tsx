import { motion } from "framer-motion";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import past1 from "@/assets/past-event-1.jpg";
import past2 from "@/assets/past-event-2.jpg";
import past3 from "@/assets/past-event-3.jpg";
import past4 from "@/assets/past-event-4.jpg";
import past5 from "@/assets/past-event-5.jpg";
import past6 from "@/assets/past-event-6.jpg";
import past7 from "@/assets/past-event-7.jpg";
import past8 from "@/assets/past-event-8.jpg";
import past9 from "@/assets/past-event-9.jpg";
import past10 from "@/assets/past-event-10.jpg";
import upcomingEvent from "@/assets/upcoming-event.png";

const allImages = [
  { src: gallery1, category: "all" },
  { src: gallery2, category: "all" },
  { src: gallery3, category: "all" },
  { src: gallery4, category: "all" },
  { src: gallery5, category: "all" },
  { src: gallery6, category: "all" },
];

const pastImages = [
  { src: past1, category: "past" },
  { src: past2, category: "past" },
  { src: past3, category: "past" },
  { src: past4, category: "past" },
  { src: past5, category: "past" },
  { src: past6, category: "past" },
  { src: past7, category: "past" },
  { src: past8, category: "past" },
  { src: past9, category: "past" },
  { src: past10, category: "past" },
];

const upcomingImages = [
  { src: upcomingEvent, category: "upcoming" },
];

const tabs = ["All", "Past Events", "Upcoming Events"] as const;

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const images = activeTab === "All" ? allImages : activeTab === "Past Events" ? pastImages : upcomingImages;

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
          className="font-display text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          Our <span className="text-gold-gradient italic">Gallery</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gold-gradient text-primary-foreground"
                  : "border border-gold text-foreground hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={activeTab === "Upcoming Events" ? "flex justify-center" : "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"}
        >
          {images.map((img, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`break-inside-avoid group relative overflow-hidden rounded-lg ${activeTab === "Upcoming Events" ? "max-w-4xl w-full" : ""}`}
            >
              <img
                src={img.src}
                alt="DK Events gallery"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
