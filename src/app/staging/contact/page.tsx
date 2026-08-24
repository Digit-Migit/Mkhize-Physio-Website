import { StagingNavbar } from "@/components/StagingNavbar";
import { StagingFooter } from "@/components/StagingFooter";
import { ContactContent } from "@/components/ContactContent";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <StagingNavbar />
      <ContactContent />
      <StagingFooter />
    </main>
  );
}
