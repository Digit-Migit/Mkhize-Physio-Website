import { StagingNavbar } from "@/components/StagingNavbar";
import { StagingFooter } from "@/components/StagingFooter";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      <StagingNavbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <AlertTriangle size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">Medical Disclaimer</h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">General Information Only</h2>
              <p>
                The information provided on this website by Mkhize NP Physiotherapy Inc. is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">Not Medical Advice</h2>
              <p>
                The content on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, physiotherapist, or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">No Doctor-Patient Relationship</h2>
              <p>
                The use of this website does not establish a doctor-patient or physiotherapist-patient relationship. A professional relationship is only established once you have been formally assessed and treated at one of our clinics or during a home visit.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">Emergency Situations</h2>
              <p>
                If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services (10177 in South Africa) immediately. Mkhize NP Physiotherapy Inc. does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">Treatment Outcomes</h2>
              <p>
                Results of physiotherapy treatment may vary from person to person. The outcomes of treatment depend on various factors including but not limited to the nature and severity of the condition, patient compliance with treatment plans and home exercise programmes, and individual health factors.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">Professional Standards</h2>
              <p>
                All physiotherapy services provided by Mkhize NP Physiotherapy Inc. are delivered by qualified physiotherapists registered with the Health Professions Council of South Africa (HPCSA). Our practice adheres to the ethical guidelines and professional standards set by the South African Society of Physiotherapy (SASP) and the HPCSA.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">External Links</h2>
              <p>
                This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>

              <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Medical Disclaimer, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Email: enquiries@mkhizephysio.co.za</li>
                <li>Phone: 064 001 2097</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <StagingFooter />
    </main>
  );
}
