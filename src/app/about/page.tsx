import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="dark" />
      <AboutContent />
      <Footer />
    </main>
  );
}
