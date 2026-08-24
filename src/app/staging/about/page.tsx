import { StagingNavbar } from "@/components/StagingNavbar";
import { StagingFooter } from "@/components/StagingFooter";
import { AboutContent } from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <StagingNavbar variant="dark" />
      <AboutContent />
      <StagingFooter />
    </main>
  );
}
