import Navbar from '../components/Navbar'

function Search() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find an installer</h1>
        <p className="text-gray-500 mb-8">Browse verified WiFi professionals near you</p>

        {/* Search bar */}
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-6 py-4 max-w-2xl gap-3 mb-8 shadow-sm">
          <span className="text-gray-400">📍</span>
          <input
            type="text"
            placeholder="Enter your town — e.g. Westlands, Kisumu, Eldoret..."
            className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
          />
          <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['All', 'Fibre', 'Home WiFi', 'Business', 'CCTV', 'Mesh Networks', 'Routers'].map((filter) => (
            <button
              key={filter}
              className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600 transition"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { initials: "JM", name: "James Mwangi", location: "Nairobi", distance: "2.1 km", rating: "★★★★★", reviews: 42, tags: ["Fibre", "Home WiFi"], price: "KES 1,500", available: "Available today", color: "bg-green-100 text-green-700" },
            { initials: "AO", name: "Amina Omar", location: "Westlands", distance: "3.8 km", rating: "★★★★★", reviews: 38, tags: ["Business", "CCTV"], price: "KES 2,000", available: "Available tomorrow", color: "bg-blue-100 text-blue-700" },
            { initials: "PK", name: "Peter Kamau", location: "Kasarani", distance: "5.2 km", rating: "★★★★☆", reviews: 21, tags: ["Fibre", "Routers"], price: "KES 1,200", available: "Available today", color: "bg-yellow-100 text-yellow-700" },
            { initials: "SM", name: "Sarah Mutua", location: "Kilimani", distance: "6.1 km", rating: "★★★★★", reviews: 55, tags: ["Home WiFi", "Mesh"], price: "KES 1,800", available: "Available today", color: "bg-purple-100 text-purple-700" },
            { initials: "DK", name: "David Kipchoge", location: "Ruiru", distance: "8.3 km", rating: "★★★★☆", reviews: 17, tags: ["Fibre", "Business"], price: "KES 1,000", available: "Available today", color: "bg-red-100 text-red-700" },
            { initials: "FW", name: "Faith Wanjiku", location: "Thika", distance: "12 km", rating: "★★★★★", reviews: 29, tags: ["Home WiFi", "Routers"], price: "KES 1,300", available: "Available tomorrow", color: "bg-orange-100 text-orange-700" },
          ].map((installer) => (
            <div key={installer.name} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-green-500 transition cursor-pointer shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${installer.color}`}>
                  {installer.initials}
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{installer.available}</span>
              </div>
              <div className="font-semibold text-gray-800 mb-1">{installer.name}</div>
              <div className="text-xs text-gray-400 mb-1">📍 {installer.location} · {installer.distance}</div>
              <div className="text-yellow-500 text-xs mb-1">{installer.rating} <span className="text-gray-400">({installer.reviews} reviews)</span></div>
              <div className="flex flex-wrap gap-1 mb-3">
                {installer.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800">From {installer.price}</span>
                <button className="text-sm bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search