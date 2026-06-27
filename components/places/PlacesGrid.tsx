"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

const places = [
  {
    id: 1,
    name: "Panambur Beach",
    slug: "panambur-beach",
    category: "Beach",
    image: "/images/panambur.jpg",
    rating: 4.8,
    location: "Mangaluru",
    description:
      "One of India's cleanest beaches famous for water sports, sunsets and beach festivals.",
  },
  {
    id: 2,
    name: "Tannirbhavi Beach",
    slug: "tannirbhavi-beach",
    category: "Beach",
    image: "/images/tannirbhavi.jpg",
    rating: 4.7,
    location: "Mangaluru",
    description:
      "A peaceful beach surrounded by lush greenery and perfect for evening walks.",
  },
  {
    id: 3,
    name: "Someshwara Beach",
    slug: "someshwara-beach",
    category: "Beach",
    image: "/images/someshwara.jpg",
    rating: 4.7,
    location: "Mangaluru",
    description:
      "Known for its rocky shoreline and breathtaking sunset views.",
  },
  {
    id: 4,
    name: "Kudroli Gokarnanath Temple",
    slug: "kudroli-temple",
    category: "Temple",
    image: "/images/kudroli.jpg",
    rating: 4.9,
    location: "Mangaluru",
    description:
      "A magnificent temple famous for its architecture and vibrant Dasara celebrations.",
  },
  {
    id: 5,
    name: "Pilikula Nisargadhama",
    slug: "pilikula",
    category: "Nature",
    image: "/images/pilikula.jpg",
    rating: 4.6,
    location: "Mangaluru",
    description:
      "A huge eco-tourism destination featuring a zoo, botanical garden and lake.",
  },
  {
    id: 6,
    name: "Sultan Battery",
    slug: "sultan-battery",
    category: "Heritage",
    image: "/images/sultan-battery.jpg",
    rating: 4.5,
    location: "Mangaluru",
    description:
      "Historic watchtower built during Tipu Sultan's reign overlooking the Gurupura River.",
  },
];

export default function PlacesGrid() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {places.map((place, index) => (

            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  {place.category}
                </div>

                <button className="absolute right-5 top-5 rounded-full bg-black/40 p-2 backdrop-blur-md transition hover:bg-red-500">
                  <Heart size={18} className="text-white" />
                </button>

              </div>

              <div className="p-7">

                <div className="flex items-center gap-2 text-sky-400">

                  <MapPin size={18} />

                  <span>{place.location}</span>

                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {place.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-yellow-400">

                  <Star size={18} fill="currentColor" />

                  <span className="font-semibold text-white">
                    {place.rating}
                  </span>

                </div>

                <p className="mt-5 leading-7 text-slate-300">
                  {place.description}
                </p>

                <Link
                  href={`/places/${place.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-400 transition hover:gap-3 hover:text-sky-300"
                >
                  View Details

                  <ArrowRight size={18} />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}