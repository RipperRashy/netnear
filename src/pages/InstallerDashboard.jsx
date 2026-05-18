import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../supabase'

function InstallerDashboard() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

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
          <div className="flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"/>
            <span className="text-sm text-green-700 font-medium">Online & accepting jobs</span>
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
            { icon: '🔧', label: 'Total jobs', value: '0' },
            { icon: '✅', label: 'Completed', value: '0' },
            { icon: '⏳', label: 'Pending', value: '0' },
            { icon: '⭐', label: 'Your rating', value: 'N/A' },
            { icon: '💰', label: 'Total earned', value: 'KES 0' },
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
                    <button key={tab} className={`text-xs px-3 py-1.5 rounded-full border transition ${tab === 'All' ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-500 hover:border-green-400'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="text-6xl mb-4">📭</span>
                <h3 className="font-semibold text-gray-900 mb-1">No jobs yet</h3>
                <p className="text-gray-500 text-sm mb-4">Your bookings will appear here once customers start finding you</p>
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 max-w-sm">
                  <p className="text-sm text-green-700 font-medium mb-1">💡 Tips to get your first booking:</p>
                  <ul className="text-xs text-green-600 space-y-1 text-left list-disc list-inside">
                    <li>Complete your profile 100%</li>
                    <li>Add portfolio photos</li>
                    <li>Set competitive pricing</li>
                    <li>Make sure availability is turned on</li>
                  </ul>
                </div>
              </div>
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
                  { icon: '📅', label: 'Set availability', desc: 'Let customers know when you\'re free', link: '/installer/setup' },
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
              <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl p-4">
                <div>
                  <div className="text-sm font-semibold text-green-700">🟢 Currently available</div>
                  <div className="text-xs text-green-600">Customers can book you</div>
                </div>
                <div className="w-12 h-6 bg-green-600 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow"/>
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