"use client";

import { Mail, Phone, MapPin, Globe, Construction } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] via-[#004080] to-[#0066a6] font-sans">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(64,169,223,0.15)_0%,transparent_50%)]" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(139,197,217,0.1)_0%,transparent_50%)]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/Logos-01-resized-1768461259755.webp?width=8000&height=8000&resize=contain"
            alt="Mkhize NP Physiotherapy Inc."
            className="h-24 md:h-32 w-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-4xl w-full border border-white/20 shadow-2xl"
        >
          <div className="text-center mb-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <Construction className="w-16 h-16 text-[#40a9df] mx-auto" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Website Under Construction
            </h1>
            <p className="text-[#8bc5d9] text-lg md:text-xl">
              We&apos;re building something great. Check back soon!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-[#40a9df] font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Pietermaritzburg
              </h3>
              <p className="text-white/90 text-sm mb-3">
                191 Boshoff Street, Boshoff Primary Health Clinic, Pietermaritzburg, 3201
              </p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4 text-[#40a9df]" />
                <span>064 519 67 10 | 033 108 53 75</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-[#40a9df] font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Hammarsdale
              </h3>
              <p className="text-white/90 text-sm mb-3">
                6 Sibisi Road (Fakazamed), Mpumalanga Township, Hammarsdale, 3700
              </p>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4 text-[#40a9df]" />
                <span>061 584 07 16 | 031 055 49 58</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/90"
          >
            <a
              href="mailto:zinhle@mkhizephysio.co.za"
              className="flex items-center gap-2 hover:text-[#40a9df] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#40a9df]" />
              <span className="text-sm">zinhle@mkhizephysio.co.za</span>
            </a>
            <a
              href="https://www.mkhizephysio.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#40a9df] transition-colors"
            >
              <Globe className="w-5 h-5 text-[#40a9df]" />
              <span className="text-sm">www.mkhizephysio.co.za</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-white/50 text-xs text-center"
        >
          Practice No.: 1292161 | Reg. No.: 2025/060194/21
        </motion.p>
      </main>
    </div>
  );
}
