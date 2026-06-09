import React from 'react'
import { useNavigate } from 'react-router-dom'


  const navLinks = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ) 
    },
  ];

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <>
          <aside className="relative z-10 w-64 bg-[#020B18]/80 backdrop-blur-xl border-r border-white/10 flex-col hidden md:flex">
        <div className="p-8 border-b border-white/10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-[#a8b2d1] bg-clip-text text-transparent">
            Technify
          </h2>
          <p className="text-xs text-[#00D4AA] font-semibold tracking-wider mt-1 uppercase">Admin Panel</p>
        </div>
        
        <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                activeTab === link.id 
                  ? 'bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/20 shadow-[0_0_15px_rgba(0,212,170,0.1)]' 
                  : 'text-[#a8b2d1] hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 text-[#a8b2d1] hover:text-[#00D4AA] hover:bg-[#00D4AA]/10 rounded-xl transition-all duration-300 border border-transparent hover:border-[#00D4AA]/20 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar