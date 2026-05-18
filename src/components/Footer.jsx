import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 flex items-center justify-between text-sm text-gray-400">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" d="M5 12.5a10 10 0 0 1 14 0"/>
            <path strokeLinecap="round" d="M7.5 15a6 6 0 0 1 9 0"/>
            <path strokeLinecap="round" d="M10 17.5a3 3 0 0 1 4 0"/>
            <circle cx="12" cy="20" r="1" fill="white"/>
          </svg>
        </div>
        <span className="font-semibold text-gray-700"><span className="text-green-600">Net</span>Near</span>
      </Link>
      <div>© 2025 NetNear · Kenya</div>
      <div className="flex gap-6">
        <Link to="#" className="hover:text-green-600">Terms</Link>
        <Link to="#" className="hover:text-green-600">Privacy</Link>
        <Link to="#" className="hover:text-green-600">Support</Link>
        <a href="https://netnear.vercel.app" className="hover:text-green-600">www.netnear.co.ke</a>
      </div>
    </footer>
  )
}

export default Footer