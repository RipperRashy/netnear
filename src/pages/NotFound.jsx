import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#16a34a" strokeWidth="2">
            <path strokeLinecap="round" d="M5 12.5a10 10 0 0 1 14 0"/>
            <path strokeLinecap="round" d="M7.5 15a6 6 0 0 1 9 0"/>
            <path strokeLinecap="round" d="M10 17.5a3 3 0 0 1 4 0"/>
            <circle cx="12" cy="20" r="1" fill="#16a34a"/>
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page not found</h2>
        <p className="text-gray-500 mb-8">Looks like this page got disconnected — just like bad WiFi! Let's get you back on track.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition">
              Go home
            </button>
          </Link>
          <Link to="/search">
            <button className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-medium hover:border-green-500 hover:text-green-600 transition">
              Find an installer
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound