import React, { useState } from 'react';
import { FaPhone, FaChartLine, FaLaptop, FaGlobe, FaTimes, FaCheck } from 'react-icons/fa';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
];

const consultationTypes = [
  {
    id: "discovery",
    icon: <FaPhone className="text-white text-xl" />,
    iconBg: "bg-green-500",
    title: "Discovery Call",
    duration: "30 Min",
    desc: "A quick call to understand your idea, challenges, and business goals.",
    features: ["Understand your needs", "Explore opportunities", "Next steps guidance"],
  },
  {
    id: "strategy",
    icon: <FaChartLine className="text-white text-xl" />,
    iconBg: "bg-purple-500",
    title: "Strategy Session",
    duration: "60 Min",
    desc: "In-depth discussion to plan your project strategy and solution approach.",
    features: ["Solution strategy", "Technology roadmap", "Project planning"],
  },
  {
    id: "technical",
    icon: <FaLaptop className="text-white text-xl" />,
    iconBg: "bg-blue-500",
    title: "Technical Consultation",
    duration: "90 Min",
    desc: "Detailed technical consultation with architecture & implementation guidance.",
    features: ["Technical architecture", "Technology stack advice", "Implementation plan"],
  },
];

const Bookings = () => {
  const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  function getFirstDayOfMonth(year, month) {
    const d = new Date(year, month, 1).getDay();
    return d === 0 ? 6 : d - 1;
  }

  const [selectedType, setSelectedType] = useState("discovery");
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
  const [selectedDay, setSelectedDay] = useState(15);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', fatherName: '', age: '', email: '', contact: '', message: '' });

  const today = new Date();
  const [viewYear, setViewYear] = useState(2025);
  const [viewMonth, setViewMonth] = useState(4); // May = 4

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const blanks = Array(firstDay).fill(null);
  const dayNums = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const monthLabel = `${MONTHS[viewMonth]} ${viewYear}`;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleProceed = () => {
    if (selectedSlot && selectedType) {
      setShowModal(true);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const serviceTitle = consultationTypes.find(t => t.id === selectedType)?.title || selectedType;
      
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service: serviceTitle,
          date: `${MONTHS[viewMonth]} ${selectedDay}, ${viewYear}`,
          time: selectedSlot,
          name: formData.name,
          fatherName: formData.fatherName,
          age: formData.age,
          email: formData.email,
          contactNumber: formData.contact,
          message: formData.message
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setShowModal(false);
        alert("Booking request submitted successfully! An admin will review it shortly.");
        setFormData({ name: '', fatherName: '', age: '', email: '', contact: '', message: '' });
      } else {
        alert("Failed to submit booking: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred while submitting your booking.");
    }
  };

  return (
    <>
      <section className="bg-[#020B18] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT – Consultation Type */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Choose Your Consultation Type</h2>
            <div className="space-y-4">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`rounded-2xl border p-5 cursor-pointer transition-all duration-200 ${
                    selectedType === type.id
                      ? "border-[#00D4AA] bg-[#00D4AA]/5"
                      : "border-white/10 bg-[#0D1B2A] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl ${type.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-white font-bold text-sm">{type.title}</span>
                        <span className="bg-[#00D4AA]/10 text-[#00D4AA] text-xs px-2 py-0.5 rounded-full font-medium">
                          {type.duration}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mb-3">{type.desc}</p>
                      <div className="space-y-1">
                        {type.features.map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <FaCheck className="text-[#00D4AA] text-xs" />
                            <span className="text-gray-300 text-xs">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Radio */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                      selectedType === type.id ? "border-[#00D4AA]" : "border-white/20"
                    }`}>
                      {selectedType === type.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00D4AA]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Calendar + Time Slots */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-bold">Pick a Date & Time</h2>
              <span className="text-gray-400 text-xs bg-[#0D1B2A] border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1">
                <FaGlobe className="text-[#00D4AA] text-xs" />
                Asia/Karachi (PKT)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4">
              {/* Calendar */}
              <div className="bg-[#0D1B2A] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={prevMonth} className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:border-[#00D4AA]/40 hover:text-white transition flex items-center justify-center text-sm">
                    ‹
                  </button>
                  <span className="text-white font-semibold text-sm">{monthLabel}</span>
                  <button onClick={nextMonth} className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:border-[#00D4AA]/40 hover:text-white transition flex items-center justify-center text-sm">
                    ›
                  </button>
                </div>

                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map((d) => (
                    <div key={d} className="text-center text-gray-500 text-[10px] font-semibold py-1">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-y-1">
                  {blanks.map((_, i) => <div key={`b${i}`} />)}
                  {dayNums.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDay(d)}
                      className={`aspect-square flex items-center justify-center text-xs rounded-full transition-all duration-150 ${
                        selectedDay === d
                          ? "bg-[#00D4AA] text-black font-bold"
                          : d < 5
                          ? "text-gray-600 cursor-not-allowed"
                          : "text-gray-300 hover:bg-white/10"
                      }`}
                      disabled={d < 5}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="mt-4 bg-[#020B18] rounded-xl px-4 py-2.5 border border-white/5">
                  <p className="text-gray-500 text-[10px] mb-0.5">Selected Date</p>
                  <p className="text-white text-sm font-medium">
                    {DAYS[(selectedDay + firstDay - 1) % 7]?.replace(/./,(c)=>c.toUpperCase())}, {MONTHS[viewMonth]} {selectedDay}, {viewYear}
                  </p>
                </div>
              </div>

              {/* Time slots */}
              <div className="bg-[#0D1B2A] border border-white/10 rounded-2xl p-4">
                <p className="text-white text-sm font-semibold mb-4">Available Time Slots</p>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                        selectedSlot === slot
                          ? "bg-[#00D4AA] text-black"
                          : "bg-[#020B18] border border-white/10 text-gray-300 hover:border-[#00D4AA]/40 hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-[10px] mt-4 leading-relaxed mb-4">
                  Can't find a suitable time?{" "}
                  <span className="text-[#00D4AA] cursor-pointer hover:underline">Contact us</span>{" "}
                  and we'll arrange for you.
                </p>
                <button 
                  onClick={handleProceed}
                  className="w-full py-3 mt-2 bg-[#00D4AA] text-black font-bold rounded-xl hover:bg-[#00e6b8] transition-colors shadow-[0_0_15px_rgba(0,212,170,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedSlot}
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0D1B2A] border border-white/10 rounded-2xl w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl relative">
            <div className="p-6 border-b border-white/10 shrink-0">
              <h3 className="text-xl font-bold text-white">Complete Your Booking</h3>
              <p className="text-sm text-gray-400 mt-1">
                {consultationTypes.find(t => t.id === selectedType)?.title} on {MONTHS[viewMonth]} {selectedDay}, {viewYear} at {selectedSlot}
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4 text-left overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Father's Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.fatherName}
                  onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA]"
                  placeholder="Father's Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Age</label>
                <input 
                  type="number" 
                  required
                  min="1"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA]"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA]"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Additional Message (Optional)</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#020B18] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#00D4AA] h-24 resize-none"
                  placeholder="Tell us a bit about what you'd like to discuss..."
                />
              </div>
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-3 bg-[#00D4AA] text-black font-bold rounded-xl hover:bg-[#00e6b8] transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;