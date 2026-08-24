"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, User, Phone, MapPin, Heart, AlertCircle } from "lucide-react";
import { toast } from "sonner";

type FormStep = 1 | 2 | 3;

export function PatientRegistration() {
  const [step, setStep] = useState<FormStep>(1);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    altPhone: "",
    email: "",
    streetAddress: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: "",
    medicalAidName: "",
    medicalAidNumber: "",
    principalMember: "",
    dependantCode: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    currentCondition: "",
    painLevel: "",
    previousPhysio: "",
    surgeries: "",
    medications: "",
    allergies: "",
    chronicConditions: "",
    referredBy: "",
    referringDoctorName: "",
    referringDoctorPrNumber: "",
    referringDoctorPhone: "",
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        toast.success("Registration submitted successfully!");
      } else {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit registration");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setFormState("idle");
      toast.error("Failed to submit registration. Please try again later.");
    }
  };

  const provinces = [
    "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", 
    "Limpopo", "Mpumalanga", "Northern Cape", "North West", "Western Cape"
  ];

  if (formState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-16"
      >
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Registration Complete</h2>
        <p className="text-gray-600 mb-8">
          Thank you for registering with Mkhize NP Physiotherapy. We have received your information and will contact you shortly to confirm your first appointment.
        </p>
        <button
          onClick={() => { 
            setFormState("idle"); 
            setStep(1); 
            setFormData({
              firstName: "", lastName: "", idNumber: "", dateOfBirth: "", gender: "",
              phone: "", altPhone: "", email: "", streetAddress: "", suburb: "",
              city: "", province: "", postalCode: "", medicalAidName: "", medicalAidNumber: "",
              principalMember: "", dependantCode: "", emergencyName: "", emergencyRelationship: "",
              emergencyPhone: "", currentCondition: "", painLevel: "", previousPhysio: "",
              surgeries: "", medications: "", allergies: "", chronicConditions: "",
              referredBy: "", referringDoctorName: "", referringDoctorPrNumber: "",
              referringDoctorPhone: "", consent: false
            });
          }}
          className="text-brand-primary font-bold hover:underline"
        >
          Submit another registration
        </button>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
              step >= s ? "bg-brand-primary text-white" : "bg-gray-200 text-gray-500"
            }`}>
              {s}
            </div>
            {s < 3 && (
              <div className={`hidden sm:block w-24 md:w-32 h-1 mx-2 rounded ${
                step > s ? "bg-brand-primary" : "bg-gray-200"
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8 text-xs sm:text-sm">
        <span className={step === 1 ? "font-bold text-brand-primary" : "text-gray-500"}>Personal Details</span>
        <span className={step === 2 ? "font-bold text-brand-primary" : "text-gray-500"}>Contact & Medical Aid</span>
        <span className={step === 3 ? "font-bold text-brand-primary" : "text-gray-500"}>Medical History</span>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Personal Information</h3>
                <p className="text-gray-500 text-sm">Your basic details</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>SA ID Number *</label>
                <input 
                  type="text" 
                  name="idNumber" 
                  value={formData.idNumber} 
                  onChange={handleChange} 
                  required 
                  maxLength={13}
                  pattern="[0-9]{13}"
                  placeholder="13-digit ID number"
                  className={inputClass} 
                />
              </div>
              <div>
                <label className={labelClass}>Date of Birth *</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className={inputClass}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button type="button" onClick={() => setStep(2)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all">
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Contact & Medical Aid</h3>
                <p className="text-gray-500 text-sm">How we can reach you</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. 082 123 4567"
                  className={inputClass} 
                />
              </div>
              <div>
                <label className={labelClass}>Alternative Phone</label>
                <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} placeholder="Optional" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>

            <div className="flex items-center gap-3 mt-8 mb-4">
              <div className="w-10 h-10 bg-brand-soft/20 rounded-xl flex items-center justify-center text-brand-primary">
                <MapPin size={20} />
              </div>
              <h4 className="font-bold text-brand-dark">Physical Address</h4>
            </div>

            <div>
              <label className={labelClass}>Street Address *</label>
              <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required className={inputClass} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Suburb *</label>
                <input type="text" name="suburb" value={formData.suburb} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City/Town *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Province *</label>
                <select name="province" value={formData.province} onChange={handleChange} required className={inputClass}>
                  <option value="">Select province</option>
                  {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Postal Code *</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required maxLength={4} className={inputClass} />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <Heart size={20} />
              </div>
              <h4 className="font-bold text-brand-dark">Medical Aid (Optional)</h4>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Medical Aid Name</label>
                <input type="text" name="medicalAidName" value={formData.medicalAidName} onChange={handleChange} placeholder="e.g. Discovery Health" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Membership Number</label>
                <input type="text" name="medicalAidNumber" value={formData.medicalAidNumber} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Principal Member Name</label>
                <input type="text" name="principalMember" value={formData.principalMember} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Dependant Code</label>
                <input type="text" name="dependantCode" value={formData.dependantCode} onChange={handleChange} placeholder="e.g. 00, 01, 02" className={inputClass} />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                <AlertCircle size={20} />
              </div>
              <h4 className="font-bold text-brand-dark">Emergency Contact *</h4>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Relationship *</label>
                <input type="text" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} required placeholder="e.g. Spouse, Parent" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone *</label>
                <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} required className={inputClass} />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(1)} className="text-brand-primary font-bold hover:underline">
                Back
              </button>
              <button type="button" onClick={() => setStep(3)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all">
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                <ClipboardList size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">Medical History</h3>
                <p className="text-gray-500 text-sm">Help us understand your condition</p>
              </div>
            </div>

            <div>
              <label className={labelClass}>What brings you to physiotherapy? *</label>
              <textarea 
                name="currentCondition" 
                value={formData.currentCondition} 
                onChange={handleChange} 
                required 
                rows={3}
                placeholder="Describe your current condition or symptoms..."
                className={inputClass + " resize-none"} 
              />
            </div>

            <div>
              <label className={labelClass}>Pain Level (1-10)</label>
              <select name="painLevel" value={formData.painLevel} onChange={handleChange} className={inputClass}>
                <option value="">Select pain level</option>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n.toString()}>{n} - {n <= 3 ? "Mild" : n <= 6 ? "Moderate" : "Severe"}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Have you had physiotherapy before?</label>
              <textarea 
                name="previousPhysio" 
                value={formData.previousPhysio} 
                onChange={handleChange} 
                rows={2}
                placeholder="If yes, when and for what condition?"
                className={inputClass + " resize-none"} 
              />
            </div>

            <div>
              <label className={labelClass}>Previous Surgeries</label>
              <textarea 
                name="surgeries" 
                value={formData.surgeries} 
                onChange={handleChange} 
                rows={2}
                placeholder="List any surgeries and dates (if applicable)"
                className={inputClass + " resize-none"} 
              />
            </div>

            <div>
              <label className={labelClass}>Current Medications</label>
              <textarea 
                name="medications" 
                value={formData.medications} 
                onChange={handleChange} 
                rows={2}
                placeholder="List all current medications"
                className={inputClass + " resize-none"} 
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Known Allergies</label>
                <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="e.g. Penicillin, Latex" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Chronic Conditions</label>
                <input type="text" name="chronicConditions" value={formData.chronicConditions} onChange={handleChange} placeholder="e.g. Diabetes, Hypertension" className={inputClass} />
              </div>
            </div>

            <div>
                <label className={labelClass}>How did you hear about us?</label>
                <select name="referredBy" value={formData.referredBy} onChange={handleChange} className={inputClass}>
                  <option value="">Select an option</option>
                  <option value="doctor">Doctor Referral</option>
                  <option value="friend">Friend/Family</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="clinic">Clinic Signage</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {formData.referredBy === "doctor" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-blue-50 rounded-2xl p-6 space-y-4"
                >
                  <h4 className="font-bold text-brand-dark text-sm">Referring Doctor Details</h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>Doctor&apos;s Name</label>
                      <input 
                        type="text" 
                        name="referringDoctorName" 
                        value={formData.referringDoctorName} 
                        onChange={handleChange} 
                        placeholder="Dr. Full Name"
                        className={inputClass} 
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Practice Number (PR No.)</label>
                      <input 
                        type="text" 
                        name="referringDoctorPrNumber" 
                        value={formData.referringDoctorPrNumber} 
                        onChange={handleChange} 
                        placeholder="e.g. 0123456"
                        className={inputClass} 
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Contact Number</label>
                      <input 
                        type="tel" 
                        name="referringDoctorPhone" 
                        value={formData.referringDoctorPhone} 
                        onChange={handleChange} 
                        placeholder="e.g. 031 123 4567"
                        className={inputClass} 
                      />
                    </div>
                  </div>
                </motion.div>
              )}

            <div className="bg-brand-soft/10 rounded-2xl p-6 mt-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="consent" 
                  checked={formData.consent} 
                  onChange={handleChange} 
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" 
                />
                <span className="text-sm text-gray-600">
                  I consent to the collection and processing of my personal and medical information for the purpose of receiving physiotherapy treatment. I understand this information will be kept confidential in accordance with POPIA (Protection of Personal Information Act).
                </span>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button type="button" onClick={() => setStep(2)} className="text-brand-primary font-bold hover:underline">
                Back
              </button>
              <button 
                type="submit" 
                disabled={formState === "submitting" || !formData.consent}
                className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {formState === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
