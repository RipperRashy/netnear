import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Notifications() {
  const notifications = [
    { id: 1, icon: '✅', title: 'Booking confirmed!', desc: 'James Mwangi has confirmed your booking for May 26.', time: '2 hours ago', read: false, color: 'bg-green-50 border-green-100' },
    { id: 2, icon: '📅', title: 'Reminder: Job tomorrow', desc: 'Your WiFi installation with James Mwangi is tomorrow at 10:00 AM.', time: '5 hours ago', read: false, color: 'bg-blue-50 border-blue-100' },
    { id: 3, icon: '🎉', title: 'Job completed!', desc: 'Your installation has been marked as complete. How was your experience?', time: '1 day ago', read: true, color: 'bg-gray-50 border-gray-100' },
    { id: 4, icon: '💬', title: 'New message', desc: 'James Mwangi sent you a message about your booking.', time: '2 days ago', read: true, color: 'bg-gray-50 border-gray-100' },
    { id: 5, icon: '🎁', title: 'Referral bonus!', desc: 'Your friend signed up using your referral link. KES 200 added to your account!', time: '3 days ago', read: true, color: 'bg-gray-50 border-gray-100' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link to="/customer/dashboard" className="text-gray-400 hover:text-green-600 transition">← Back</Link>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          </div>
          <button className="text-sm text-green-600 hover:underline">Mark all as read</button>
        </div>

        <div className="space-y-3">
          {notifications.map(notif => (
            <div key={notif.id} className={`bg-white border rounded-2xl p-5 flex gap-4 ${!notif.read ? 'border-green-200' : 'border-gray-200'}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border ${notif.color}`}>
                {notif.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className={`text-sm font-semibold ${notif.read ? 'text-gray-600' : 'text-gray-900'}`}>{notif.title}</h3>
                  <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{notif.time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{notif.desc}</p>
              </div>
              {!notif.read && <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-1"/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications