import { Button } from '@heroui/react'
import React from 'react'

const CaseStudy = () => {
  return (
    
    <>
   <section className="bg-[#0D1B2A] py-16 px-6 border-y border-white/5">
         <div className="max-w-7xl mx-auto">
           <p className="text-[#00D4AA] text-xs font-semibold uppercase tracking-widest mb-6">
             Featured Case Study
           </p>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
             {/* Left – text */}
             <div>
               <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                 How FinTrack Transformed Financial Management
               </h2>
               <div className="grid grid-cols-3 gap-4 mb-6">
                 {[
                   { label: "Client", val: "FinTrack Solutions" },
                   { label: "Industry", val: "Finance" },
                   { label: "Duration", val: "4 Months" },
                 ].map((item) => (
                   <div key={item.label}>
                     <p className="text-[#00D4AA] text-xs font-semibold mb-1">{item.label}</p>
                     <p className="text-white text-sm font-medium">{item.val}</p>
                   </div>
                 ))}
               </div>
               <div className="grid grid-cols-3 gap-4 mb-8">
                 {[
                   { val: "70%", desc: "Reduction in manual processes" },
                   { val: "40%", desc: "Increase in operational efficiency" },
                   { val: "60%", desc: "Faster financial reporting" },
                 ].map((stat) => (
                   <div key={stat.val} className="bg-[#020B18] rounded-xl p-4 border border-white/10">
                     <p className="text-[#00D4AA] text-2xl font-bold mb-1">{stat.val}</p>
                     <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
                   </div>
                 ))}
               </div>
              
             </div>
   
             {/* Right – mini dashboard */}
             <div className="bg-[#020B18] rounded-2xl border border-white/10 p-5">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                     <span className="text-white text-xs font-bold">F</span>
                   </div>
                   <span className="text-white text-sm font-semibold">FinTrack Dashboard</span>
                 </div>
                 <div className="flex gap-1">
                   <div className="w-6 h-6 rounded bg-[#0D1B2A] flex items-center justify-center text-gray-400 text-xs">🔔</div>
                   <div className="w-6 h-6 rounded bg-[#0D1B2A] flex items-center justify-center text-gray-400 text-xs">⚙️</div>
                 </div>
               </div>
               {/* KPI cards */}
               <div className="grid grid-cols-2 gap-3 mb-4">
                 {[
                   { label: "Total Balance", val: "$24,780.50", trend: "+12%", color: "text-green-400" },
                   { label: "Profit", val: "$6,780.00", trend: "+8%", color: "text-green-400" },
                 ].map((k) => (
                   <div key={k.label} className="bg-[#0D1B2A] rounded-xl p-3">
                     <p className="text-gray-500 text-[10px] mb-1">{k.label}</p>
                     <p className="text-white text-sm font-bold">{k.val}</p>
                     <p className={`${k.color} text-[10px]`}>{k.trend} this month</p>
                   </div>
                 ))}
               </div>
               {/* Bar chart */}
               <div className="bg-[#0D1B2A] rounded-xl p-3 mb-3">
                 <p className="text-gray-400 text-[10px] mb-2">Revenue Tracking</p>
                 <div className="flex items-end gap-1 h-16">
                   {[25, 45, 35, 60, 40, 75, 55, 80, 50, 70, 90, 65].map((h, i) => (
                     <div
                       key={i}
                       className="flex-1 rounded-sm transition-all"
                       style={{
                         height: `${h}%`,
                         background:
                           i === 10 ? "#00D4AA" : `rgba(0,212,170,${0.15 + i * 0.02})`,
                       }}
                     />
                   ))}
                 </div>
               </div>
               {/* Transactions */}
               <div className="space-y-2">
                 {[
                   { name: "Payment from Client", amt: "+$2,500.00", green: true },
                   { name: "Office Supplies", amt: "-$350.00", green: false },
                   { name: "Subscription", amt: "-$129.00", green: false },
                   { name: "Payment from Client", amt: "+$1,200.00", green: true },
                 ].map((t, i) => (
                   <div key={i} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                     <div className="flex items-center gap-2">
                       <div className={`w-5 h-5 rounded-full ${t.green ? "bg-green-900" : "bg-red-900"} flex items-center justify-center text-[8px]`}>
                         {t.green ? "↑" : "↓"}
                       </div>
                       <span className="text-gray-400 text-[10px]">{t.name}</span>
                     </div>
                     <span className={`text-[10px] font-semibold ${t.green ? "text-green-400" : "text-red-400"}`}>
                       {t.amt}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
      
    </>
  )
}

export default CaseStudy