import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowLeft } from "lucide-react";

export default function PlaceDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative h-[70vh]">
        <Image
          src="/images/panambur.jpg"
          alt="Panambur Beach"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <Link
            href="/places"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <h1 className="mt-6 text-6xl font-black">
            Panambur Beach
          </h1>

          <div className="mt-4 flex gap-6 text-slate-300">

            <div className="flex items-center gap-2">
              <MapPin size={18}/>
              Mangaluru
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18}/>
              Open All Day
            </div>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">
              About
            </h2>

            <p className="mt-8 leading-8 text-slate-300">

              Panambur Beach is one of the most famous beaches in
              Karnataka. It is known for its golden sand,
              beautiful sunsets, water sports and beach festivals.

            </p>

            <h2 className="mt-16 text-4xl font-black">
              Highlights
            </h2>

            <ul className="mt-8 space-y-4 text-slate-300">

              <li>🏖 Beautiful Beach</li>
              <li>🌅 Sunset View</li>
              <li>🚤 Water Sports</li>
              <li>🍴 Street Food</li>

            </ul>

          </div>

          {/* Sidebar */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-bold">
              Travel Info
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-slate-400">
                  Entry Fee
                </p>

                <h4>Free</h4>
              </div>

              <div>
                <p className="text-slate-400">
                  Best Time
                </p>

                <h4>October - February</h4>
              </div>

              <div>
                <p className="text-slate-400">
                  Distance
                </p>

                <h4>10 km from City</h4>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}