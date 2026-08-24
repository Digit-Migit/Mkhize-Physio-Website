"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Calendar, 
  MapPin, 
  Activity, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Clock, 
  Home, 
  Building2,
  Phone,
  Mail,
  AlertCircle
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

type Step = "concern" | "details" | "patient" | "summary" | "confirm";

const areas = [
  { name: "Back & Spine", zulu: "Umhlane Nomhlandla" },
  { name: "Neck & Head", zulu: "Intamo Nekhanda" },
  { name: "Shoulders", zulu: "Amahlombe" },
  { name: "Joints", zulu: "Amalunga" },
  { name: "Respiratory", zulu: "Isifuba" },
  { name: "General Rehab", zulu: "Ukuvuselelwa Okujwayelekile" },
];

export function BookingFlow() {
  const searchParams = useSearchParams();
  const initialPart = searchParams.get("area") || "";
  
  const [step, setStep] = useState<Step>("concern");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    area: initialPart,
    visitType: "clinic" as "clinic" | "home",
    location: "pmb" as "pmb" | "hammersdale",
    preferredDate: "",
    preferredTime: "morning" as "morning" | "afternoon",
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  });

  const steps: Step[] = ["concern", "details", "patient", "summary", "confirm"];
  const currentStepIndex = steps.indexOf(step);

  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      if (date.getDay() === 0) {
        date.setDate(date.getDate() + i + 1);
      }
      days.push({
        full: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-GB', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-GB', { month: 'short' })
      });
    }
    return days;
  };

  const nextDays = getNextDays();

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1]);
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep("confirm");
        toast.success("Booking request sent!");
      } else {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit booking");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === "confirm") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Request Sent!</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
          Your booking request for <span className="font-bold text-brand-primary">{formData.area}</span> has been received. 
          A team member will call you at <span className="font-bold text-brand-primary">{formData.phone}</span> to confirm the exact time.
        </p>
        <div className="bg-brand-soft/10 rounded-3xl p-8 max-w-md mx-auto text-left space-y-4 border border-brand-primary/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Preferred Date</p>
              <p className="text-brand-dark font-bold">{formData.preferredDate} ({formData.preferredTime})</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-accent shadow-sm">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
              <p className="text-brand-dark font-bold">
                {formData.visitType === "home" ? "Home Visit" : `Clinic: ${formData.location === "pmb" ? "Pietermaritzburg" : "Hammersdale"}`}
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => window.location.href = "/staging"}
          className="mt-12 px-10 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20"
        >
          Return Home
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 px-4">
        <div className="flex justify-between mb-6 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          {steps.filter(s => s !== "confirm").map((s, i) => (
            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                currentStepIndex >= i 
                  ? "border-brand-primary bg-brand-primary text-white" 
                  : "border-gray-100 bg-white text-gray-300"
              }`}>
                {currentStepIndex > i ? <CheckCircle2 size={18} /> : <span className="text-sm font-bold">{i + 1}</span>}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${
                currentStepIndex >= i ? "text-brand-primary" : "text-gray-300"
              }`}>
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-[40px] shadow-2xl shadow-brand-primary/10 border border-gray-100 p-8 md:p-12 overflow-hidden relative"
        >
          {step === "concern" && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand-primary">
                  <Activity size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark">Area of Concern</h2>
                  <p className="text-gray-500">What can we help you rehabilitate today?</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {areas.map((area) => (
                  <button
                    key={area.name}
                    onClick={() => setFormData({ ...formData, area: area.name })}
                    className={`p-6 rounded-[32px] border-2 transition-all text-left group relative overflow-hidden ${
                      formData.area === area.name 
                        ? "border-brand-primary bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                        : "border-gray-50 bg-gray-50 hover:border-brand-soft hover:bg-white text-brand-dark"
                    }`}
                  >
                    <div className="relative z-10">
                      <p className="font-black text-sm uppercase tracking-tight mb-1">{area.name}</p>
                      <p className={`text-[10px] font-bold uppercase tracking-widest opacity-60`}>{area.zulu}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <label className="text-sm font-black text-brand-dark uppercase tracking-widest flex items-center gap-2">
                  Additional Notes
                  <span className="text-[10px] text-gray-400 font-normal normal-case">(Optional)</span>
                </label>
                <textarea 
                  className="w-full bg-gray-50 border-2 border-transparent rounded-3xl p-6 focus:border-brand-accent focus:bg-white outline-none min-h-[120px] resize-none transition-all text-brand-dark"
                  placeholder="Tell us a bit more about what you're experiencing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark">Appointment Details</h2>
                  <p className="text-gray-500">Where and when would you like to see us?</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em]">1. Visit Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFormData({ ...formData, visitType: "clinic" })}
                      className={`p-6 rounded-[32px] border-2 flex flex-col items-center gap-3 transition-all ${
                        formData.visitType === "clinic" ? "border-brand-primary bg-brand-soft/10 text-brand-primary" : "border-gray-50 bg-gray-50 text-gray-400"
                      }`}
                    >
                      <Building2 size={24} />
                      <span className="text-xs font-bold uppercase tracking-widest">At Clinic</span>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, visitType: "home" })}
                      className={`p-6 rounded-[32px] border-2 flex flex-col items-center gap-3 transition-all ${
                        formData.visitType === "home" ? "border-brand-primary bg-brand-soft/10 text-brand-primary" : "border-gray-50 bg-gray-50 text-gray-400"
                      }`}
                    >
                      <Home size={24} />
                      <span className="text-xs font-bold uppercase tracking-widest">Home Visit</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em]">2. {formData.visitType === 'home' ? 'Service Region' : 'Location'}</label>
                  <div className="grid grid-cols-1 gap-3">
                    {["pmb", "hammersdale"].map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setFormData({ ...formData, location: loc as any })}
                        className={`p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all ${
                          formData.location === loc ? "border-brand-accent bg-brand-accent/5 text-brand-dark" : "border-gray-50 bg-gray-50 text-gray-500"
                        }`}
                      >
                        <span className="font-bold">{loc === "pmb" ? "Pietermaritzburg" : "Hammersdale"}</span>
                        {formData.location === loc && <CheckCircle2 size={18} className="text-brand-accent" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em]">3. Preferred Date</label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                  {nextDays.map((day) => (
                    <button
                      key={day.full}
                      onClick={() => setFormData({ ...formData, preferredDate: day.full })}
                      className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${
                        formData.preferredDate === day.full 
                          ? "border-brand-primary bg-brand-primary text-white shadow-lg" 
                          : "border-gray-50 bg-gray-50 hover:bg-white"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase opacity-60 mb-1">{day.day}</span>
                      <span className="text-lg font-black">{day.date}</span>
                      <span className="text-[10px] font-bold uppercase opacity-60 mt-1">{day.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em]">4. Time Preference</label>
                <div className="flex gap-4">
                  {["Morning", "Afternoon"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setFormData({ ...formData, preferredTime: t.toLowerCase() as any })}
                      className={`flex-1 p-5 rounded-2xl border-2 flex items-center justify-center gap-3 font-bold transition-all ${
                        formData.preferredTime === t.toLowerCase() ? "border-brand-primary bg-brand-soft/10 text-brand-primary" : "border-gray-50 bg-gray-50 text-gray-400"
                      }`}
                    >
                      <Clock size={18} />
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === "patient" && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand-primary">
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark">Patient Details</h2>
                  <p className="text-gray-500">How can we reach you to confirm?</p>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sipho Kumalo"
                      className="w-full bg-gray-50 border-2 border-transparent rounded-3xl pl-16 pr-8 py-5 focus:border-brand-accent focus:bg-white outline-none transition-all font-bold"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="tel"
                        required
                        placeholder="012 345 6789"
                        className="w-full bg-gray-50 border-2 border-transparent rounded-3xl pl-16 pr-8 py-5 focus:border-brand-accent focus:bg-white outline-none transition-all font-bold"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-1">Email (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="email"
                        placeholder="sipho@example.com"
                        className="w-full bg-gray-50 border-2 border-transparent rounded-3xl pl-16 pr-8 py-5 focus:border-brand-accent focus:bg-white outline-none transition-all font-bold"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-[32px] border border-amber-100 flex gap-4">
                <AlertCircle className="text-amber-600 shrink-0" size={24} />
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  <strong>Important:</strong> This is a request for a booking. A physiotherapist or administrator will contact you at the provided number to confirm your actual time slot and finalize the appointment details.
                </p>
              </div>
            </div>
          )}

          {step === "summary" && (
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand-primary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark">Review Request</h2>
                  <p className="text-gray-500">Please confirm your details before submitting.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 rounded-[40px] space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Service & Area</p>
                    <p className="text-brand-dark font-black text-xl">{formData.area}</p>
                    <p className="text-brand-primary font-bold text-sm">
                      {formData.visitType === 'home' ? '🏠 Home Visit' : '🏥 Clinic Appointment'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Preferred Schedule</p>
                    <p className="text-brand-dark font-bold">{new Date(formData.preferredDate).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-brand-accent font-black uppercase tracking-widest text-xs mt-1">{formData.preferredTime}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Location</p>
                    <p className="text-brand-dark font-bold">{formData.location === 'pmb' ? 'Pietermaritzburg' : 'Hammersdale'}</p>
                  </div>
                </div>

                <div className="bg-brand-dark p-8 rounded-[40px] text-white space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">Patient Contact</p>
                    <p className="font-black text-xl">{formData.fullName}</p>
                    <p className="text-cyan-400 font-bold">{formData.phone}</p>
                    {formData.email && <p className="text-white/60 text-sm">{formData.email}</p>}
                  </div>
                  {formData.notes && (
                    <div>
                      <p className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">Patient Notes</p>
                      <p className="text-white/70 text-sm italic">&ldquo;{formData.notes}&rdquo;</p>
                    </div>
                  )}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[10px] font-medium text-white/40 italic">We will call you shortly to confirm.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 pt-10 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={prevStep}
              className={`flex items-center gap-3 font-black text-xs uppercase tracking-widest text-gray-400 hover:text-brand-dark transition-all group ${
                currentStepIndex === 0 ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-brand-dark">
                <ChevronLeft size={20} />
              </div>
              Back
            </button>
            
            <button
              onClick={step === "summary" ? handleFinish : nextStep}
              disabled={
                isSubmitting ||
                (step === "concern" && !formData.area) ||
                (step === "details" && (!formData.preferredDate || !formData.visitType)) ||
                (step === "patient" && (!formData.fullName || !formData.phone))
              }
              className="bg-brand-primary text-white pl-8 pr-4 py-4 rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-brand-dark transition-all shadow-2xl shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Sending..." : step === "summary" ? "Submit Request" : "Next Step"}
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center group-hover:translate-x-1 transition-transform">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <ChevronRight size={20} />
                )}
              </div>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-gray-100" />
          Secure Booking Request
          <span className="w-12 h-px bg-gray-100" />
        </p>
      </div>
    </div>
  );
}
