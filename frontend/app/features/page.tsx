import Navbar from "@/components/layout/Navbar";
import { FeaturesSection } from "@/components/landing/FeaturesSection";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-24">
        <FeaturesSection />
      </div>
    </main>
  );
}