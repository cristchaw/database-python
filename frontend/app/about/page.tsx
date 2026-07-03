import Navbar from "@/components/layout/Navbar";
import { AboutSection } from "@/components/landing/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
    </main>
  );
}