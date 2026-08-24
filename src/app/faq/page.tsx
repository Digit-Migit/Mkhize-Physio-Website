import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-8 bg-brand-soft/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our physiotherapy services, appointments, and what to expect.
          </p>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
}
