import { Link } from 'react-router-dom'

function Installers() {
  const installers = [
    { id: 1, initials: "JM", name: "James Mwangi", location: "Nairobi, 2.1 km", rating: "★★★★★", tags: ["Fibre", "Home WiFi"], available: "Available today", color: "bg-green-100 text-green-700" },
    { id: 2, initials: "AO", name: "Amina Omar", location: "Westlands, 3.8 km", rating: "★★★★★", tags: ["Business", "CCTV"], available: "Available tomorrow", color: "bg-blue-100 text-blue-700" },
    { id: 3, initials: "PK", name: "Peter Kamau", location: "Kasarani, 5.2 km", rating: "★★★★☆", tags: ["Fibre", "Routers"], available: "Available today", color: "bg-yellow-100 text-yellow-700" },
  ]

  return (
    <section className="px-8 py-16 bg-white">
      <p className="text-green-600 text-xs font-semibold tracking-widest uppercase mb-2">Installers near you</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Top-rated professionals</h2>
      <p className="text-gray-500 mb-10 max-w-lg">Sample profiles from across the platform. Filter by specialty, price, and distance.</p>
      <div className="grid grid-cols-4 gap-4">
        {installers.map((installer) => (
          <div key={installer.name} className="border border-gray-200 rounded-xl p-5 hover:border-green-500 transition cursor-pointer">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${installer.color}`}>
              {installer.initials}
            </div>
            <div className="font-semibold text-gray-800 text-sm mb-1">{installer.name}</div>
            <div className="text-xs text-gray-400 mb-2">📍 {installer.location}</div>
            <div className="text-yellow-500 text-xs mb-2">{installer.rating}</div>
            <div className="flex flex-wrap gap-1 mb-3">
              {installer.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full block mb-3">{installer.available}</span>
            <div className="flex gap-2">
              <Link to={`/installer/${installer.id}`} className="flex-1">
                <button className="w-full text-xs border border-gray-200 text-gray-600 py-1.5 rounded-lg hover:border-green-500 hover:text-green-600 transition">View</button>
              </Link>
              <Link to={`/booking/${installer.id}`} className="flex-1">
                <button className="w-full text-xs bg-green-600 text-white py-1.5 rounded-lg hover:bg-green-700 transition">Book</button>
              </Link>
            </div>
          </div>
        ))}
        <Link to="/signup" className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-green-400 transition">
          <div className="text-3xl text-gray-300 mb-2">+</div>
          <div className="text-sm font-medium text-gray-600">Are you an installer?</div>
          <div className="text-xs text-gray-400 mt-1">List your profile free →</div>
        </Link>
      </div>
    </section>
  )
}

export default Installers