"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AIPlanner() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />

      {/* Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
          >

            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-2 text-sky-300">
              🤖 AI Powered
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">

              Plan Your

              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">

                Perfect Journey

              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Tell us your budget, trip duration and interests.
              Our AI will generate the perfect itinerary for
              exploring Namma Mangaluru.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "🏖 Beaches",
                "🍛 Food",
                "🌅 Sunset",
                "🏛 Temples",
                "🛍 Shopping",
                "🌳 Nature"
              ].map((item)=>(

                <div
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-xl"
                >

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
            className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl"
          >

            <div className="space-y-5">

              <div className="relative">

                <MapPin
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <input
                  placeholder="Destination"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-4 pl-12 pr-4 text-white outline-none"
                />

              </div>

              <div className="relative">

                <CalendarDays
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <select className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-4 pl-12 text-white outline-none">

                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>3 Days</option>
                  <option>4 Days</option>
                  <option>5 Days</option>

                </select>

              </div>

              <div className="relative">

                <Wallet
                  className="absolute left-4 top-4 text-slate-400"
                  size={20}
                />

                <select className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-4 pl-12 text-white outline-none">

                  <option>₹2,000</option>
                  <option>₹5,000</option>
                  <option>₹10,000</option>
                  <option>₹20,000+</option>

                </select>

              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-sky-600 py-4 font-semibold text-white transition hover:bg-sky-700">

                <Sparkles size={18}/>

                Generate My Journey

                <ArrowRight size={18}/>

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}