import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesContent } from "@/components/ServicesContent";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesContent />
      <Footer />
    </main>
  );
}
