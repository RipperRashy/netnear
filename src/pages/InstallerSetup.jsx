import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import { useAuth } from '../context/AuthContext'

function InstallerSetup() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)
  const [bio, setBio] = useState('')
  const [county, setCounty] = useState('')
  const [town, setTown] = useState('')
  const [experienceYears, setExperienceYears] = useState('')
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [services, setServices] = useState([])
  const [avatarUrl, setAvatarUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  const uploadAvatar = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.id}.${fileExt}`
    const { error } = await supabase.storage.from('avatars').upload(fileName, file, { upsert: true })
    if (!error) {
      const { data } = supabase.storage.from('avatars').getPublicUrl(fileName)
      setAvatarUrl(data.publicUrl)
    }
    setUploading(false)
  }

  const allServices = ['Home WiFi', 'Fibre', 'Business WiFi', 'CCTV', 'Mesh Networks', 'Routers', 'Network Troubleshooting', 'Cable Management']

  const toggleService = (service) => {
    setServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const kenyanCounties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi',
    'Kitale', 'Garissa', 'Kakamega', 'Machakos', 'Meru', 'Nyeri', 'Kisii',
    'Kericho', 'Embu', 'Migori', 'Homa Bay', 'Kilifi', 'Kwale'
  ]

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    const { error: installerError } = await supabase
      .from('installers')
      .insert({
        id: user.id,
        bio,
        county,
        town,
        experience_years: parseInt(experienceYears),
        price_from: parseInt(priceFrom),
        price_to: parseInt(priceTo),
        is_available: true,
        avatar_url: avatarUrl,
      })

    if (installerError) {
      setError(installerError.message)
      setLoading(false)
      return
    }

    if (services.length > 0) {
      await supabase.from('installer_services').insert(
        services.map(service => ({ installer_id: user.id, service_name: service }))
      )
    }

    navigate('/installer/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-lg p-8">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
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

        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className={`flex-1 h-1.5 rounded-full ${step >= s ? 'bg-green-600' : 'bg-gray-200'}`}/>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6 flex gap-3 items-start">
              <span className="text-2xl">🚀</span>
              <div>
                <div className="font-semibold text-green-800 text-sm">You're about to go live on NetNear!</div>
                <div className="text-green-600 text-xs mt-1">Installers with complete profiles get 3x more bookings. Let's make yours shine.</div>
              </div>
            </div>

            {/* Avatar upload */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover"/>
                  ) : (
                    <span className="text-3xl">👤</span>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-green-700">
                  <span className="text-sm">+</span>
                  <input type="file" accept="image/*" onChange={uploadAvatar} className="hidden"/>
                </label>
              </div>
              <p className="text-xs text-gray-400 mt-2">{uploading ? 'Uploading...' : 'Add a profile photo'}</p>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-1">Tell your story</h1>
            <p className="text-gray-500 text-sm mb-6">This is your pitch — make customers trust you before they even meet you.</p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Your bio</label>
                <div className="relative">
                  <textarea
                    placeholder="e.g. I'm a certified fibre technician with 5 years of experience serving homes and businesses across Nairobi. I respond fast, work clean, and don't leave until your WiFi is perfect. 100+ happy customers and counting! 💪"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition resize-none"
                  />
                  <span className="absolute bottom-3 right-3 text-xs text-gray-300">{bio.length}/300</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">💡 Tip: mention your certifications, response time, and what makes you different.</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Years of experience</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1', '2', '3', '4', '5', '6', '7', '8+'].map(yr => (
                    <button
                      key={yr}
                      onClick={() => setExperienceYears(yr)}
                      className={`py-2 rounded-lg text-sm font-medium border transition ${
                        experienceYears === yr
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 text-gray-600 hover:border-green-400'
                      }`}
                    >
                      {yr} {yr === '1' ? 'yr' : 'yrs'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!bio || !experienceYears}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Your location & pricing</h1>
            <p className="text-gray-500 text-sm mb-6">Help customers find you</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">County</label>
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                >
                  <option value="">Select county</option>
                  {kenyanCounties.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Town / Estate</label>
                <input
                  type="text"
                  placeholder="e.g. Westlands, Kilimani"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Price from (KES)</label>
                  <input
                    type="number"
                    placeholder="e.g. 1000"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Price to (KES)</label>
                  <input
                    type="number"
                    placeholder="e.g. 5000"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-lg font-medium hover:border-green-500 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Your services</h1>
            <p className="text-gray-500 text-sm mb-6">Select all services you offer</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {allServices.map(service => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium border transition text-left ${
                    services.includes(service)
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-600 hover:border-green-400'
                  }`}
                >
                  {services.includes(service) ? '✓ ' : ''}{service}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-lg font-medium hover:border-green-500 transition"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Complete setup ✓'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default InstallerSetup