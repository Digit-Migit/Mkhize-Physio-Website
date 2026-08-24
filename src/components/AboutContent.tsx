"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartPulse, UserCheck, GraduationCap, Award } from "lucide-react";

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Empowering Your <span className="text-brand-accent">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Dedicated to providing holistic physiotherapy treatment that emphasizes education, self-reliance, and active participation in recovery.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-brand-soft/10 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]"
              >
                <Sparkles size={14} />
                Our Core Philosophy
              </motion.div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center leading-tight"
            >
              &quot;The body has the capacity to heal itself as long as it&apos;s facilitated adequately.&quot;
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                      <HeartPulse size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark">Our Mission | <span className="text-brand-accent">Inhloso Yethu</span></h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Meeting patients where they&apos;re at to provide quality Physiotherapy treatment, leaving them empowered and advocates of their own body.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                      <UserCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark">Our Vision | <span className="text-brand-accent">Umbono Wethu</span></h3>
                  </div>
                <p className="text-gray-600 leading-relaxed">
                  Providing holistic treatment emphasizing education to ensure patients are active participants in their journey toward self-reliance and better outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story / Background */}
      <section className="py-24 bg-brand-soft/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-brand-primary/10 rounded-[60px] relative overflow-hidden border border-brand-primary/20">
                <div className="absolute inset-0 flex items-center justify-center text-brand-primary/20">
                   <GraduationCap size={200} />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs">
                 <p className="text-sm italic text-gray-600 mb-2">&quot;As long as one has a body, a physio can do something to facilitate wellbeing.&quot;</p>
                 <p className="text-brand-dark font-bold">— Nozinhle Mkhize</p>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-brand-dark"
              >
                Our Story & Expertise
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Founded in 2019, Mkhize NP Physiotherapy Inc. began with a core focus on reaching bedbound and wheelchair-bound patients who couldn&apos;t access traditional therapy rooms.
              </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed italic border-l-4 border-brand-accent pl-6 py-2 bg-brand-soft/5 rounded-r-2xl"
                >
                  Our practice is deeply rooted in the Zulu philosophy of care and community, which is why meeting patients in their own homes—their sanctuary—remains at the heart of everything we do.
                </motion.p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-brand-accent mb-2"><Award size={24} /></div>
                  <div className="font-bold text-brand-dark">Pr No. 1292161</div>
                  <div className="text-xs text-gray-500">Registered Practice</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-brand-primary mb-2"><GraduationCap size={24} /></div>
                  <div className="font-bold text-brand-dark">PT0134406</div>
                  <div className="text-xs text-gray-500">Certified Specialists</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
