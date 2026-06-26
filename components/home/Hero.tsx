"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

      {/* Decorative Blur */}
      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-24 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2 text-sky-300 backdrop-blur-md"
          >
            <Sparkles size={18} />
            Discover Coastal Karnataka
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl"
          >
            Explore
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Namma Mangaluru
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"
          >
            Discover beautiful beaches, delicious coastal cuisine, iconic
            temples, hidden gems, breathtaking sunsets, and unforgettable
            experiences — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700">
              Explore Places
            </button>

            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900">
              Plan My Trip
            </button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 text-slate-300"
          >
            <div className="flex items-center gap-2">
              <MapPin className="text-sky-400" size={18} />
              Coastal Karnataka
            </div>

            <div className="flex items-center gap-2">
              <Compass className="text-sky-400" size={18} />
              150+ Attractions
            </div>
          </motion.div>
        </div>

        {/* Right Card */}
       
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl lg:mt-0"
        >
          <h3 className="text-2xl font-bold text-white">
            Start Your Journey
          </h3>

          <p className="mt-3 text-slate-300">
            Find beaches, restaurants, hotels, and hidden gems in just a few
            clicks.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Search places..."
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300 outline-none"
            />

            <button className="w-full rounded-xl bg-sky-600 py-3 font-semibold text-white transition hover:bg-sky-700">
              Search
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}