import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                <Shield size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Privacy Policy</h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

              <p className="lead">
                Mkhize NP Physiotherapy Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) and the Health Professions Act 56 of 1974.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Information:</strong> Name, surname, ID number, date of birth, gender</li>
                <li><strong>Contact Information:</strong> Phone number, email address, physical address</li>
                <li><strong>Medical Information:</strong> Medical history, current conditions, medications, allergies, treatment records</li>
                <li><strong>Medical Aid Information:</strong> Medical aid name, membership number, dependant details</li>
                <li><strong>Emergency Contact Information:</strong> Name, relationship, and contact details of your emergency contact</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide physiotherapy assessment, treatment, and care</li>
                <li>To communicate with you regarding appointments and treatment</li>
                <li>To submit claims to your medical aid on your behalf</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To contact your emergency contact in case of emergency</li>
                <li>To improve our services based on feedback</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Legal Basis for Processing</h2>
              <p>We process your personal information based on:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your consent provided during registration</li>
                <li>The necessity to perform our contractual obligations to you</li>
                <li>Compliance with legal obligations under healthcare legislation</li>
                <li>Our legitimate interest in providing quality healthcare services</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Sharing Your Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your medical aid scheme for claims processing</li>
                <li>Other healthcare providers involved in your care (with your consent)</li>
                <li>Regulatory bodies as required by law (e.g., HPCSA)</li>
                <li>Our professional advisors where necessary</li>
              </ul>
              <p className="mt-4">We will never sell your personal information to third parties.</p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes secure storage of physical records and encrypted electronic systems.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Data Retention</h2>
              <p>
                In accordance with the Health Professions Act and HPCSA guidelines, we retain patient records for a minimum of 5 years from the date of last consultation for adults, and until the age of 21 for minors. After this period, records may be securely destroyed.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">7. Your Rights Under POPIA</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access your personal information held by us</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Object to the processing of your information</li>
                <li>Lodge a complaint with the Information Regulator</li>
                <li>Withdraw your consent at any time</li>
              </ul>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">8. Cookies and Website Data</h2>
              <p>
                Our website may use cookies to improve your browsing experience. These cookies do not collect personal health information. You can disable cookies in your browser settings.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Information Officer:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> enquiries@mkhizephysio.co.za</li>
                <li><strong>Phone:</strong> 064 001 2097</li>
                <li><strong>Address:</strong> 191 Boshoff Street, Pietermaritzburg, 3201</li>
              </ul>

              <div className="bg-brand-soft/10 rounded-2xl p-6 mt-8">
                <p className="text-sm">
                  <strong>Information Regulator (South Africa)</strong><br />
                  If you are not satisfied with our response to your query or complaint, you may contact the Information Regulator:<br />
                  Website: www.justice.gov.za/inforeg<br />
                  Email: inforeg@justice.gov.za
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
