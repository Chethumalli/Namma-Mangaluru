"use client";

import { Mountain, Trees, Landmark, Waves, Grid2X2 } from "lucide-react";

const categories = [
  {
    name: "All",
    icon: Grid2X2,
  },
  {
    name: "Beach",
    icon: Waves,
  },
  {
    name: "Temple",
    icon: Landmark,
  },
  {
    name: "Nature",
    icon: Trees,
  },
  {
    name: "Heritage",
    icon: Mountain,
  },
];

export default function CategoryFilter() {
  return (
    <section className="bg-slate-950 pb-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">

        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition duration-300 hover:border-sky-500 hover:bg-sky-600"
          >
            <category.icon size={18} />
            {category.name}
          </button>
        ))}

      </div>
    </section>
  );
}