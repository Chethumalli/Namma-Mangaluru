import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedPlaces from "@/components/home/FeaturedPlaces";
import Categories from "@/components/home/Categories";
import Gallery from "@/components/home/Gallery";
import AIPlanner from "@/components/home/AIPlanner";
import Experience from "@/components/home/Experience";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedPlaces />
      <AIPlanner />
      <Experience />
      <Categories />
      <Gallery />
    </main>
  );
}