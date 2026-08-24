"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ClipboardList, Star } from "lucide-react";
import Link from "next/link";

interface StagingNavbarProps {
  variant?: "light" | "dark";
}

export function StagingNavbar({ variant = "light" }: StagingNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDarkHero = variant === "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navLinks = [
      { name: "Home", href: "/staging" },
      { name: "Services", href: "/staging/services" },
      { name: "About", href: "/staging/about" },
      { name: "FAQs", href: "/staging/faq" },
      { name: "Contact", href: "/staging/contact" },
    ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/staging" className="flex items-center gap-2 group">
            <img
              src="/logo-full.webp"
              alt="Mkhize NP Physiotherapy"
              className="h-12 md:h-16 transition-transform group-hover:scale-105"
            />
          </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  isDarkHero && !scrolled 
                    ? "text-white/90 hover:text-white" 
                    : "text-brand-dark hover:text-brand-accent"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isDarkHero && !scrolled ? "bg-white" : "bg-brand-accent"
                }`} />
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <Link
                href="/staging/register"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  isDarkHero && !scrolled
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-brand-soft/20 text-brand-primary hover:bg-brand-soft/40"
                }`}
              >
                <ClipboardList size={16} />
                Register
              </Link>
              <a
                href="https://mygc.co.za/external/diary/7b4a8157-38e1-48e3-afbf-58adc6ca0883"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg ${
                  isDarkHero && !scrolled
                    ? "bg-white text-brand-dark hover:bg-gray-100"
                    : "bg-brand-primary text-white hover:bg-brand-dark"
                }`}
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isDarkHero && !scrolled ? "text-white" : "text-brand-dark"}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brand-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/staging/register"
                className="flex items-center gap-2 text-lg font-medium text-brand-primary"
                onClick={() => setIsOpen(false)}
              >
                <ClipboardList size={18} />
                Patient Registration
              </Link>
              <Link
                href="/staging/feedback"
                className="flex items-center gap-2 text-lg font-medium text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                <Star size={18} />
                Rate Our Service
              </Link>
              <a
                href="https://mygc.co.za/external/diary/7b4a8157-38e1-48e3-afbf-58adc6ca0883"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white text-center py-3 rounded-xl font-bold block"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-accent" />
                  <span>064 001 2097</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-brand-accent" />
                  <span>enquiries@mkhizephysio.co.za</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
