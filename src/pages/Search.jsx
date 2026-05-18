import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Search() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTown, setSearchTown] = useState('')

  const filters = ['All', 'Fibre', 'Home WiFi', 'Business', 'CCTV', 'Mesh Networks', 'Routers', 'Troubleshooting']

  const installers = [
    { id: 1, initials: 'JM', name: 'James Mwangi', location: 'Westlands, Nairobi', distance: '2.1 km', rating: 4.9, reviews: 42, tags: ['Fibre', 'Home WiFi'], priceFrom: 1500, priceTo: 5000, experience: 5, jobs: 127, available: 'Available today', color: 'bg-green-100 text-green-700', responseTime: '< 1 hr' },
    { id: 2, initials: 'AO', name: 'Amina Omar', location: 'Kilimani, Nairobi', distance: '3.8 km', rating: 4.8, reviews: 38, tags: ['Business', 'CCTV'], priceFrom: 2000, priceTo: 8000, experience: 7, jobs: 98, available: 'Available today', color: 'bg-blue-100 text-blue-700', responseTime: '< 2 hrs' },
    { id: 3, initials: 'PK', name: 'Peter Kamau', location: 'Kasarani, Nairobi', distance: '5.2 km', rating: 4.6, reviews: 21, tags: ['Fibre', 'Routers'], priceFrom: 1200, priceTo: 4000, experience: 3, jobs: 54, available: 'Available today', color: 'bg-yellow-100 text-yellow-700', responseTime: '< 3 hrs' },
    { id: 4, initials: 'SM', name: 'Sarah Mutua', location: 'Kilimani, Nairobi', distance: '6.1 km', rating: 5.0, reviews: 55, tags: ['Home WiFi', 'Mesh Networks'], priceFrom: 1800, priceTo: 6000, experience: 6, jobs: 143, available: 'Available today', color: 'bg-purple-100 text-purple-700', responseTime: '< 1 hr' },
    { id: 5, initials: 'DK', name: 'David Kipchoge', location: 'Ruiru, Kiambu', distance: '8.3 km', rating: 4.5, reviews: 17, tags: ['Fibre', 'Business'], priceFrom: 1000, priceTo: 3500, experience: 2, jobs: 31, available: 'Available tomorrow', color: 'bg-red-100 text-red-700', responseTime: '< 4 hrs' },
    { id: 6, initials: 'FW', name: 'Faith Wanjiku', location: 'Thika, Kiambu', distance: '12 km', rating: 4.9, reviews: 29, tags: ['Home WiFi', 'Routers'], priceFrom: 1300, priceTo: 4500, experience: 4, jobs: 76, available: 'Available today', color: 'bg-orange-100 text-orange-700', responseTime: '< 2 hrs' },
  ]

  const renderStars = (rating) => {
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero search bar */}
      <div className="bg-green-600 px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Find a WiFi installer near you 📡</h1>
          <p className="text-green-100 mb-6">Browse verified professionals across Kenya — rated, trusted, and ready to work.</p>
          <div className="flex items-center bg-white rounded-xl px-5 py-4 max-w-2xl gap-3 shadow-sm">
            <span className="text-green-600 text-lg">🗺️</span>
            <input
              type="text"
              placeholder="Enter your town or estate — e.g. Westlands, Kisumu, Eldoret..."
              value={searchTown}
              onChange={(e) => setSearchTown(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
            />
            <button className="bg-green-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-green-700 font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-200 px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-8 text-sm text-gray-500">
          <span>🔍 Showing <strong className="text-gray-900">6 installers</strong> near you</span>
          <span>✅ All verified professionals</span>
          <span>⚡ Average response time: <strong className="text-gray-900">2 hours</strong></span>
          <span>⭐ Average rating: <strong className="text-gray-900">4.8 / 5</strong></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-sm font-medium text-gray-600">Filter by service:</span>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm px-4 py-2 rounded-full border transition font-medium ${
                activeFilter === filter
                  ? 'bg-green-600 text-white border-green-600'
                  : 'border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
            <span>Sort by:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-green-500">
              <option>Nearest first</option>
              <option>Highest rated</option>
              <option>Most reviews</option>
              <option>Lowest price</option>
            </select>
          </div>
        </div>

        {/* Installer grid */}
        <div className="grid grid-cols-3 gap-5">
          {installers.map(installer => (
            <div key={installer.id} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-green-400 hover:shadow-md transition cursor-pointer group">

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${installer.color}`}>
                    {installer.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-green-600 transition">{installer.name}</div>
                    <div className="text-xs text-gray-400">🗺️ {installer.location}</div>
                    <div className="text-xs text-green-600 font-medium">{installer.distance} away</div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${installer.available === 'Available today' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {installer.available}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-500 text-sm">{renderStars(installer.rating)}</span>
                <span className="text-sm font-semibold text-gray-800">{installer.rating}</span>
                <span className="text-xs text-gray-400">({installer.reviews} reviews)</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {installer.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 rounded-xl p-3">
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">{installer.jobs}</div>
                  <div className="text-xs text-gray-400">Jobs done</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-sm font-bold text-gray-900">{installer.experience}yrs</div>
                  <div className="text-xs text-gray-400">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">{installer.responseTime}</div>
                  <div className="text-xs text-gray-400">Response</div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">KES {installer.priceFrom.toLocaleString()}</span>
                  <span className="text-xs text-gray-400 ml-1">– {installer.priceTo.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <Link to={`/installer/${installer.id}`}>
                    <button className="text-sm border border-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:border-green-500 hover:text-green-600 transition">
                      View
                    </button>
                  </Link>
                  <Link to={`/booking/${installer.id}`}>
                    <button className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-10">
          <button className="border border-gray-200 text-gray-600 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-600 transition font-medium">
            Load more installers
          </button>
          <p className="text-xs text-gray-400 mt-2">Showing 6 of 1,240+ installers in Kenya</p>
        </div>

      </div>
    </div>
  )
}

export default Search