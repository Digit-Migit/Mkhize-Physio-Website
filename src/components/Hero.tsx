"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, CheckCircle2, Droplets, Waves } from "lucide-react";
import Link from "next/link";

const bodyParts = [
  { id: "head", name: "Neck & Head", zuluName: "Intamo Nekhanda", top: "8%", left: "50%", services: ["Cervicogenic Headaches", "Neck Pain", "Post-operative rehab"] },
  { id: "shoulder", name: "Shoulders", zuluName: "Amahlombe", top: "22%", left: "32%", services: ["Rotator Cuff Injuries", "Frozen Shoulder", "Sports injuries"] },
  { id: "respiratory", name: "Chest", zuluName: "Isifuba", top: "30%", left: "50%", services: ["Respiratory rehabilitation", "Chest Physio", "Hydrotherapy"] },
  { id: "back", name: "Back & Spine", zuluName: "Umhlane Nomhlandla", top: "42%", left: "50%", services: ["Lower Back Pain", "Sciatica", "Postural Correction", "Aquatic Therapy"] },
  { id: "joints", name: "Joints", zuluName: "Amalunga", top: "60%", left: "35%", services: ["Hip/Knee Pain", "Joint Replacement Rehab", "Arthritis Management", "Pool Exercises"] },
];

export function Hero() {
  const [selectedPart, setSelectedPart] = useState(bodyParts[3]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Water-inspired background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated water ripples */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 2.5, opacity: [0, 0.15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full border-2 border-cyan-300/40"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 2.5, opacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full border-2 border-brand-primary/30"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 2.5, opacity: [0, 0.1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full border-2 border-cyan-400/30"
        />

        {/* Fluid gradient blobs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/40 to-sky-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-brand-primary/20 to-cyan-200/30 rounded-full blur-3xl"
        />

        {/* Wave pattern at bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-white" preserveAspectRatio="none" viewBox="0 0 1440 120">
          <motion.path
            initial={{ d: "M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z",
                "M0,80 C360,40 720,100 1080,50 C1260,30 1380,60 1440,80 L1440,120 L0,120 Z",
                "M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            fill="currentColor"
            fillOpacity="0.8"
          />
        </svg>
      </div>

<div className="container mx-auto px-4 relative z-10">
          {/* Introduction Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-soft/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <Droplets size={14} />
              The Practice
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6"
            >
              Facilitating the body&apos;s innate capacity to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-brand-primary">heal itself.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
            >
              Mkhize NP Physiotherapy Inc. provides holistic treatment emphasizing education, ensuring patients are active participants in their journey toward self-reliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-brand-primary/10 text-brand-dark px-5 py-2.5 rounded-full text-sm font-bold border border-cyan-200/50"
            >
              Sinawe ekululameni • We are with you in recovery
            </motion.div>
          </div>

          {/* Anatomy Selector Header */}
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-brand-dark leading-tight mb-4"
            >
              Where Does It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-brand-primary">Hurt?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base text-gray-600 max-w-xl mx-auto"
            >
              Select an area to discover how our treatments can help.
            </motion.p>
          </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Interactive Silhouette - Now the hero element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center h-[450px] md:h-[550px] bg-white/70 backdrop-blur-sm rounded-[40px] shadow-2xl shadow-cyan-500/10 border border-white p-8 order-2 lg:order-1"
          >
            {/* Water ripple effect in background */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.05, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-cyan-200/30 to-transparent rounded-full"
              />
            </div>

            <div className="relative h-full aspect-[1/2]">
              {/* Human SVG Silhouette */}
              <svg viewBox="0 0 100 200" className="h-full w-full">
                <defs>
                  <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="50%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#7dd3fc" />
                  </linearGradient>
                </defs>
                <path 
                  d="M50,10 c-5,0 -10,5 -10,10 s5,10 10,10 s10,-5 10,-10 s-5,-10 -10,-10 M40,30 c-10,0 -20,10 -20,25 v40 c0,10 5,15 10,15 h5 v60 c0,10 5,15 10,15 h10 c5,0 10,-5 10,-15 v-60 h5 c5,0 10,-5 10,-15 v-40 c0,-15 -10,-25 -20,-25 h-10 Z" 
                  fill="url(#bodyGradient)"
                  className="drop-shadow-lg"
                />
              </svg>

              {/* Hotspots */}
              {bodyParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  style={{ top: part.top, left: part.left }}
                  className={`absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 flex items-center justify-center ${
                    selectedPart.id === part.id
                      ? "bg-gradient-to-br from-cyan-400 to-brand-primary scale-150 shadow-lg shadow-cyan-400/50"
                      : "bg-brand-primary/50 hover:bg-cyan-400 hover:scale-125"
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full bg-white ${selectedPart.id === part.id ? "animate-pulse" : ""}`} />
                  
                  {/* Water ripple effect on selected */}
                  {selectedPart.id === part.id && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-cyan-400"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-brand-primary"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-bold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
              <Waves size={14} />
              TAP TO SELECT AREA
            </div>
          </motion.div>

          {/* Info Panel */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-cyan-500/10 border border-cyan-100/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-2xl flex items-center justify-center text-cyan-600">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">
                      {selectedPart.name}
                    </h3>
                    <p className="text-sm text-cyan-600 font-medium">{selectedPart.zuluName}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Our approach to {selectedPart.name.toLowerCase()} focuses on restoring function through targeted treatment and hydrotherapy techniques.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedPart.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2 text-brand-dark">
                      <CheckCircle2 size={16} className="text-cyan-500 shrink-0" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                  <Link 
                    href={`/book?area=${encodeURIComponent(selectedPart.name)}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-brand-primary text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    Book a Consultation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

              </motion.div>
            </AnimatePresence>

            {/* Hydrotherapy highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-cyan-500 to-brand-primary p-6 rounded-[30px] text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <Droplets size={24} />
                <h4 className="font-bold text-lg">Hydrotherapy Specialists</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Water-based rehabilitation for gentle, effective recovery. Ideal for joint pain, post-surgery, and mobility restoration.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
