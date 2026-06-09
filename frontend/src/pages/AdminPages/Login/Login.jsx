import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doLogin = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.success && data.token) {
          localStorage.setItem('token', data.token);
          navigate('/admin/dashboard');
        } else {
          alert(data.message || 'Invalid credentials');
        }
      } catch (err) {
        console.error('Login error', err);
        alert('Login failed');
      }
    };

    doLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020B18] font-sans m-0 p-0 text-white">
      
      <div className="relative z-10 w-full max-w-md mx-4 p-10 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_45px_rgba(0,0,0,0.3)] animate-[slideUp_0.8s_ease-out_forwards]">
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-[#a8b2d1] bg-clip-text text-transparent">
            Technify Admin
          </h2>
          <p className="text-[#a8b2d1] text-sm m-0">Sign in to access the control panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-[#ccd6f6] mb-2 font-medium">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="admin@technify.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base transition-all duration-300 outline-none placeholder-white/30 focus:bg-white/10 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-[#ccd6f6] mb-2 font-medium">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base transition-all duration-300 outline-none placeholder-white/30 focus:bg-white/10 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-[#00D4AA] text-black rounded-xl text-white text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,212,170,0.4)] active:translate-y-0 relative overflow-hidden group"
          >
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
          </button>
        </form>

        <div className="mt-8 text-sm text-center">
          <a href="#forgot-password" className="text-[#00D4AA] font-medium transition-colors duration-300 hover:text-white hover:underline">
            Forgot your password?
          </a>
        </div>
        
      </div>
      
      {/* Slide up animation for the card */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default Login;
