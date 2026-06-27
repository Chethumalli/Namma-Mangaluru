"use client";

import { motion } from "framer-motion";

export default function PlacesHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/panambur.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sky-400 uppercase tracking-[5px]">
            Explore
          </p>

          <h1 className="mt-5 text-6xl font-black text-white">
            Tourist Places
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Beaches, temples, parks, historical places,
            museums and hidden gems across Mangaluru.
          </p>
        </motion.div>

      </div>
    </section>
  );
}