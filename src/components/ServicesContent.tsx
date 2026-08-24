"use client";

import { motion } from "framer-motion";
import { Services } from "@/components/Services";
import { Sparkles, Home } from "lucide-react";

export function ServicesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-soft/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <Sparkles size={14} />
            Specialised Care
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-brand-dark mb-6"
          >
            Our <span className="text-brand-accent">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            From specialised home visits for bedbound patients to advanced sports rehabilitation, we provide patient-specific treatments tailored to your unique body design.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <Services />

      {/* Hydrotherapy Section */}
      <section id="hydrotherapy" className="py-24 bg-brand-soft/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                Hydrotherapy
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">
                Water-based rehabilitation for <span className="text-brand-accent">gentle recovery</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hydrotherapy uses warm water to reduce joint loading while creating safe resistance for strengthening. This makes it ideal for early-stage rehabilitation, chronic pain conditions, and clients who find land-based exercise uncomfortable.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sessions focus on restoring mobility, improving balance, and building confidence in movement. We tailor exercises to your diagnosis and progress, ensuring a calm, supportive environment throughout your programme.
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Low-impact strengthening and mobility",
                  "Improved circulation and pain reduction",
                  "Support for arthritis and joint replacements",
                  "Safe rehabilitation after surgery or injury",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-[48px] border border-brand-soft/20 bg-white p-10 shadow-sm">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-dark">What to expect</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Personalised assessment",
                        description: "We review your history, goals, and pain triggers before entering the pool.",
                      },
                      {
                        title: "Guided water exercises",
                        description: "We focus on strength, range, and control with continuous clinical supervision.",
                      },
                      {
                        title: "Progress tracking",
                        description: "Your programme evolves as you gain confidence and function.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="rounded-3xl border border-brand-soft/20 bg-brand-soft/10 p-6">
                        <h4 className="text-lg font-semibold text-brand-dark mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Highlight: Home Visits */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-brand-accent/20 rounded-3xl flex items-center justify-center text-brand-accent mb-6">
                <Home size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Dedicated <span className="text-brand-accent">Home Visits</span> for Bedbound Patients
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We solely preserve our home visit services for patients who are bedbound or wheelchair-bound and cannot visit our rooms. We bring professional physiotherapy directly to your bedside.
              </p>
              <ul className="space-y-4">
                {[
                  "Specialised mobility facilitation",
                  "Bedside respiratory rehabilitation",
                  "Post-operative home recovery",
                  "Caregiver education and support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-white/5 rounded-[60px] border border-white/10 flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-brand-accent/20 tracking-tighter uppercase">Home<br/>Care</div>
                  <p className="text-white/40 uppercase tracking-[0.3em] text-sm">Priority Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
