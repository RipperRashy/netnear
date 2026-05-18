import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function InstallerProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-green-600 px-8 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-green-700 border-4 border-green-400 shadow-lg">
              JM
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-white">James Mwangi</h1>
                <span className="bg-white text-green-600 text-xs font-semibold px-3 py-1 rounded-full">✓ Verified</span>
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">🟢 Available today</span>
              </div>
              <div className="text-green-100 text-sm mb-2">🗺️ Westlands, Nairobi · 2.1 km away</div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-300 text-lg">★★★★★</span>
                <span className="text-white font-semibold">4.9</span>
                <span className="text-green-200 text-sm">(42 reviews)</span>
                <span className="text-green-200">·</span>
                <span className="text-green-200 text-sm">127 jobs completed</span>
                <span className="text-green-200">·</span>
                <span className="text-green-200 text-sm">5 years experience</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/booking/1">
              <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition">
                Book now 🚀
              </button>
            </Link>
            <Link to="/login">
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition">
                💬 Message
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4">
          {[
            { icon: '🔧', label: 'Jobs done', value: '127' },
            { icon: '⭐', label: 'Rating', value: '4.9 / 5' },
            { icon: '⚡', label: 'Response time', value: '< 1 hour' },
            { icon: '📅', label: 'Member since', value: 'Jan 2024' },
            { icon: '💰', label: 'Starting price', value: 'KES 1,500' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-xl">{stat.icon}</span>
              <div>
                <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 text-lg mb-4">About James</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a certified fibre technician with 5 years of experience serving homes and businesses across Nairobi. I respond fast, work clean, and don't leave until your WiFi is perfect. 100+ happy customers and counting! 💪
              </p>
              <p className="text-gray-600 leading-relaxed">
                I work with all major ISPs in Kenya including Safaricom, Zuku, Faiba, and Airtel. Whether it's a simple home setup or a complex business network, I've got you covered. I also offer after-service support — if anything goes wrong within 7 days, I come back for free.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: '🏆', text: 'Top installer 2024' },
                  { icon: '🔁', text: '7-day free callback' },
                  { icon: '📞', text: 'Responds within 1hr' },
                ].map(badge => (
                  <div key={badge.text} className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg p-3">
                    <span>{badge.icon}</span>
                    <span className="text-xs font-medium text-green-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 text-lg mb-4">Services & pricing</h2>
              <div className="space-y-3">
                {[
                  { service: 'Fibre Installation', price: 'KES 1,500 – 3,000', duration: '2–3 hours', icon: '📡' },
                  { service: 'Home WiFi Setup', price: 'KES 1,000 – 2,000', duration: '1–2 hours', icon: '🏠' },
                  { service: 'Router Configuration', price: 'KES 500 – 1,500', duration: '30–60 min', icon: '🔁' },
                  { service: 'Network Troubleshooting', price: 'KES 800 – 2,000', duration: '1–3 hours', icon: '🔧' },
                  { service: 'Cable Management', price: 'KES 1,000 – 4,000', duration: '2–4 hours', icon: '🔌' },
                ].map(item => (
                  <div key={item.service} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{item.service}</div>
                        <div className="text-xs text-gray-400">⏱ {item.duration}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-green-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900 text-lg">Customer reviews</h2>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                  <span className="text-sm text-gray-400">/ 5 · 42 reviews</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {[
                  { stars: 5, count: 38, percent: 90 },
                  { stars: 4, count: 3, percent: 7 },
                  { stars: 3, count: 1, percent: 3 },
                  { stars: 2, count: 0, percent: 0 },
                  { stars: 1, count: 0, percent: 0 },
                ].map(row => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-10">{row.stars} star</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${row.percent}%` }}/>
                    </div>
                    <span className="text-xs text-gray-400 w-6">{row.count}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-5">
                {[
                  { name: 'Sarah K.', avatar: 'SK', rating: 5, comment: 'James was fantastic! Arrived on time, set everything up perfectly and even showed me how to manage my router settings. My WiFi has never been this fast. Will definitely book again!', date: '2 days ago', service: 'Fibre Installation' },
                  { name: 'David M.', avatar: 'DM', rating: 5, comment: "Very professional and fast. My fibre was up and running within an hour. He also tidied up all the cables which I wasn't even expecting. 10/10!", date: '1 week ago', service: 'Home WiFi Setup' },
                  { name: 'Amina O.', avatar: 'AO', rating: 4, comment: 'Good work overall. Came on time and was very knowledgeable. Slight delay but communicated well throughout. Happy with the end result.', date: '2 weeks ago', service: 'Router Configuration' },
                ].map(review => (
                  <div key={review.name} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{review.name}</div>
                          <div className="text-xs text-gray-400">{review.service}</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                    <div className="text-yellow-500 text-sm mb-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600">KES 1,500</div>
                <div className="text-xs text-gray-400">starting price · final depends on job</div>
              </div>
              <Link to="/booking/1">
                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition mb-3">
                  Book now 🚀
                </button>
              </Link>
              <Link to="/login">
                <button className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:border-green-500 hover:text-green-600 transition mb-4">
                  💬 Send a message
                </button>
              </Link>
              <div className="space-y-2 text-sm">
                {[
                  { icon: '✅', text: 'Free cancellation up to 2hrs before' },
                  { icon: '💳', text: 'Pay only after job is done' },
                  { icon: '🔒', text: 'Secure M-Pesa payment' },
                  { icon: '⭐', text: 'Satisfaction guaranteed' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2 text-gray-500">
                    <span>{item.icon}</span>
                    <span className="text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Availability this week</h2>
              <div className="space-y-2">
                {[
                  { day: 'Monday', status: 'Available', color: 'text-green-600' },
                  { day: 'Tuesday', status: 'Available', color: 'text-green-600' },
                  { day: 'Wednesday', status: 'Fully booked', color: 'text-red-500' },
                  { day: 'Thursday', status: 'Available', color: 'text-green-600' },
                  { day: 'Friday', status: 'Available', color: 'text-green-600' },
                  { day: 'Saturday', status: 'Available', color: 'text-green-600' },
                  { day: 'Sunday', status: 'Off', color: 'text-gray-400' },
                ].map(day => (
                  <div key={day.day} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{day.day}</span>
                    <span className={`font-medium ${day.color}`}>{day.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-semibold text-gray-900 mb-3">Works with</h2>
              <div className="flex flex-wrap gap-2">
                {['Safaricom', 'Zuku', 'Faiba', 'Airtel', 'Liquid Home'].map(isp => (
                  <span key={isp} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full font-medium">
                    {isp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallerProfile