import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RateService } from "@/components/RateService";

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50/30 to-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Rate Our <span className="text-brand-accent">Service</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your feedback helps us improve our care. We value your experience and appreciate you taking the time to share it.
            </p>
          </div>
          <RateService />
        </div>
      </section>
      <Footer />
    </main>
  );
}
