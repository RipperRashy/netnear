import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { installers } from '../data/installers'
import { useEffect, useState } from 'react'

function CustomerDashboard() {
  const { profile, user } = useAuth()
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('All')

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  useEffect(() => {
    if (user) fetchJobs()
  }, [user])

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('customer_id', user.id)
      .order('created_at', { ascending: false })
    if (!error) setJobs(data)
    setLoading(false)
  }

  const filteredJobs = jobs.filter(job => {
    if (activeTab === 'All') return true
    return job.status.toLowerCase() === activeTab.toLowerCase()
  })

  const getStatusColor = (status) => {
    if (status === 'pending') return 'bg-yellow-100 text-yellow-700'
    if (status === 'confirmed') return 'bg-blue-100 text-blue-700'
    if (status === 'in_progress') return 'bg-purple-100 text-purple-700'
    if (status === 'completed') return 'bg-green-100 text-green-700'
    if (status === 'cancelled') return 'bg-red-100 text-red-700'
    return 'bg-gray-100 text-gray-700'
  }

  const getStatusIcon = (status) => {
    if (status === 'pending') return '⏳'
    if (status === 'confirmed') return '✅'
    if (status === 'in_progress') return '🔧'
    if (status === 'completed') return '🎉'
    if (status === 'cancelled') return '❌'
    return '📋'
  }

  const totalJobs = jobs.length
  const completedJobs = jobs.filter(j => j.status === 'completed').length
  const pendingJobs = jobs.filter(j => j.status === 'pending').length

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" d="M5 12.5a10 10 0 0 1 14 0"/>
              <path strokeLinecap="round" d="M7.5 15a6 6 0 0 1 9 0"/>
              <path strokeLinecap="round" d="M10 17.5a3 3 0 0 1 4 0"/>
              <circle cx="12" cy="20" r="1" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-lg"><span className="text-green-600">Net</span>Near</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">👋 Hey, {profile?.first_name || 'there'}!</span>
          <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600 border border-red-100 px-3 py-1.5 rounded-lg hover:bg-red-50 transition">Log out</button>
        </div>
      </nav>

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

      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
          {[
            { icon: '📋', label: 'Total bookings', value: totalJobs },
            { icon: '✅', label: 'Completed jobs', value: completedJobs },
            { icon: '⏳', label: 'Pending jobs', value: pendingJobs },
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
          <div className="col-span-2 space-y-6">

            {/* Bookings */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900 text-lg">My bookings</h2>
                <div className="flex gap-2">
                  {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition ${activeTab === tab ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-500 hover:border-green-400'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                      <span className="text-green-600">⏳</span>
                    </div>
                    <p className="text-gray-400 text-sm">Loading your bookings...</p>
                  </div>
                </div>
              ) : filteredJobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="text-6xl mb-4">📭</span>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {activeTab === 'All' ? 'No bookings yet' : `No ${activeTab.toLowerCase()} bookings`}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {activeTab === 'All' ? 'Find a nearby installer and book your first job today!' : 'No bookings with this status yet.'}
                  </p>
                  {activeTab === 'All' && (
                    <Link to="/search">
                      <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition">
                        Browse installers 🔍
                      </button>
                    </Link>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <div key={job.id} className="border border-gray-200 rounded-xl p-5 hover:border-green-300 transition">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700 text-sm">
                            {job.installer_initials || 'IN'}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{job.installer_name || 'Installer'}</div>
                            <div className="text-xs text-gray-400">📅 {job.preferred_date || 'Date TBD'} · {job.preferred_time || 'Time TBD'}</div>
                            <div className="text-xs text-gray-400">📍 {job.location}</div>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(job.status)}`}>
                          {getStatusIcon(job.status)} {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-4 py-2 text-xs text-gray-600 mb-3">
                        {job.description}
                      </div>
                      <div className="flex gap-2">
                        {job.status === 'pending' && (
                          <button className="text-xs border border-red-200 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 transition">
                            Cancel booking
                          </button>
                        )}
                        {job.status === 'completed' && (
                          <button className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition">
                            ⭐ Leave a review
                          </button>
                        )}
                        <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:border-green-400 transition">
                          💬 Message installer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recommended installers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 text-lg">Top installers near you</h2>
                <Link to="/search" className="text-sm text-green-600 hover:underline">View all →</Link>
              </div>
              <div className="space-y-3">
                {installers.slice(0, 3).map(installer => (
                  <div key={installer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition group">
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
                        <div className="text-sm font-bold text-gray-900">KES {installer.priceFrom.toLocaleString()}</div>
                        <div className={`text-xs ${installer.available === 'Available today' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {installer.available === 'Available today' ? '🟢 Available today' : '🟡 Tomorrow'}
                        </div>
                      </div>
                      <Link to={`/booking/${installer.id}`}>
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

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[
                  { icon: '🔍', label: 'Find an installer', desc: 'Search by location or service', link: '/search' },
                  { icon: '📋', label: 'My bookings', desc: 'View all your jobs', link: '/customer/dashboard' },
                  { icon: '👤', label: 'My profile', desc: 'Update your details', link: '/customer/profile' },
                  { icon: '🔔', label: 'Notifications', desc: 'Manage your alerts', link: '/notifications' },
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

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">How NetNear works</h2>
              <div className="space-y-4">
                {[
                  { icon: '🔍', title: 'Search nearby', desc: 'Find verified installers in your area' },
                  { icon: '📅', title: 'Book instantly', desc: 'Pick a date and time that works for you' },
                  { icon: '🔧', title: 'Get connected', desc: 'Your installer comes and sets everything up' },
                  { icon: '💳', title: 'Pay securely', desc: "Pay via M-Pesa only after you're happy" },
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

            <div className="bg-green-600 rounded-2xl p-6 text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className="text-white font-semibold mb-1">Refer a friend!</p>
              <p className="text-green-100 text-xs mb-4">Earn KES 200 for every friend you refer who books an installer</p>
              <Link to="/signup">
                <button className="w-full bg-white text-green-600 font-medium py-2.5 rounded-lg hover:bg-green-50 text-sm transition">
                  Get referral link
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard