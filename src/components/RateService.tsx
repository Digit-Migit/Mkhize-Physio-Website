"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export function RateService() {
  const handleClick = () => {
    window.open("https://g.page/r/CYYeWa1i-s_LEBM/review", "_blank");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 text-center"
      >
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-6">
          <Star size={32} fill="currentColor" />
        </div>
        <h3 className="text-2xl font-bold text-brand-dark mb-3">Rate Your Experience</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Your feedback helps us serve you better. Share your experience on Google to help others find quality care.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all"
        >
          Leave a Review on Google
          <ExternalLink size={18} />
        </button>
      </motion.div>
    </div>
  );
}
