import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

function InstallerDashboard() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('All')
  const [isAvailable, setIsAvailable] = useState(true)

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
      .eq('installer_id', user.id)
      .order('created_at', { ascending: false })
    if (!error) setJobs(data)
    setLoading(false)
  }

  const updateJobStatus = async (jobId, newStatus) => {
    const { error } = await supabase
      .from('jobs')
      .update({ status: newStatus })
      .eq('id', jobId)
    if (!error) fetchJobs()
  }

  const toggleAvailability = async () => {
    const { error } = await supabase
      .from('installers')
      .update({ is_available: !isAvailable })
      .eq('id', user.id)
    if (!error) setIsAvailable(!isAvailable)
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
  const totalEarned = jobs.filter(j => j.status === 'completed' && j.price).reduce((sum, j) => sum + (j.price || 0), 0)

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
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isAvailable ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-200'}`}>
            <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-gray-400'}`}/>
            <span className={`text-sm font-medium ${isAvailable ? 'text-green-700' : 'text-gray-500'}`}>
              {isAvailable ? 'Online & accepting jobs' : 'Offline'}
            </span>
          </div>
          <span className="text-sm text-gray-600">👋 Hey, {profile?.first_name || 'Installer'}!</span>
          <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600 border border-red-100 px-3 py-1.5 rounded-lg hover:bg-red-50 transition">Log out</button>
        </div>
      </nav>

      <div className="bg-green-600 px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back, {profile?.first_name || 'Installer'}! 👋</h1>
            <p className="text-green-100">Here's what's happening with your NetNear profile today.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/installer/1">
              <button className="bg-white text-green-600 font-medium px-5 py-2.5 rounded-xl hover:bg-green-50 transition text-sm">
                👤 View my profile
              </button>
            </Link>
            <Link to="/installer/setup">
              <button className="bg-green-700 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-green-800 transition text-sm">
                ✏️ Edit profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6">
          {[
            { icon: '🔧', label: 'Total jobs', value: totalJobs },
            { icon: '✅', label: 'Completed', value: completedJobs },
            { icon: '⏳', label: 'Pending', value: pendingJobs },
            { icon: '⭐', label: 'Your rating', value: 'N/A' },
            { icon: '💰', label: 'Total earned', value: `KES ${totalEarned.toLocaleString()}` },
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

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900 text-lg">My jobs</h2>
                <div className="flex gap-2">
                  {['All', 'Pending', 'Confirmed', 'Completed'].map(tab => (
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
                    <p className="text-gray-400 text-sm">Loading your jobs...</p>
                  </div>
                </div>
              ) : filteredJobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="text-6xl mb-4">📭</span>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {activeTab === 'All' ? 'No jobs yet' : `No ${activeTab.toLowerCase()} jobs`}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {activeTab === 'All' ? 'Your bookings will appear here once customers start finding you' : 'No jobs with this status yet.'}
                  </p>
                  {activeTab === 'All' && (
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 max-w-sm">
                      <p className="text-sm text-green-700 font-medium mb-1">💡 Tips to get your first booking:</p>
                      <ul className="text-xs text-green-600 space-y-1 text-left list-disc list-inside">
                        <li>Complete your profile 100%</li>
                        <li>Add portfolio photos</li>
                        <li>Set competitive pricing</li>
                        <li>Make sure availability is turned on</li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <div key={job.id} className="border border-gray-200 rounded-xl p-5 hover:border-green-300 transition">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">Job Request</div>
                          <div className="text-xs text-gray-400 mb-1">📅 {job.preferred_date || 'Date TBD'} · {job.preferred_time || 'Time TBD'}</div>
                          <div className="text-xs text-gray-400">📍 {job.location}</div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(job.status)}`}>
                          {getStatusIcon(job.status)} {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-4 py-2 text-xs text-gray-600 mb-3">
                        {job.description}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {job.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateJobStatus(job.id, 'confirmed')}
                              className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition font-medium"
                            >
                              ✅ Accept job
                            </button>
                            <button
                              onClick={() => updateJobStatus(job.id, 'cancelled')}
                              className="text-xs border border-red-200 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-50 transition"
                            >
                              ❌ Decline
                            </button>
                          </>
                        )}
                        {job.status === 'confirmed' && (
                          <button
                            onClick={() => updateJobStatus(job.id, 'in_progress')}
                            className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition font-medium"
                          >
                            🔧 Mark in progress
                          </button>
                        )}
                        {job.status === 'in_progress' && (
                          <button
                            onClick={() => updateJobStatus(job.id, 'completed')}
                            className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition font-medium"
                          >
                            🎉 Mark completed
                          </button>
                        )}
                        <button className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:border-green-400 transition">
                          💬 Message customer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 text-lg">Earnings overview</h2>
                <select className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none">
                  <option>This month</option>
                  <option>Last month</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              <div className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-xl">
                <span className="text-4xl mb-3">📊</span>
                <p className="text-gray-500 text-sm">Your earnings chart will appear here</p>
                <p className="text-gray-400 text-xs mt-1">Complete your first job to start tracking</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-2">Profile strength</h2>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 bg-gray-100 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '40%' }}/>
                </div>
                <span className="text-sm font-bold text-green-600">40%</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Complete your profile to attract more customers</p>
              <div className="space-y-2">
                {[
                  { task: 'Add profile photo', done: false },
                  { task: 'Write your bio', done: true },
                  { task: 'Set your services', done: true },
                  { task: 'Add portfolio photos', done: false },
                  { task: 'Add M-Pesa number', done: false },
                  { task: 'Get your first review', done: false },
                ].map(item => (
                  <div key={item.task} className="flex items-center gap-2">
                    <span className={`text-sm ${item.done ? 'text-green-500' : 'text-gray-300'}`}>
                      {item.done ? '✅' : '⭕'}
                    </span>
                    <span className={`text-xs ${item.done ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[
                  { icon: '📸', label: 'Add portfolio photos', desc: 'Show off your best work', link: '/installer/setup' },
                  { icon: '💳', label: 'Add M-Pesa number', desc: 'To receive payments', link: '/installer/setup' },
                  { icon: '📅', label: 'Set availability', desc: "Let customers know when you're free", link: '/installer/setup' },
                  { icon: '🔔', label: 'Notifications', desc: 'Manage your alerts', link: '#' },
                  { icon: '📊', label: 'View analytics', desc: 'See your profile performance', link: '#' },
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
              <h2 className="font-semibold text-gray-900 mb-1">Availability</h2>
              <p className="text-xs text-gray-400 mb-4">Turn off when you're not taking new jobs</p>
              <div
                onClick={toggleAvailability}
                className={`flex items-center justify-between rounded-xl p-4 cursor-pointer transition ${isAvailable ? 'bg-green-50 border border-green-100' : 'bg-gray-50 border border-gray-200'}`}
              >
                <div>
                  <div className={`text-sm font-semibold ${isAvailable ? 'text-green-700' : 'text-gray-500'}`}>
                    {isAvailable ? '🟢 Currently available' : '⚫ Currently offline'}
                  </div>
                  <div className={`text-xs ${isAvailable ? 'text-green-600' : 'text-gray-400'}`}>
                    {isAvailable ? 'Customers can book you' : 'You won\'t receive new bookings'}
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition ${isAvailable ? 'bg-green-600' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-all ${isAvailable ? 'right-0.5' : 'left-0.5'}`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallerDashboard