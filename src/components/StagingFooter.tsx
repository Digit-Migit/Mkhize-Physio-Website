"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, ArrowUp, ExternalLink } from "lucide-react";
import Link from "next/link";

export function StagingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-1">
                <Link href="/staging" className="inline-block mb-4">
                  <img
                    src="/logo-icon.webp"
                    alt="Mkhize NP Physiotherapy"
                    className="h-16 brightness-0 invert"
                  />
                </Link>
                <div className="text-brand-accent font-bold mb-8 italic tracking-wide">
                  &quot;Sinawe ekululameni&quot;
                </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Meeting patients where they&apos;re at to provide quality Physiotherapy treatment leaving them empowered and advocates of their own body.
              </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
<ul className="space-y-4 text-white/60 text-sm">
                  <li><Link href="/staging/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
                  <li><Link href="/staging/about" className="hover:text-brand-accent transition-colors">About Practice</Link></li>
                  <li><a href="https://mygc.co.za/external/diary/7b4a8157-38e1-48e3-afbf-58adc6ca0883" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Book Appointment</a></li>
                  <li><Link href="/staging/register" className="hover:text-brand-accent transition-colors">Patient Registration</Link></li>
                  <li><Link href="/staging/faq" className="hover:text-brand-accent transition-colors">FAQs</Link></li>
                  <li><Link href="/staging/feedback" className="hover:text-brand-accent transition-colors">Rate Our Service</Link></li>
                </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Home Visits</li>
              <li>Back & Neck Pain</li>
              <li>Sports Injuries</li>
              <li>Respiratory Rehab</li>
              <li>Post-Operative Rehab</li>
            </ul>
          </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Professional Info</h4>
              <div className="space-y-4 text-white/60 text-xs">
                <p>Practice No.: 1292161</p>
                <p>Reg. No.: 2025/060194/21</p>
                <p>HPCSA Reg.: PT0134406</p>
                <div className="pt-4">
                  <p className="font-bold text-white mb-2">Pietermaritzburg</p>
                  <p>191 Boshoff Street, 3201</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Hammarsdale</p>
                  <p>6 Sibisi Road, 3700</p>
                </div>
                <div className="pt-6">
                  <p className="font-bold text-white mb-3">Save Our Details</p>
                  <div className="bg-white p-2 rounded-lg inline-block">
                    <img 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c66bd4b6-0e8d-4b28-9d04-cba086a3818b/Mkhize_PMB-1769358768097.png?width=8000&height=8000&resize=contain"
                      alt="Scan to save contact details"
                      className="w-24 h-24"
                    />
                  </div>
                  <p className="text-white/40 text-[10px] mt-2">Scan to add vCard</p>
                </div>
              </div>
            </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 justify-center text-white/40 text-xs mb-6">
            <Link href="/staging/disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link>
            <span>|</span>
            <Link href="/staging/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/staging/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/40 text-[10px]">
                © {new Date().getFullYear()} Mkhize NP Physiotherapy Inc. All rights reserved.
              </p>
              <p className="text-white/30 text-[10px] mt-1">
                Medical Website caringly crafted by:{" "}
                <a 
                  href="https://mymedmarketing.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-accent/70 hover:text-brand-accent transition-colors inline-flex items-center gap-1"
                >
                  myMed Marketing
                  <ExternalLink size={10} />
                </a>
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold"
            >
              BACK TO TOP
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
