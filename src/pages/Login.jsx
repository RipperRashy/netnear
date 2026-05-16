import { Link } from 'react-router-dom'

function Login() {
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

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-8">Log in to your NetNear account</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
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
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" className="accent-green-600"/>
              Remember me
            </label>
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Log in
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login