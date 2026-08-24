import { StagingNavbar } from "@/components/StagingNavbar";
import { StagingFooter } from "@/components/StagingFooter";
import { HomeContent } from "@/components/HomeContent";

export default function StagingHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <StagingNavbar />
      <HomeContent />
      <StagingFooter />
    </main>
  );
}
