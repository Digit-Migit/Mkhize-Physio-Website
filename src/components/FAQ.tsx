"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer home visits?",
    answer: "Yes, we specialise in home visits for patients who are bed-bound, wheelchair-bound, or have difficulty travelling to our clinics. Our physiotherapist will bring all necessary equipment to your home to provide the same quality of care you would receive at our clinics."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your ID document, medical aid card (if applicable), any referral letters from your doctor, recent X-rays or scans related to your condition, and a list of current medications. Wear comfortable, loose-fitting clothing that allows access to the affected area."
  },
  {
    question: "What should I bring to a hydrotherapy session?",
    answer: "For hydrotherapy sessions at our Virgin Active location, please bring a swimming costume, a towel, and non-slip sandals or flip-flops for the poolside. We also recommend a change of dry clothing and a bottle of water to stay hydrated. A swimming cap is optional. Please avoid applying body lotions or oils before your session, and bring any mobility aids or glasses you normally use."
  },
  {
    question: "Do you accept medical aid?",
    answer: "Yes, we are registered with most major medical aids in South Africa. We can submit claims directly to your medical aid on your behalf. Please bring your medical aid card to your appointment. For patients without medical aid, we offer competitive private rates."
  },
  {
    question: "How long is a typical session?",
    answer: "Initial consultations typically last 45-60 minutes to allow for a thorough assessment and treatment plan. Follow-up sessions are usually 30-45 minutes depending on your condition and treatment needs."
  },
  {
    question: "What conditions do you treat?",
    answer: "We treat a wide range of conditions including back and neck pain, sports injuries, post-operative rehabilitation, stroke rehabilitation, respiratory conditions, arthritis, and general mobility issues. If you're unsure whether we can help with your condition, please contact us."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies depending on your condition, its severity, and how your body responds to treatment. During your initial assessment, we'll provide an estimated treatment plan. Some acute conditions may resolve in 2-4 sessions, while chronic conditions may require longer-term management."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We request at least 24 hours' notice for cancellations. Late cancellations or no-shows may be charged a cancellation fee. We understand emergencies happen - please contact us as soon as possible if you need to reschedule."
  },
  {
    question: "Do I need a referral from a doctor?",
    answer: "No, you don't need a referral to see a physiotherapist in South Africa. You can book directly with us. However, some medical aids may require a referral for claims, so it's worth checking with your medical aid first."
  },
  {
    question: "What is hydrotherapy and is it right for me?",
    answer: "Hydrotherapy is water-based rehabilitation that uses the buoyancy and resistance of water to aid recovery. It's particularly beneficial for arthritis, joint replacements, chronic pain, and patients who find land-based exercise difficult. The warm water helps relax muscles and reduce pain during treatment."
  },
  {
    question: "How do I prepare for a home visit?",
    answer: "Please ensure there's a clear, accessible space where treatment can take place - ideally a bed or treatment surface at a comfortable height. Have your medical documents and medication list ready. If you have mobility aids (walker, wheelchair), please have them nearby. Our physiotherapist will bring all treatment equipment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all ${
                    openIndex === index 
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                      : "bg-brand-soft/10 hover:bg-brand-soft/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`font-bold ${openIndex === index ? "text-white" : "text-brand-dark"}`}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180 text-white" : "text-brand-primary"
                      }`} 
                      size={20} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
