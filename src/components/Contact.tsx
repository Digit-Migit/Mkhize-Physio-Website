"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Clinic Visit",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        toast.success("Enquiry sent successfully!");
      } else {
        const error = await response.json();
        throw new Error(error.error || "Failed to send enquiry");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormState("idle");
      toast.error("Failed to send enquiry. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center space-y-6 py-8"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <CheckCircle2 size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-dark">Enquiry Received</h3>
          <p className="text-gray-500 mt-2">
            Thank you for reaching out. A physiotherapist will contact you shortly to discuss your needs.
          </p>
        </div>
        <button
          onClick={() => {
            setFormState("idle");
            setFormData({ name: "", phone: "", email: "", service: "Clinic Visit", message: "" });
          }}
          className="text-brand-accent font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all"
            placeholder="012 345 6789"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Service Required</label>
        <select 
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all appearance-none cursor-pointer"
        >
          <option>Clinic Visit</option>
          <option>Home Visit (Bed/Wheelchair bound)</option>
          <option>Sports Injury Rehab</option>
          <option>Post-Operative Rehab</option>
          <option>Hydrotherapy</option>
          <option>Other / General Consultation</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Pain Area / Condition</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all min-h-[120px] resize-none"
          placeholder="Please describe your symptoms or reason for visit..."
        />
      </div>

      <button
        disabled={formState === "submitting"}
        type="submit"
        className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl shadow-brand-primary/20 group"
      >
        {formState === "submitting" ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Submit Enquiry
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
