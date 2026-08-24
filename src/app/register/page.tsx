import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PatientRegistration } from "@/components/PatientRegistration";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-soft/5 to-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Patient <span className="text-brand-accent">Registration</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your registration before your first visit to save time. Your information is protected under POPIA.
            </p>
          </div>
          <PatientRegistration />
        </div>
      </section>
      <Footer />
    </main>
  );
}
