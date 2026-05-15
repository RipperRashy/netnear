function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" d="M5 12.5a10 10 0 0 1 14 0"/>
            <path strokeLinecap="round" d="M7.5 15a6 6 0 0 1 9 0"/>
            <path strokeLinecap="round" d="M10 17.5a3 3 0 0 1 4 0"/>
            <circle cx="12" cy="20" r="1" fill="white"/>
          </svg>
        </div>
        <span className="font-bold text-xl">
          <span className="text-green-600">Net</span>
          <span className="text-gray-800">Near</span>
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <a href="#" className="hover:text-green-600">Find Installer</a>
        <a href="#" className="hover:text-green-600">For Installers</a>
        <a href="#" className="hover:text-green-600">How it works</a>
        <a href="#" className="hover:text-green-600">Pricing</a>
      </div>
      <div className="flex gap-3">
        <button className="text-sm text-gray-600 hover:text-green-600">Log in</button>
        <button className="text-sm bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">Get started</button>
      </div>
    </nav>
  )
}

export default Navbar