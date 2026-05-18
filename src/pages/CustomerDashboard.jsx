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
          <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600 border border-red-100 px-3 py-1.5 rounded-lg hover:bg-red-50 transition">Log out</button>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="bg-green-600 px-8 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back, {profile?.first_name || 'there'}! 🌟</h1>
            <p className="text-green-100 mb-4">Need WiFi installed? We have 1,240+ verified professionals ready to help you today.</p>
            <div className="flex gap-3">
              <Link to="/search">
                <button className="bg-white text-green-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-green-50 transition text-sm">
                  🔍 Find an installer
                </button>
              </Link>
              <button className="bg-green-700 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-green-800 transition text-sm">
                📋 My bookings
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 min-w-64">
            <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">Quick search</p>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-3">
              <span className="text-green-600">🗺️</span>
              <input type="text" placeholder="Your town or estate..." className="flex-1 bg-transparent text-sm outline-none text-gray-600"/>
            </div>
            <Link to="/search">
              <button className="w-full bg-green-600 text-white text-sm py-2.5 rounded-lg hover:bg-green-700 font-medium transition">
                Search installers →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
          {[
            { icon: '📋', label: 'Total bookings', value: '0' },
            { icon: '✅', label: 'Completed jobs', value: '0' },
            { icon: '⏳', label: 'Pending jobs', value: '0' },
            { icon: '⭐', label: 'Reviews given', value: '0' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6">

          {/* Main content */}
          <div className="col-span-2 space-y-6">

            {/* Bookings */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900 text-lg">My bookings</h2>
                <div className="flex gap-2">
                  {['All', 'Pending', 'Confirmed', 'Completed'].map(tab => (
                    <button key={tab} className={`text-xs px-3 py-1.5 rounded-full border transition ${tab === 'All' ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-500 hover:border-green-400'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="text-6xl mb-4">📭</span>
                <h3 className="font-semibold text-gray-900 mb-1">No bookings yet</h3>
                <p className="text-gray-500 text-sm mb-6">Find a nearby installer and book your first job today!</p>
                <Link to="/search">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition">
                    Browse installers 🔍
                  </button>
                </Link>
              </div>
            </div>

            {/* Recommended installers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 text-lg">Top installers near you</h2>
                <Link to="/search" className="text-sm text-green-600 hover:underline">View all →</Link>
              </div>
              <div className="space-y-3">
                {[
                  { initials: 'JM', name: 'James Mwangi', location: 'Westlands, Nairobi', rating: '4.9', reviews: 42, price: 'KES 1,500', available: true, color: 'bg-green-100 text-green-700' },
                  { initials: 'SM', name: 'Sarah Mutua', location: 'Kilimani, Nairobi', rating: '5.0', reviews: 55, price: 'KES 1,800', available: true, color: 'bg-purple-100 text-purple-700' },
                  { initials: 'AO', name: 'Amina Omar', location: 'Kasarani, Nairobi', rating: '4.8', reviews: 38, price: 'KES 2,000', available: true, color: 'bg-blue-100 text-blue-700' },
                ].map(installer => (
                  <div key={installer.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition group">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${installer.color}`}>
                        {installer.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition">{installer.name}</div>
                        <div className="text-xs text-gray-400">🗺️ {installer.location}</div>
                        <div className="text-xs text-yellow-500">★ {installer.rating} <span className="text-gray-400">({installer.reviews} reviews)</span></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">{installer.price}</div>
                        <div className={`text-xs ${installer.available ? 'text-green-600' : 'text-yellow-600'}`}>
                          {installer.available ? '🟢 Available today' : '🟡 Tomorrow'}
                        </div>
                      </div>
                      <Link to="/booking/1">
                        <button className="bg-green-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">
                          Book
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Quick actions */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[
                  { icon: '🔍', label: 'Find an installer', desc: 'Search by location or service', link: '/search' },
                  { icon: '📋', label: 'My bookings', desc: 'View all your jobs', link: '#' },
                  { icon: '⭐', label: 'My reviews', desc: 'Reviews you have left', link: '#' },
                  { icon: '👤', label: 'My profile', desc: 'Update your details', link: '#' },
                  { icon: '🔔', label: 'Notifications', desc: 'Manage your alerts', link: '#' },
                ].map(action => (
                  <Link to={action.link} key={action.label}>
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition text-left group">
                      <span className="text-xl">{action.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition">{action.label}</div>
                        <div className="text-xs text-gray-400">{action.desc}</div>
                      </div>
                      <span className="ml-auto text-gray-300 group-hover:text-green-400">→</span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">How NetNear works</h2>
              <div className="space-y-4">
                {[
                  { icon: '🔍', title: 'Search nearby', desc: 'Find verified installers in your area' },
                  { icon: '📅', title: 'Book instantly', desc: 'Pick a date and time that works for you' },
                  { icon: '🔧', title: 'Get connected', desc: 'Your installer comes and sets everything up' },
                  { icon: '💳', title: 'Pay securely', desc: 'Pay via M-Pesa only after you\'re happy' },
                ].map(step => (
                  <div key={step.title} className="flex gap-3">
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-800">{step.title}</div>
                      <div className="text-xs text-gray-400">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo */}
            <div className="bg-green-600 rounded-2xl p-6 text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className="text-white font-semibold mb-1">Refer a friend!</p>
              <p className="text-green-100 text-xs mb-4">Earn KES 200 for every friend you refer who books an installer</p>
              <button className="w-full bg-white text-green-600 font-medium py-2.5 rounded-lg hover:bg-green-50 text-sm transition">
                Get referral link
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard