"use client";

import { featuredPlaces } from "@/data/featuredPlaces";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedPlaces() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 py-24">
      {/* Background Glow */}
<div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px]" />
<div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="mb-16 text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-sky-400">
            Explore
          </span>

          <h2 className="mt-3 text-5xl font-black text-white">
            Featured Destinations
          </h2>

          <p className="mt-5 mx-auto max-w-2xl text-slate-300">
            Discover the most iconic attractions and hidden treasures that
            make Mangaluru one of India's most beautiful coastal cities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredPlaces.map((place,index)=>(

            <motion.div
            key={place.id}
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay:index*.15}}
            whileHover={{y:-10}}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold">
                  ⭐ {place.rating}
                </div>

              </div>

              <div className="p-7">

                <div className="flex items-center gap-2 text-sky-400">

                  <MapPin size={18}/>

                  <span>{place.location}</span>

                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {place.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {place.description}
                </p>

                <button className="mt-7 flex items-center gap-2 font-semibold text-sky-400 transition group-hover:translate-x-1">

                  Explore

                  <ArrowRight size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}