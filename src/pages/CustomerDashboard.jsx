import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'

function CustomerDashboard() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" d="M5 12.5a10 10 0 0 1 14 0"/>
              <path strokeLinecap="round" d="M7.5 15a6 6 0 0 1 9 0"/>
              <path strokeLinecap="round" d="M10 17.5a3 3 0 0 1 4 0"/>
              <circle cx="12" cy="20" r="1" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-lg"><span className="text-green-600">Net</span>Near</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">👋 Hey, {profile?.first_name || 'there'}!</span>
          <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600">Log out</button>
        </div>
      </nav>

      <div className="px-8 py-10 max-w-6xl mx-auto">

        {/* Welcome banner */}
        <div className="bg-green-600 rounded-2xl p-6 mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Find your perfect installer 🔍</h1>
            <p className="text-green-100 text-sm">Browse verified WiFi professionals near you and get connected today.</p>
          </div>
          <Link to="/search">
            <button className="bg-white text-green-600 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-green-50">
              Find an installer →
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total bookings', value: '0', icon: '📋', color: 'bg-blue-50 text-blue-600' },
            { label: 'Completed jobs', value: '0', icon: '✅', color: 'bg-green-50 text-green-600' },
            { label: 'Pending jobs', value: '0', icon: '⏳', color: 'bg-yellow-50 text-yellow-600' },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* Recent bookings */}
          <div className="col-span-2 bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-gray-900">My bookings</h2>
              <Link to="/search" className="text-sm text-green-600 hover:underline">Find an installer</Link>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="text-4xl mb-3">📭</span>
              <p className="text-gray-500 text-sm">No bookings yet</p>
              <p className="text-gray-400 text-xs mt-1">Find a nearby installer and book your first job</p>
              <Link to="/search">
                <button className="mt-4 bg-green-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-green-700">
                  Browse installers
                </button>
              </Link>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Quick actions</h2>
            <div className="space-y-3">
              {[
                { icon: '🔍', label: 'Find an installer', desc: 'Search by location or service' },
                { icon: '📋', label: 'My bookings', desc: 'View all your jobs' },
                { icon: '⭐', label: 'My reviews', desc: 'Reviews you have left' },
                { icon: '👤', label: 'My profile', desc: 'Update your details' },
                { icon: '🔔', label: 'Notifications', desc: 'Manage your alerts' },
              ].map(action => (
                <button key={action.label} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-left">
                  <span className="text-xl">{action.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{action.label}</div>
                    <div className="text-xs text-gray-400">{action.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard