"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/shared/Container";

const images = [
  {
    src: "/images/panambur.jpg",
    title: "Panambur Beach",
  },
  {
    src: "/images/tannirbhavi.jpg",
    title: "Tannirbhavi Beach",
  },
  {
    src: "/images/sultan-battery.jpg",
    title: "Sultan Battery",
  },
  {
    src: "/images/hero.jpg",
    title: "Mangaluru Skyline",
  },
  {
    src: "/images/panambur.jpg",
    title: "Golden Sunset",
  },
  {
    src: "/images/tannirbhavi.jpg",
    title: "Coastal View",
  },
];

export default function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="Gallery"
          title="Experience Mangaluru"
          subtitle="A glimpse into the beauty, culture, beaches, and unforgettable moments of Coastal Karnataka."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-80">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}