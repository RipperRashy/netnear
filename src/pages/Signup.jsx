import { Link } from 'react-router-dom'
import { useState } from 'react'

function Signup() {
  const [role, setRole] = useState('customer')

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-md p-8">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
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

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
        <p className="text-gray-500 text-sm mb-6">Join NetNear — Kenya's WiFi installer network</p>

        {/* Role toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setRole('customer')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${role === 'customer' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500'}`}
          >
            I need WiFi installed
          </button>
          <button
            onClick={() => setRole('installer')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${role === 'installer' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500'}`}
          >
            I'm an installer
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">First name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Phone number</label>
            <input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-green-500 transition"
            />
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
            {role === 'customer' ? 'Find an installer' : 'Start getting jobs'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup