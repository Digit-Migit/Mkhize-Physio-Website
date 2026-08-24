"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ArrowRight, Home as HomeIcon, Activity, HeartPulse, Droplets, Waves, HelpCircle, ClipboardList, Star } from "lucide-react";
import Link from "next/link";

export function HomeContent() {
  return (
    <>
      <Hero />

      {/* Hydrotherapy Featured Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-sky-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                <Droplets size={14} />
                Signature Service
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                Healing Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-brand-primary">Water</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our hydrotherapy program harnesses the therapeutic power of water to provide gentle, low-impact rehabilitation. The buoyancy of water reduces stress on joints while allowing for effective strengthening and mobility work.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Joint Pain Relief",
                  "Post-Surgery Recovery", 
                  "Arthritis Management",
                  "Mobility Restoration"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-cyan-100"
                  >
                    <Waves className="text-cyan-500 shrink-0" size={18} />
                    <span className="text-brand-dark font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

                <Link 
                  href="/services#hydrotherapy" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-brand-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all group"
                >
                  Explore Hydrotherapy
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-sky-100 rounded-[60px] p-8 relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-8 border-4 border-cyan-300/50 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute inset-16 border-4 border-cyan-400/50 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute inset-24 border-4 border-cyan-500/50 rounded-full"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Droplets className="w-24 h-24 text-cyan-500 mx-auto mb-6" />
                    <div className="text-4xl font-black text-brand-dark mb-2">Amanzi</div>
                    <div className="text-cyan-600 font-medium">Water Therapy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Expertise</h2>
            <p className="text-gray-500">Specialised care tailored to your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Droplets, 
                title: "Hydrotherapy", 
                desc: "Water-based rehabilitation for gentle, effective recovery and mobility restoration.",
                gradient: "from-cyan-500 to-sky-500"
              },
              { 
                icon: HomeIcon, 
                title: "Home Visits", 
                desc: "Dedicated bedside care for bedbound and wheelchair-bound patients." 
              },
              { 
                icon: Activity, 
                title: "Rehabilitation", 
                desc: "Post-operative, respiratory, and neurological recovery facilitation." 
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[40px] border shadow-sm hover:shadow-xl transition-all group ${
                  service.gradient 
                    ? 'bg-gradient-to-br ' + service.gradient + ' text-white border-transparent' 
                    : 'bg-white border-brand-soft/20'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  service.gradient ? 'bg-white/20' : 'bg-brand-primary/5 text-brand-primary'
                }`}>
                  <service.icon size={28} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${service.gradient ? 'text-white' : 'text-brand-dark'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.gradient ? 'text-white/80' : 'text-gray-500'}`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary transition-all shadow-lg"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-brand-soft/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/register" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all h-full"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <ClipboardList size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Patient Registration</h3>
                <p className="text-gray-500 text-sm mb-4">Register online before your first visit to save time.</p>
                <span className="text-brand-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Register Now <ArrowRight size={16} />
                </span>
              </motion.div>
            </Link>

            <Link href="/faq" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-accent/20 transition-all h-full"
              >
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <HelpCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">FAQs</h3>
                <p className="text-gray-500 text-sm mb-4">Find answers to common questions about our services.</p>
                <span className="text-brand-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View FAQs <ArrowRight size={16} />
                </span>
              </motion.div>
            </Link>

            <Link href="/feedback" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-400/20 transition-all h-full"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Star size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Rate Our Service</h3>
                <p className="text-gray-500 text-sm mb-4">Share your experience to help us improve our care.</p>
                <span className="text-amber-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Give Feedback <ArrowRight size={16} />
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-brand-dark rounded-[60px] p-12 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
             </div>
             
             <HeartPulse className="text-cyan-400 mx-auto mb-8" size={64} />
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to start your recovery?</h2>
             <p className="text-white/70 text-lg mb-12">Book an assessment today and let&apos;s facilitate your body&apos;s natural healing.</p>
             
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://mygc.co.za/external/diary/7b4a8157-38e1-48e3-afbf-58adc6ca0883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-brand-dark px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:from-white hover:to-white transition-all"
                  >
                    Book Appointment
                  </a>
                <Link 
                  href="tel:0640012097" 
                  className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
                >
                  Call Us
                </Link>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
