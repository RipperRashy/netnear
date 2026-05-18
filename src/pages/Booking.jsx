import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Booking() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [description, setDescription] = useState('')
  const [county, setCounty] = useState('')
  const [town, setTown] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [landmark, setLandmark] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const commonServices = [
    { icon: '📡', label: 'Fibre Installation' },
    { icon: '🏠', label: 'Home WiFi Setup' },
    { icon: '🏢', label: 'Business WiFi' },
    { icon: '📹', label: 'CCTV Setup' },
    { icon: '🔁', label: 'Router Configuration' },
    { icon: '🕸️', label: 'Mesh Network' },
    { icon: '🔧', label: 'Network Troubleshooting' },
    { icon: '🔌', label: 'Cable Management' },
  ]

  const kenyanCounties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi',
    'Kitale', 'Garissa', 'Kakamega', 'Machakos', 'Meru', 'Nyeri', 'Kisii',
    'Kericho', 'Embu', 'Migori', 'Homa Bay', 'Kilifi', 'Kwale'
  ]

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const handleBooking = async () => {
    if (!user) { navigate('/login'); return }
    setLoading(true)
    setError('')
    const fullLocation = `${streetAddress}, ${town}, ${county}`
    const fullDescription = `Services: ${selectedServices.join(', ')}${description ? `. Additional details: ${description}` : ''}`
    const { error } = await supabase.from('jobs').insert({
      customer_id: user.id,
      installer_id: 'placeholder',
      description: fullDescription,
      location: fullLocation,
      status: 'pending',
    })
    if (error) { setError(error.message); setLoading(false) }
    else navigate('/customer/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero strip */}
      <div className="bg-green-600 px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Book your WiFi installer 🚀</h1>
            <p className="text-green-100">Fill in the details below — your installer will confirm within 1 hour.</p>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lg font-bold text-green-700">JM</div>
            <div>
              <div className="font-semibold text-gray-900">James Mwangi</div>
              <div className="text-xs text-gray-400">📍 Westlands · ★★★★★ 4.9 · 42 reviews</div>
            </div>
            <div className="text-right ml-4 pl-4 border-l border-gray-100">
              <div className="text-lg font-bold text-green-600">KES 1,500</div>
              <div className="text-xs text-gray-400">starting from</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {error && <p className="text-red-500 text-sm mb-6 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>}

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">

            {/* Step 1 - Service selection */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h2 className="font-semibold text-gray-900 text-lg">What do you need help with?</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">Select all that apply — you can pick multiple services</p>
              <div className="grid grid-cols-4 gap-3">
                {commonServices.map(service => (
                  <button
                    key={service.label}
                    onClick={() => toggleService(service.label)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition text-center ${
                      selectedServices.includes(service.label)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-100 hover:border-green-300 bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className={`text-xs font-medium ${selectedServices.includes(service.label) ? 'text-green-700' : 'text-gray-600'}`}>
                      {selectedServices.includes(service.label) ? '✓ ' : ''}{service.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700 block mb-1">Anything specific? <span className="text-gray-400 font-normal">(optional)</span></label>
                <textarea
                  placeholder="e.g. I have a 3-bedroom apartment, ISP has already done their part. I need the router set up and cables managed neatly through the ceiling..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition resize-none"
                />
              </div>
            </div>

            {/* Step 2 - Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h2 className="font-semibold text-gray-900 text-lg">Where should the installer come?</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">Be as specific as possible so the installer finds you easily</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">County <span className="text-red-400">*</span></label>
                    <select
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                    >
                      <option value="">Select your county</option>
                      {kenyanCounties.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Town / Area <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      placeholder="e.g. Westlands, Kilimani, Ruiru"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Street / Building / Estate name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Rose Garden Apartments, Apt 4B — Ngong Road"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Nearest landmark <span className="text-gray-400 font-normal">(optional but helpful)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Near Nakumatt Prestige, opposite KCB Bank"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  />
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 flex gap-2 items-start">
                  <span className="text-blue-500 text-lg">ℹ️</span>
                  <p className="text-xs text-blue-700">Your exact address is only shared with the installer after they confirm your booking — not visible publicly.</p>
                </div>
              </div>
            </div>

            {/* Step 3 - Date & time */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <h2 className="font-semibold text-gray-900 text-lg">When are you available?</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">Pick your preferred date and time — the installer will confirm if they're available</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Preferred date <span className="text-red-400">*</span></label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Preferred time <span className="text-red-400">*</span></label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  >
                    <option value="">Select a time slot</option>
                    {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Booking summary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-6">
              <h2 className="font-semibold text-gray-900 mb-4">Booking summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Installer</span>
                  <span className="font-medium text-gray-800">James Mwangi</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Services</span>
                  <span className="font-medium text-gray-800 text-right max-w-32">
                    {selectedServices.length > 0 ? selectedServices.join(', ') : 'None selected'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium text-gray-800">{date || 'Not set'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time</span>
                  <span className="font-medium text-gray-800">{time || 'Not set'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium text-gray-800 text-right max-w-32">{town && county ? `${town}, ${county}` : 'Not set'}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="text-gray-500 text-sm">Starting price</span>
                  <span className="font-bold text-green-600">KES 1,500</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={loading || selectedServices.length === 0 || !county || !town || !streetAddress || !date || !time}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50 mb-3"
              >
                {loading ? 'Sending request...' : 'Send booking request 🚀'}
              </button>
              <p className="text-center text-xs text-gray-400">No payment required yet — you pay when the job is done ✓</p>
            </div>

            {/* How it works */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
              <div className="space-y-4">
                {[
                  { icon: '📨', title: 'Request sent', desc: 'Your booking request goes to the installer instantly' },
                  { icon: '✅', title: 'Installer confirms', desc: 'They confirm within 1 hour or suggest another time' },
                  { icon: '🔧', title: 'Job done', desc: 'Installer comes to you and gets everything set up' },
                  { icon: '💳', title: 'Pay securely', desc: 'Pay via M-Pesa only after you\'re satisfied' },
                  { icon: '⭐', title: 'Leave a review', desc: 'Help other customers by rating your experience' },
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

          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking