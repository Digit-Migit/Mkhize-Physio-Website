import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <FileText size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Terms and Conditions</h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

              <p className="lead">
                Welcome to the Mkhize NP Physiotherapy Inc. website. By accessing and using this website, you accept and agree to be bound by the terms and conditions set out below.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, you agree to these Terms and Conditions, our Privacy Policy, and our Medical Disclaimer. If you do not agree with any part of these terms, please do not use our website or services.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Services</h2>
              <p>
                Mkhize NP Physiotherapy Inc. provides physiotherapy services at our clinic locations and through home visits. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Musculoskeletal physiotherapy</li>
                <li>Sports injury rehabilitation</li>
                <li>Post-operative rehabilitation</li>
                <li>Neurological rehabilitation</li>
                <li>Respiratory physiotherapy</li>
                <li>Hydrotherapy</li>
                <li>Home visits for immobile patients</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Appointments and Cancellations</h2>
              <p>
                <strong>Booking:</strong> Appointments can be made via phone, email, or through our website contact form.
              </p>
              <p className="mt-4">
                <strong>Cancellation Policy:</strong> We require at least 24 hours&apos; notice for appointment cancellations. Late cancellations or missed appointments (no-shows) may be subject to a cancellation fee equivalent to 50% of the consultation fee.
              </p>
              <p className="mt-4">
                <strong>Late Arrivals:</strong> If you arrive late for your appointment, your treatment time may be shortened to accommodate other patients. The full consultation fee will still apply.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Payment Terms</h2>
              <p>
                <strong>Private Patients:</strong> Payment is due at the time of service unless prior arrangements have been made. We accept cash, debit/credit cards, and EFT payments.
              </p>
              <p className="mt-4">
                <strong>Medical Aid Patients:</strong> We submit claims directly to most medical aid schemes. You are responsible for any co-payments, shortfalls, or amounts not covered by your medical aid. Please ensure your medical aid details are up to date.
              </p>
              <p className="mt-4">
                <strong>Home Visit Fees:</strong> Additional travel fees may apply for home visits depending on location. These will be communicated before booking confirmation.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Patient Responsibilities</h2>
              <p>As a patient, you agree to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide accurate and complete information about your health and medical history</li>
                <li>Inform us of any changes to your condition or medications</li>
                <li>Follow the treatment plan and home exercise programme as prescribed</li>
                <li>Attend scheduled appointments or provide adequate notice of cancellation</li>
                <li>Inform us if you are experiencing any adverse effects from treatment</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Informed Consent</h2>
              <p>
                Before commencing treatment, you will be asked to provide informed consent. This means you understand the nature of the proposed treatment, potential benefits and risks, and alternative treatment options. You have the right to refuse treatment at any time.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Mkhize NP Physiotherapy Inc. or its content suppliers and is protected by South African and international copyright laws.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">8. Website Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the website</li>
                <li>Transmit any viruses or malicious code</li>
                <li>Copy, reproduce, or distribute any content without permission</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Mkhize NP Physiotherapy Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction of the courts of KwaZulu-Natal.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">12. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> enquiries@mkhizephysio.co.za</li>
                <li><strong>Phone:</strong> 064 001 2097</li>
                <li><strong>Address:</strong> 191 Boshoff Street, Pietermaritzburg, 3201</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
