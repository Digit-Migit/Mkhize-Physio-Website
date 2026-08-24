import { StagingNavbar } from "@/components/StagingNavbar";
import { StagingFooter } from "@/components/StagingFooter";
import { ServicesContent } from "@/components/ServicesContent";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <StagingNavbar />
      <ServicesContent />
      <StagingFooter />
    </main>
  );
}
