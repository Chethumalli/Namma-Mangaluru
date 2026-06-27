import Navbar from "@/components/layout/Navbar";
import PlacesHero from "@/components/places/PlacesHero";
import SearchBar from "@/components/places/SearchBar";
import PlacesGrid from "@/components/places/PlacesGrid";

export default function PlacesPage() {
  return (
    <main className="bg-slate-950 min-h-screen">

      <Navbar />

      <PlacesHero />

      <SearchBar />

      <PlacesGrid />

    </main>
  );
}