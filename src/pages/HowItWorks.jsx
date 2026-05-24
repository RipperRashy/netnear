import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-green-600 px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">How NetNear works 🔧</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">Getting your WiFi installed professionally has never been this easy. Here's how it works from start to finish.</p>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-16">

        {/* For customers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">👤</div>
            <h2 className="text-2xl font-bold text-gray-900">For customers</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', icon: '🔍', title: 'Search for an installer near you', desc: 'Enter your town or estate and browse verified WiFi professionals in your area. Filter by service type, price, rating, and availability.' },
              { step: '02', icon: '👤', title: 'View installer profiles', desc: 'Check out detailed profiles with bios, photos, services, pricing, ratings, and real reviews from previous customers.' },
              { step: '03', icon: '📅', title: 'Send a booking request', desc: 'Pick your preferred date and time, describe the job, and send a request. The installer confirms within 1 hour.' },
              { step: '04', icon: '🔧', title: 'Get the job done', desc: 'Your installer comes to your location and gets everything set up professionally. You\'re in full control throughout.' },
              { step: '05', icon: '💳', title: 'Pay securely via M-Pesa', desc: 'Once you\'re happy with the work, release the payment via M-Pesa. Money is held safely in escrow until then.' },
              { step: '06', icon: '⭐', title: 'Leave a review', desc: 'Rate your experience and help other customers make informed decisions. Your feedback matters!' },
            ].map(item => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-5 items-start">
                <div className="text-4xl font-bold text-green-100 w-12 flex-shrink-0">{item.step}</div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For installers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🔧</div>
            <h2 className="text-2xl font-bold text-gray-900">For installers</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', icon: '📝', title: 'Create your free profile', desc: 'Sign up and complete your profile in minutes. Add your bio, services, location, pricing, and a profile photo.' },
              { step: '02', icon: '🔍', title: 'Get discovered by customers', desc: 'Your profile appears in search results when customers look for installers in your area. The more complete your profile, the higher you rank.' },
              { step: '03', icon: '🔔', title: 'Receive booking requests', desc: 'Get notified instantly when a customer wants to book you. Review the job details and accept or suggest an alternative time.' },
              { step: '04', icon: '💬', title: 'Chat with the customer', desc: 'Use the in-app chat to discuss job details, ask questions, and confirm everything before you arrive.' },
              { step: '05', icon: '🔧', title: 'Complete the job', desc: 'Do what you do best! The customer marks the job as complete once they\'re satisfied.' },
              { step: '06', icon: '💰', title: 'Get paid to your M-Pesa', desc: 'Payment is released from escrow and sent to your M-Pesa within 24 hours. NetNear deducts a small commission.' },
            ].map(item => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-5 items-start">
                <div className="text-4xl font-bold text-green-100 w-12 flex-shrink-0">{item.step}</div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & safety */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trust & safety 🛡️</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: '✅', title: 'Verified installers', desc: 'Every installer goes through ID verification. Top installers get background checked for extra trust.' },
              { icon: '🔒', title: 'Secure payments', desc: 'All payments go through our secure escrow system. You never pay directly to an unknown person.' },
              { icon: '⭐', title: 'Real reviews only', desc: 'Only customers who have completed a real booking can leave reviews. No fake ratings.' },
              { icon: '🛡️', title: 'Dispute resolution', desc: 'If something goes wrong, our team mediates and resolves disputes fairly for both parties.' },
              { icon: '📞', title: '24/7 support', desc: 'Our support team is available around the clock to help with any issues.' },
              { icon: '📱', title: 'Location privacy', desc: 'Your exact address is only shared with your installer after they confirm your booking.' },
            ].map(item => (
              <div key={item.title} className="text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to get started?</h2>
          <p className="text-green-100 mb-6">Find a WiFi installer near you or join as a professional today.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/search">
              <button className="bg-white text-green-600 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition">
                Find an installer
              </button>
            </Link>
            <Link to="/signup">
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition">
                Join as installer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks