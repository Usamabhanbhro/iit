import React from 'react'

const DashboardContent = ({ statsGrid1 = [], statsGrid2 = [], recentBookings = [], loading, getStatusColor, handleStatusUpdate }) => {
  return (
    
    <>
    <div className="p-8 max-w-7xl mx-auto w-full animate-[slideUp_0.8s_ease-out_forwards]">

          {/* Overview Stats Grid */}
          <h2 className="text-lg font-semibold text-white mb-4">Consultation Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsGrid1.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${stat.iconColor || 'text-rose-500 bg-white/5 border border-white/10'}`}>
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#a8b2d1] text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Types Stats Grid */}
          <h2 className="text-lg font-semibold text-white mb-4">By Service Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {statsGrid2.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${stat.iconColor || 'text-rose-500 bg-white/5 border border-white/10'}`}>
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#a8b2d1] text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity / Bookings Section */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white">Recent Consultations</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-[#a8b2d1] text-sm">
                    <th className="px-6 py-4 font-medium">ID</th>
                    <th className="px-6 py-4 font-medium">Client Name</th>
                    <th className="px-6 py-4 font-medium">Service</th>
                    <th className="px-6 py-4 font-medium">Booking Date</th>
                    <th className="px-6 py-4 font-medium">Appointment Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-8 text-center text-[#a8b2d1]">Loading...</td>
                    </tr>
                  ) : recentBookings.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-8 text-center text-[#a8b2d1]">No consultations found</td>
                    </tr>
                  ) : recentBookings.map((booking, index) => (
                    <tr
                      key={booking._id || index}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-6 py-4 text-[#ccd6f6] font-medium text-xs">
                        {booking._id ? booking._id.slice(-6).toUpperCase() : `#BK-${1234 + index}`}
                      </td>
                      <td className="px-6 py-4 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xs uppercase">
                            {booking.name ? booking.name.charAt(0) : 'U'}
                          </div>
                          <div>
                            <p className="font-semibold">{booking.name}</p>
                            <p className="text-xs text-[#a8b2d1]">{booking.email || 'No email'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#a8b2d1] capitalize">{booking.service || 'Consultation'}</td>
                      <td className="px-6 py-4 text-[#a8b2d1]">
                        {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-[#a8b2d1]">
                        <p className="text-white font-medium">{booking.date}</p>
                        <p className="text-xs text-rose-400 font-semibold">{booking.time}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {booking.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleStatusUpdate(booking._id, 'accepted')}
                                className="text-emerald-400 hover:text-white p-2 rounded-lg hover:bg-emerald-500/20 transition-colors"
                                title="Accept"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(booking._id, 'declined')}
                                className="text-rose-400 hover:text-white p-2 rounded-lg hover:bg-rose-500/20 transition-colors"
                                title="Decline"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  )
}

export default DashboardContent