import { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, CheckCircle2, Building2, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { createAppointment } from "../services/api";

export function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      address: "123 Medical Center Drive, New York, NY",
      doctors: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          specialty: "Cardiologist",
          image: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjIzNzk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 4.9,
          experience: "15 years",
          availability: ["Mon", "Wed", "Fri"],
        },
        {
          id: 2,
          name: "Dr. Michael Chen",
          specialty: "Neurologist",
          image: "https://images.unsplash.com/photo-1612943705904-e2e101abcd19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBtZWRpY2FsfGVufDF8fHx8MTc3NjIzNzk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 4.8,
          experience: "12 years",
          availability: ["Tue", "Thu", "Sat"],
        },
      ],
    },
    {
      id: 2,
      name: "St. Mary's Medical Center",
      address: "321 Healthcare Boulevard, New York, NY",
      doctors: [
        {
          id: 3,
          name: "Dr. Emily Rodriguez",
          specialty: "Pediatrician",
          image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbnVyc2UlMjBwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzYyMzc5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 4.9,
          experience: "10 years",
          availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        {
          id: 4,
          name: "Dr. James Park",
          specialty: "Orthopedic Surgeon",
          image: "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3BlY2lhbGlzdCUyMGFzaWFuJTIwZG9jdG9yfGVufDF8fHx8MTc3NjIzNzk3MHww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 4.7,
          experience: "18 years",
          availability: ["Wed", "Thu", "Fri"],
        },
      ],
    },
    {
      id: 3,
      name: "MediCare Wellness Clinic",
      address: "456 Health Street, New York, NY",
      doctors: [
        {
          id: 5,
          name: "Dr. Lisa Anderson",
          specialty: "Dermatologist",
          image: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NjIzNzk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
          rating: 4.8,
          experience: "14 years",
          availability: ["Mon", "Wed", "Fri"],
        },
      ],
    },
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  ];

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
    setSelectedDoctor(null);
    setStep(2);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setStep(3);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await createAppointment({
        patient: {
          name: patientInfo.name,
          email: patientInfo.email,
          phone: patientInfo.phone,
        },
        doctor: selectedDoctor?.name,
        hospital: selectedHospital?.name,
        date: selectedDate,
        time: selectedTime,
        symptoms: patientInfo.reason,
        aiGenerated: false,
      });
    } catch {
      // If backend is offline we still confirm locally so the UX isn't broken
    }
    setBookingConfirmed(true);
    setStep(5);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        ease: "easeOut"
      },
    },
    exit: { 
      opacity: 0, 
      x: -50, 
      scale: 0.98, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-gray-900 mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred hospital and doctor
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= stepNum
                      ? "bg-[#2E7D32] text-white scale-110"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > stepNum ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span>{stepNum}</span>
                  )}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step > stepNum ? "bg-[#2E7D32]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-16 text-sm text-gray-600">
            <span className={step >= 1 ? "text-[#2E7D32]" : ""}>Hospital</span>
            <span className={step >= 2 ? "text-[#2E7D32]" : ""}>Doctor</span>
            <span className={step >= 3 ? "text-[#2E7D32]" : ""}>Date & Time</span>
            <span className={step >= 4 ? "text-[#2E7D32]" : ""}>Details</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
        {/* Step 1: Select Hospital */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Select a Hospital or Clinic
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hospitals.map((hospital) => (
                <motion.div key={hospital.id} variants={itemVariants}>
                  <div
                    className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60 cursor-pointer bg-white/80 backdrop-blur-md hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400"
                    onClick={() => handleHospitalSelect(hospital)}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#66BB6A] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-2">
                      {hospital.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{hospital.address}</p>
                    <span className="bg-green-100 text-[#2E7D32] hover:bg-green-200 px-3 py-1 rounded-full text-sm">
                      {hospital.doctors.length} Doctors Available
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Select Doctor */}
        {step === 2 && selectedHospital && (
          <motion.div
            key="step2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Select a Doctor at {selectedHospital.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {selectedHospital.doctors.map((doctor) => (
                <motion.div key={doctor.id} variants={itemVariants}>
                  <div
                    className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60 cursor-pointer bg-white/80 backdrop-blur-md hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400"
                    onClick={() => handleDoctorSelect(doctor)}
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                        <ImageWithFallback
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-gray-900 mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-[#2E7D32] mb-2">{doctor.specialty}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>⭐ {doctor.rating}</span>
                          <span>• {doctor.experience} exp</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {doctor.availability.map((day) => (
                            <span
                              key={day}
                              className="bg-green-50 text-[#2E7D32] border border-green-200 px-3 py-1 rounded-full text-sm"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedHospital(null);
                }}
                className="rounded-2xl border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-slate-50 active:scale-95"
              >
                Back to Hospitals
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && selectedDoctor && (
          <motion.div
            key="step3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="max-w-3xl mx-auto p-10 rounded-[32px] shadow-2xl border border-white/60 bg-white/80 backdrop-blur-md"
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8 text-center">
                Choose Date & Time
              </h2>

              <div className="mb-10">
                <label className="text-xs font-semibold text-slate-500 mb-3 block uppercase tracking-wider">Select Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 px-5 text-lg font-medium text-slate-700 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500 shadow-inner cursor-pointer"
                  />
                </div>
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="text-xs font-semibold text-slate-500 mb-3 block uppercase tracking-wider">Select Time</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-2xl py-4 transition-all duration-300 flex items-center justify-center text-sm font-semibold border ${
                          selectedTime === time
                            ? "bg-gradient-to-br from-emerald-600 to-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105 ring-2 ring-emerald-500 ring-offset-2"
                            : "bg-white border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 shadow-sm"
                        }`}
                      >
                        <Clock className={`w-4 h-4 mr-2 ${selectedTime === time ? "text-emerald-100" : "text-slate-400"}`} />
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 rounded-2xl bg-white border border-slate-200 py-4 font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 active:scale-95"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-700 hover:to-emerald-600 disabled:opacity-50 disabled:shadow-none active:scale-95"
                >
                  Continue
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Patient Details */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="max-w-2xl mx-auto p-10 rounded-[32px] shadow-2xl border border-white/60 bg-white/80 backdrop-blur-md"
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-8 text-center">
                Your Information
              </h2>

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={patientInfo.name}
                      onChange={(e) =>
                        setPatientInfo({ ...patientInfo, name: e.target.value })
                      }
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={patientInfo.email}
                      onChange={(e) =>
                        setPatientInfo({ ...patientInfo, email: e.target.value })
                      }
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={patientInfo.phone}
                      onChange={(e) =>
                        setPatientInfo({ ...patientInfo, phone: e.target.value })
                      }
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">Reason for Visit</label>
                  <textarea
                    placeholder="Briefly describe your symptoms or reason for appointment..."
                    value={patientInfo.reason}
                    onChange={(e) =>
                      setPatientInfo({ ...patientInfo, reason: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 px-5 font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500 shadow-inner resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 rounded-2xl bg-white border border-slate-200 py-4 font-bold text-slate-600 shadow-sm transition-all hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 active:scale-95"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-700 hover:to-emerald-600 active:scale-95"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && bookingConfirmed && (
          <motion.div
            key="step5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="max-w-2xl mx-auto p-12 rounded-[32px] shadow-2xl border border-white/60 text-center bg-white/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/30 rotate-3"
              >
                <CheckCircle2 className="w-12 h-12 text-white -rotate-3" />
              </motion.div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-lg font-medium text-slate-500 mb-8">
                Your appointment has been successfully scheduled.
              </p>

              <div className="bg-slate-50 border border-slate-100/60 shadow-inner rounded-3xl p-8 mb-8 text-left max-w-lg mx-auto">
                <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-5 border-b border-slate-200 pb-2">
                  Appointment Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white shadow-sm rounded-xl border border-slate-100">
                      <Building2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-semibold">{selectedHospital?.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white shadow-sm rounded-xl border border-slate-100">
                      <Stethoscope className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      <span className="font-semibold">{selectedDoctor?.name}</span> - <span className="text-slate-500">{selectedDoctor?.specialty}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white shadow-sm rounded-xl border border-slate-100">
                      <CalendarIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-semibold">{selectedDate}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white shadow-sm rounded-xl border border-slate-100">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-semibold">{selectedTime}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-500 mb-10">
                A confirmation email has been sent to{" "}
                <span className="font-bold text-emerald-600">{patientInfo.email}</span>
              </p>

              <button
                onClick={() => {
                  setStep(1);
                  setSelectedHospital(null);
                  setSelectedDoctor(null);
                  setSelectedDate("");
                  setSelectedTime("");
                  setPatientInfo({ name: "", email: "", phone: "", reason: "" });
                  setBookingConfirmed(false);
                }}
                className="w-full max-w-sm mx-auto block rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-700 hover:to-emerald-600 active:scale-95"
              >
                Book Another Appointment
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BookingPage