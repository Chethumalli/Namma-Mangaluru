"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="flex flex-col gap-4 lg:flex-row">

            <div className="relative flex-1">

              <Search
                className="absolute left-5 top-4 text-slate-400"
                size={20}
              />

              <input
                placeholder="Search places..."
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-4 pl-12 pr-4 text-white outline-none"
              />

            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-8 text-white hover:bg-sky-700">

              <SlidersHorizontal size={18}/>

              Filters

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}