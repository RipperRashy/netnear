import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import Navbar from '../components/Navbar'

function CustomerProfile() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState(profile?.first_name || '')
  const [lastName, setLastName] = useState(profile?.last_name || '')
  const [phone, setPhone] = useState(profile?.phone || '')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSave = async () => {
    setLoading(true)
    setError('')
    setSuccess(false)
    const { error } = await supabase
      .from('profiles')
      .update({ first_name: firstName, last_name: lastName, phone })
      .eq('id', user.id)
    if (error) { setError(error.message) }
    else setSuccess(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10">

        <div className="flex items-center gap-3 mb-6">
          <Link to="/customer/dashboard" className="text-gray-400 hover:text-green-600 transition">← Back</Link>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">

          {/* Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700 mb-3">
              {profile?.first_name?.[0]}{profile?.last_name?.[0]}
            </div>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 text-green-700 text-sm">
              ✅ Profile updated successfully!
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Phone number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254 7XX XXX XXX"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Email address</label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
            </div>

            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-white border border-red-100 rounded-2xl p-6 mt-4">
          <h2 className="font-semibold text-gray-900 mb-1">Danger zone</h2>
          <p className="text-xs text-gray-400 mb-4">These actions cannot be undone</p>
          <button className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition">
            Delete my account
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile