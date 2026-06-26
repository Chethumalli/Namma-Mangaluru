"use client";

import { categories } from "@/data/categories";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="font-semibold uppercase tracking-[5px] text-sky-400">
            Explore
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Browse by Category
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Discover Mangaluru through beaches, culture, food, shopping,
            heritage, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-sky-400">
                  Explore
                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}