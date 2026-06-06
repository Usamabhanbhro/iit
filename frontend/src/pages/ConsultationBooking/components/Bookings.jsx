import React, { useState } from 'react'


const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
];


const consultationTypes = [
  {
    id: "discovery",
    icon: "📞",
    iconBg: "bg-green-500",
    title: "Discovery Call",
    duration: "30 Min",
    desc: "A quick call to understand your idea, challenges, and business goals.",
    features: ["Understand your needs", "Explore opportunities", "Next steps guidance"],
  },
  {
    id: "strategy",
    icon: "📊",
    iconBg: "bg-purple-500",
    title: "Strategy Session",
    duration: "60 Min",
    desc: "In-depth discussion to plan your project strategy and solution approach.",
    features: ["Solution strategy", "Technology roadmap", "Project planning"],
  },
  {
    id: "technical",
    icon: "💻",
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
  // 0=Sun,1=Mon... convert to Mon-first
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

      const [selectedType, setSelectedType] = useState("discovery");
      const [selectedSlot, setSelectedSlot] = useState("10:00 AM");
      const [selectedDay, setSelectedDay] = useState(15);
    
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
    
      const dayNames = ["Thu","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Thu","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Thu"];
    
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
                                  <span className="text-[#00D4AA] text-xs">✔</span>
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
                    <span className="text-gray-400 text-xs bg-[#0D1B2A] border border-white/10 px-3 py-1.5 rounded-full">
                      🌍 Asia/Karachi (PKT)
                    </span>
                  </div>
        
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4">
                    {/* Calendar */}
                    <div className="bg-[#0D1B2A] border border-white/10 rounded-2xl p-4">
                      {/* Month nav */}
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={prevMonth}
                          className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:border-[#00D4AA]/40 hover:text-white transition flex items-center justify-center text-sm"
                        >
                          ‹
                        </button>
                        <span className="text-white font-semibold text-sm">{monthLabel}</span>
                        <button
                          onClick={nextMonth}
                          className="w-8 h-8 rounded-full border border-white/10 text-gray-400 hover:border-[#00D4AA]/40 hover:text-white transition flex items-center justify-center text-sm"
                        >
                          ›
                        </button>
                      </div>
        
                      {/* Day headers */}
                      <div className="grid grid-cols-7 mb-2">
                        {DAYS.map((d) => (
                          <div key={d} className="text-center text-gray-500 text-[10px] font-semibold py-1">
                            {d}
                          </div>
                        ))}
                      </div>
        
                      {/* Day cells */}
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
        
                      {/* Selected date display */}
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
                      <p className="text-gray-500 text-[10px] mt-4 leading-relaxed">
                        Can't find a suitable time?{" "}
                        <span className="text-[#00D4AA] cursor-pointer hover:underline">Contact us</span>{" "}
                        and we'll arrange for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
         
        </>
  )
}

export default Bookings