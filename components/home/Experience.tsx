"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Panambur Beach",
    subtitle: "Experience the Golden Coast",
    image: "/images/panambur.jpg",
    href: "/places",
  },
  {
    title: "Mangaluru Cuisine",
    subtitle: "Taste Authentic Coastal Food",
    image: "/images/food.jpg",
    href: "/food",
  },
  {
    title: "Heritage & Culture",
    subtitle: "Temples, Churches & History",
    image: "/images/kudroli.jpg",
    href: "/places",
  },
];

export default function Experience() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-sky-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Discover Namma Mangaluru
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            Beaches, food, culture and unforgettable memories await you.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[32px]"
            >
              <div className="relative h-[500px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                <div className="absolute left-12 top-1/2 max-w-xl -translate-y-1/2">

                  <p className="mb-4 text-sky-300 uppercase tracking-[4px]">
                    Featured Experience
                  </p>

                  <h3 className="text-5xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-xl text-slate-200">
                    {item.subtitle}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-sky-600 px-8 py-4 text-white transition hover:bg-sky-700"
                  >
                    Explore
                    <ArrowRight size={20} />
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}