"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Activity, 
  UserRound, 
  Wind, 
  Award, 
  Stethoscope, 
  ShieldCheck,
  Droplets
} from "lucide-react";

const services = [
  {
    title: "Hydrotherapy",
    description: "Water-based rehabilitation for gentle, effective recovery. Ideal for joint pain, arthritis, and post-surgery mobility.",
    icon: Droplets,
    accent: "bg-cyan-50 text-cyan-600",
    featured: true,
  },
  {
    title: "Home Visits",
    description: "Specialised care for bedbound and wheelchair-bound patients, meeting you where you are.",
    icon: Home,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    title: "Back & Neck Pain",
    description: "Expert diagnosis and treatment for acute and chronic spinal conditions.",
    icon: Activity,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Sports Injuries",
    description: "Facilitating rapid recovery and performance optimization for athletes.",
    icon: Award,
    accent: "bg-orange-50 text-orange-600",
  },
  {
    title: "Respiratory Rehab",
    description: "Specialised chest physiotherapy and breathing exercises for lung health.",
    icon: Wind,
    accent: "bg-sky-50 text-sky-600",
  },
  {
    title: "Post-Operative Rehab",
    description: "Structured recovery plans to restore mobility after surgical procedures.",
    icon: Stethoscope,
    accent: "bg-purple-50 text-purple-600",
  },
  {
    title: "Neurological Conditions",
    description: "Comprehensive therapy for conditions affecting the nervous system.",
    icon: ShieldCheck,
    accent: "bg-rose-50 text-rose-600",
  },
  {
    title: "Men's & Women's Health",
    description: "Sensitive and professional care for gender-specific health conditions.",
    icon: UserRound,
    accent: "bg-amber-50 text-amber-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
              Comprehensive <span className="text-brand-accent">Physiotherapy</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer a wide range of specialised services designed to facilitate your body&apos;s natural capacity to heal itself through evidence-based practice.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-brand-soft/10 border border-brand-soft/20 px-6 py-4 rounded-2xl">
              <span className="text-brand-dark font-bold text-sm uppercase tracking-widest">
                Our Core Focus: Patient Empowerment
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[32px] border border-gray-100 bg-white hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.accent}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
