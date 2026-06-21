import React from 'react';

const Header = ({ activeTab, toggleSidebar }) => {
  return (
    <header className="px-4 sm:px-8 py-6 flex justify-between items-center border-b border-white/10 bg-[#020B18]/50 backdrop-blur-md sticky top-0 z-20">
      {/* Left side: hamburger + title */}
      <div className="flex items-center gap-3">
        {/* Hamburger button - visible on mobile */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden text-white hover:text-[#00D4AA] transition"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white capitalize">{activeTab}</h1>
          <p className="text-sm text-[#a8b2d1]">Welcome back, Admin!</p>
        </div>
      </div>
      
      {/* Right side: user info */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 pl-5 border-l border-white/10 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white group-hover:text-rose-400 transition-colors">Admin User</p>
            <p className="text-xs text-[#a8b2d1]">admin@technify.com</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(225,29,72,0.3)] border-2 border-[#16213e]">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;