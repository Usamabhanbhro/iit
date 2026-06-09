import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalConsultations = recentBookings.length;
  const pendingRequests = recentBookings.filter(b => b.status === 'pending').length;
  const rejectedRequests = recentBookings.filter(b => b.status === 'declined').length;
  const acceptedRequests = recentBookings.filter(b => b.status === 'accepted').length;

  const discoveryCallsCount = recentBookings.filter(b => b.service === 'Discovery Call').length;
  const strategySessionsCount = recentBookings.filter(b => b.service === 'Strategy Session').length;
  const technicalConsultationsCount = recentBookings.filter(b => b.service === 'Technical Consultation').length;

  const statsGrid1 = [
    {
      title: 'Total Consultations',
      value: totalConsultations,
      iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Pending Requests',
      value: pendingRequests,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Rejected Requests',
      value: rejectedRequests,
      iconColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Accepted Requests',
      value: acceptedRequests,
      iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const statsGrid2 = [
    {
      title: 'No. of Discovery Calls',
      value: discoveryCallsCount,
      iconColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'No. of Strategy Sessions',
      value: strategySessionsCount,
      iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Technical Consultations',
      value: technicalConsultationsCount,
      iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  React.useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token'); // assuming auth token
        const res = await fetch('http://localhost:5000/api/bookings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.status === 401) {
          // token invalid or expired — clear and redirect to login
          localStorage.removeItem('token');
          navigate('/admin/login');
          return;
        }

        const data = await res.json();
        if (data.success) {
          setRecentBookings(data.bookings);
        }
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === 'dashboard' || activeTab === 'bookings') {
      fetchBookings();
    }
  }, [activeTab, navigate]);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setRecentBookings(prev => prev.map(b => b._id === id ? { ...b, status: data.booking.status } : b));
      } else {
        alert(data.message || 'Error updating status');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    }
  };


  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'declined': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'pending': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen flex bg-[#020B18] font-sans text-white overflow-hidden selection:bg-rose-500/30">
      
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        {/* Header */}
        <Header activeTab={activeTab} />

        {/* Dashboard Content */}
        <DashboardContent
          statsGrid1={statsGrid1}
          statsGrid2={statsGrid2}
          recentBookings={recentBookings}
          loading={loading}
          getStatusColor={getStatusColor}
          handleStatusUpdate={handleStatusUpdate}
        />
      </main>

      
    </div>
  );
};

export default Dashboard;
