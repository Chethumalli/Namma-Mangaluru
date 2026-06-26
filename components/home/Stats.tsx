"use client";

import CountUp from "react-countup";
import { MapPinned, UtensilsCrossed, Hotel, Camera } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: MapPinned,
    value: 150,
    suffix: "+",
    title: "Tourist Places",
  },
  {
    icon: UtensilsCrossed,
    value: 300,
    suffix: "+",
    title: "Restaurants",
  },
  {
    icon: Hotel,
    value: 120,
    suffix: "+",
    title: "Hotels",
  },
  {
    icon: Camera,
    value: 50,
    suffix: "+",
    title: "Hidden Gems",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#082F49] to-[#0F172A] py-24">
      {/* Premium Blue Glow */}
<div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
<div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                <item.icon className="text-sky-600" size={30} />
              </div>

              <h2 className="text-5xl font-black text-slate-900">
                <CountUp
                  end={item.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h2>

              <p className="mt-3 text-slate-600">{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}