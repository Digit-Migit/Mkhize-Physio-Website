"use client";

import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageSquare, ExternalLink } from "lucide-react";

export function ContactContent() {
  const locations = [
    {
      title: "Hammersdale Clinic",
      address: "6 Sibisi road Mpumalanga Township Hammersdale 3700",
      description: "Orange building behind Hengisizwe Clinic",
      hours: "07:30 - 16:30"
    },
    {
      title: "Pietermaritzburg Clinic",
      address: "191 Boshoff Street, Pietermaritzburg, 3201",
      description: "Inside Boshoff Primary Health Clinic",
      hours: "07:30 - 16:30"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-brand-soft/5">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand-dark mb-6"
          >
            Get in <span className="text-brand-accent">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Whether you&apos;re looking for home visits or want to visit one of our locations, we&apos;re here to facilitate your recovery.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-brand-soft/5 rounded-3xl p-6"
                  >
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4">
                      <Phone size={24} />
                    </div>
                      <h3 className="font-bold text-brand-dark mb-2">Phone</h3>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+27640012097" className="text-gray-600 text-sm hover:text-brand-primary transition-colors">064 001 2097 (Reception)</a>
                        <a href="tel:+27635198271" className="text-gray-600 text-sm hover:text-brand-primary transition-colors">063 519 8271 (Direct)</a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-brand-soft/5 rounded-3xl p-6"
                    >
                      <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-4">
                        <Mail size={24} />
                      </div>
                      <h3 className="font-bold text-brand-dark mb-2">Email</h3>
                      <a href="mailto:enquiries@mkhizephysio.co.za" className="text-gray-600 text-sm break-all hover:text-brand-accent transition-colors">enquiries@mkhizephysio.co.za</a>
                    </motion.div>
                </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-brand-soft/5 rounded-3xl p-6 text-center"
                  >
                    <h3 className="font-bold text-brand-dark mb-3">Save Our Details</h3>
                    <p className="text-gray-600 text-sm mb-4">Scan the QR code to add our contact details to your phone</p>
                    <div className="bg-white p-3 rounded-xl inline-block shadow-sm">
                      <img 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c66bd4b6-0e8d-4b28-9d04-cba086a3818b/Mkhize_PMB-1769358768097.png?width=8000&height=8000&resize=contain"
                        alt="Scan to save contact details"
                        className="w-32 h-32"
                      />
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                      <MapPin className="text-brand-accent" size={20} />
                      Our Locations
                    </h2>
                  <div className="space-y-4">
                    {locations.map((loc, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="p-5 bg-brand-soft/5 rounded-2xl border border-brand-soft/20 group hover:border-brand-accent/30 transition-all"
                        >
                          <h3 className="font-bold text-brand-dark mb-2">{loc.title}</h3>
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 text-sm mb-1 hover:text-brand-accent transition-colors block flex items-center gap-1"
                          >
                            {loc.address}
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                          <p className="text-brand-primary text-xs font-medium mb-3">{loc.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock size={14} />
                            <span>{loc.hours}</span>
                          </div>
                        </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl shadow-brand-primary/5 border border-gray-100 p-6 md:p-10 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-6 text-brand-primary/5 pointer-events-none">
                   <MessageSquare size={100} />
                 </div>
                 <div className="relative z-10">
                   <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">Send us a message</h2>
                   <p className="text-gray-500 text-sm mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>
                   <Contact />
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
