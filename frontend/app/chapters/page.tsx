import Navbar from "@/components/layout/Navbar";
import { ChaptersSection } from "@/components/landing/ChaptersSection";

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-24">
        <ChaptersSection />
      </div>
    </main>
  );
}