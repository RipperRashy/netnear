import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function InstallerProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Profile header */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700 flex-shrink-0">
              JM
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">James Mwangi</h1>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">✓ Verified</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">Available today</span>
              </div>
              <div className="text-gray-500 text-sm mb-2">📍 Westlands, Nairobi · 2.1 km away</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm font-medium text-gray-700">4.9</span>
                <span className="text-sm text-gray-400">(42 reviews)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm a certified fibre technician with 5 years of experience serving homes and businesses across Nairobi. I respond fast, work clean, and don't leave until your WiFi is perfect. 100+ happy customers and counting! 💪
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900">KES 1,500</div>
              <div className="text-xs text-gray-400 mb-4">starting from</div>
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 text-sm w-full">
                Book now
              </button>
              <button className="mt-2 border border-gray-200 text-gray-600 px-6 py-2.5 rounded-lg font-medium hover:border-green-500 text-sm w-full">
                Message
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">

            {/* Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Services offered</h2>
              <div className="flex flex-wrap gap-2">
                {['Fibre Installation', 'Home WiFi Setup', 'Router Configuration', 'Network Troubleshooting', 'Cable Management'].map(service => (
                  <span key={service} className="bg-green-50 text-green-700 text-sm px-3 py-1.5 rounded-full border border-green-100">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Customer reviews</h2>
              <div className="space-y-4">
                {[
                  { name: 'Sarah K.', rating: '★★★★★', comment: 'James was fantastic! Arrived on time, set everything up perfectly and even showed me how to manage my router settings. Highly recommend!', date: '2 days ago' },
                  { name: 'David M.', rating: '★★★★★', comment: 'Very professional and fast. My fibre was up and running within an hour. Will definitely use again.', date: '1 week ago' },
                  { name: 'Amina O.', rating: '★★★★☆', comment: 'Good work overall. Came on time and was very knowledgeable. Slight delay but communicated well.', date: '2 weeks ago' },
                ].map(review => (
                  <div key={review.name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                          {review.name[0]}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{review.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                    <div className="text-yellow-500 text-xs mb-1">{review.rating}</div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Stats */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick stats</h2>
              <div className="space-y-3">
                {[
                  { label: 'Jobs completed', value: '127' },
                  { label: 'Response time', value: '< 1 hour' },
                  { label: 'Experience', value: '5 years' },
                  { label: 'Member since', value: 'Jan 2024' },
                ].map(stat => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{stat.label}</span>
                    <span className="text-sm font-medium text-gray-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Pricing</h2>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">KES 1,500</div>
                <div className="text-xs text-gray-400 mb-1">to</div>
                <div className="text-3xl font-bold text-gray-900 mb-3">KES 5,000</div>
                <p className="text-xs text-gray-400">Final price depends on job complexity</p>
              </div>
            </div>

            {/* Book CTA */}
            <div className="bg-green-600 rounded-2xl p-6 text-center">
              <p className="text-white font-semibold mb-1">Ready to get connected?</p>
              <p className="text-green-100 text-xs mb-4">Book James today and get your WiFi sorted!</p>
              <button className="w-full bg-white text-green-600 font-medium py-2.5 rounded-lg hover:bg-green-50 text-sm">
                Book now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallerProfile