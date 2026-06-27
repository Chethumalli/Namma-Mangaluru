import Navbar from "@/components/layout/Navbar";
import PlacesHero from "@/components/places/PlacesHero";
import SearchBar from "@/components/places/SearchBar";
import CategoryFilter from "@/components/places/CategoryFilter";
import PlacesGrid from "@/components/places/PlacesGrid";

export default function PlacesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <PlacesHero />

      <SearchBar />

      <CategoryFilter />

      <PlacesGrid />
    </main>
  );
}