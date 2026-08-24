"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const bodyParts = [
  { id: "head", name: "Neck & Head", zuluName: "Intamo Nekhanda", top: "5%", left: "48%", services: ["Cervicogenic Headaches", "Neck Pain", "Post-operative rehab"] },
  { id: "back", name: "Back & Spine", zuluName: "Umhlane Nomhlandla", top: "35%", left: "48%", services: ["Lower Back Pain", "Sciatica", "Postural Correction", "Neurological conditions"] },
  { id: "shoulder", name: "Shoulders", zuluName: "Amahlombe", top: "18%", left: "35%", services: ["Rotator Cuff Injuries", "Frozen Shoulder", "Sports injuries"] },
  { id: "joints", name: "Joints", zuluName: "Amalunga", top: "45%", left: "28%", services: ["Hip/Knee Pain", "Joint Replacement Rehab", "Arthritis Management"] },
  { id: "respiratory", name: "Respiratory", zuluName: "Isifuba", top: "25%", left: "48%", services: ["Respiratory rehabilitation", "Chest Physio"] },
];

export function AnatomySelector() {
  const [selectedPart, setSelectedPart] = useState(bodyParts[1]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Where do you <span className="text-brand-accent">feel pain?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select an area on the interactive model to see how our specialised physiotherapy treatments can facilitate your recovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Interactive Silhouette */}
          <div className="relative flex justify-center h-[500px] md:h-[600px] bg-white rounded-[40px] shadow-inner border border-gray-100 p-8">
            <div className="relative h-full aspect-[1/2]">
              {/* Simplified Human SVG Silhouette */}
              <svg viewBox="0 0 100 200" className="h-full w-full fill-gray-100">
                <path d="M50,10 c-5,0 -10,5 -10,10 s5,10 10,10 s10,-5 10,-10 s-5,-10 -10,-10 M40,30 c-10,0 -20,10 -20,25 v40 c0,10 5,15 10,15 h5 v60 c0,10 5,15 10,15 h10 c5,0 10,-5 10,-15 v-60 h5 c5,0 10,-5 10,-15 v-40 c0,-15 -10,-25 -20,-25 h-10 Z" />
              </svg>

              {/* Hotspots */}
              {bodyParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  style={{ top: part.top, left: part.left }}
                  className={`absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex items-center justify-center ${
                    selectedPart.id === part.id
                      ? "bg-brand-accent scale-150 shadow-lg shadow-brand-accent/50"
                      : "bg-brand-primary/40 hover:bg-brand-primary hover:scale-125"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full bg-white ${selectedPart.id === part.id ? "animate-pulse" : ""}`} />
                  
                  {/* Ripples */}
                  {selectedPart.id === part.id && (
                    <motion.div
                      layoutId="ripple"
                      className="absolute inset-0 rounded-full border-2 border-brand-accent"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
              <Info size={14} />
              TAP TO SELECT AREA
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand-accent">
                    <Activity size={32} />
                  </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark">
                        {selectedPart.name} <span className="text-brand-accent/60 font-medium ml-2 text-lg">| {selectedPart.zuluName}</span>
                      </h3>
                      <p className="text-sm text-gray-500">Targeted Rehabilitation</p>
                    </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our approach to {selectedPart.name.toLowerCase()} focuses on restoring function, reducing inflammation, and preventing future recurrence through patient-specific exercises.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPart.services.map((service, i) => (
                      <div key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                        <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <a
                      href="https://mygc.co.za/external/diary/7b4a8157-38e1-48e3-afbf-58adc6ca0883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group"
                    >
                      Book Appointment for {selectedPart.name}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

              </motion.div>
            </AnimatePresence>

            <div className="bg-brand-dark p-8 rounded-[40px] text-white">
              <h4 className="font-bold text-xl mb-2">Can&apos;t find your area?</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                We provide holistic treatment for the entire body. Book a general consultation and we&apos;ll design a patient-specific plan just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for Activity since it was used in Hero but imported here as well
import { Activity, ArrowRight } from "lucide-react";
