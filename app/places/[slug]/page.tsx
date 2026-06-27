import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  Calendar,
  Camera,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlacePage({ params }: Props) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}

      <section className="relative h-[85vh] w-full overflow-hidden">
  <Image
  src="/images/panambur.jpg"
  alt={title}
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-black/20" />

  <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-8 pb-24">

    <Link
      href="/places"
      className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-5 py-3 backdrop-blur-xl transition hover:bg-sky-600"
    >
      <ArrowLeft size={18} />
      Back to Places
    </Link>

    <span className="mb-4 w-fit rounded-full bg-sky-500/20 px-4 py-2 text-sky-300 backdrop-blur-xl">
      Tourist Destination
    </span>

    <h1 className="max-w-4xl text-6xl font-black leading-tight md:text-8xl">
      {title}
    </h1>

    <div className="mt-8 flex flex-wrap gap-8 text-lg text-slate-200">
      <div className="flex items-center gap-2">
        <MapPin size={20} />
        Mangaluru
      </div>

      <div className="flex items-center gap-2">
        <Star size={20} className="text-yellow-400" />
        4.8 Rating
      </div>

      <div className="flex items-center gap-2">
        <Clock size={20} />
        Open All Day
      </div>
    </div>

  </div>
</section>

      {/* Content */}

      <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-6 pb-24">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 backdrop-blur-2xl shadow-2xl">

        <div className="grid items-start gap-10 lg:grid-cols-[2fr_1fr]">

          {/* Left */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">
              About {title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">

              {title} is one of the most popular tourist attractions in
              Mangaluru. Visitors come here to enjoy breathtaking views,
              photography, peaceful surroundings and unforgettable
              experiences throughout the year.

            </p>

            <h2 className="mt-16 text-4xl font-black">
              Highlights
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

                <div className="rounded-[32px] border border-white/10 bg-slate-900/95 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">                🌅 Beautiful Sunrise & Sunset
              </div>

                <div className="rounded-[32px] border border-white/10 bg-slate-900/95 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">                📸 Photography Spot
              </div>

              <div className="rounded-[32px] border border-white/10 bg-slate-900/95 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                🚗 Easy Accessibility
              </div>

              <div className="rounded-[32px] border border-white/10 bg-slate-900/95 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                🍴 Nearby Restaurants
              </div>

            </div>

          </div>

          {/* Sidebar */}

          <div className="sticky top-28 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl backdrop-blur-xl">
            <h3 className="text-3xl font-bold">
              Visitor Info
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">

                <Calendar className="text-sky-400" />

                <div>
                  <p className="text-slate-400">
                    Best Time
                  </p>

                  <h4>October - February</h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <Clock className="text-sky-400" />

                <div>
                  <p className="text-slate-400">
                    Opening Hours
                  </p>

                  <h4>24 Hours</h4>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <Camera className="text-sky-400" />

                <div>
                  <p className="text-slate-400">
                    Entry Fee
                  </p>

                  <h4>Free</h4>
                </div>

              </div>

            </div>

            <button className="mt-12 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 py-4 font-semibold transition duration-300 hover:scale-105">
              Plan Trip Here
            </button>

          </div>

        </div>
        </div>
      </section>
    </main>
  );
}