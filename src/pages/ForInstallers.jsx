import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function ForInstallers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-green-600 px-8 py-16 text-center">
        <span className="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6 inline-block">For WiFi Professionals</span>
        <h1 className="text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
          Turn your skills into a thriving business 🚀
        </h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
          Join 1,240+ verified WiFi installers across Kenya who are earning more, working smarter, and building their reputation on NetNear.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/signup">
            <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition text-lg">
              Join NetNear free →
            </button>
          </Link>
          <Link to="/pricing">
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition text-lg">
              View pricing
            </button>
          </Link>
        </div>
        <p className="text-green-200 text-sm mt-4">No setup fee · No monthly charge · Only pay when you earn</p>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center">
          {[
            { value: '1,240+', label: 'Active installers' },
            { value: 'KES 45K', label: 'Avg monthly earnings' },
            { value: '8,500+', label: 'Jobs completed' },
            { value: '4.8★', label: 'Platform rating' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* How it works */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How it works for installers</h2>
          <p className="text-gray-500">Get set up in minutes and start receiving bookings today</p>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-20">
          {[
            { step: '1', icon: '📝', title: 'Create your profile', desc: 'Sign up free, add your bio, services, location, and pricing. Takes less than 5 minutes.' },
            { step: '2', icon: '🔍', title: 'Get discovered', desc: 'Customers in your area find you through search. The more complete your profile, the higher you rank.' },
            { step: '3', icon: '📅', title: 'Accept bookings', desc: 'Receive booking requests, confirm your availability, and chat with customers before the job.' },
            { step: '4', icon: '💰', title: 'Get paid', desc: 'Complete the job, customer releases payment, and the money lands in your M-Pesa within 24 hours.' },
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
              <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Step {item.step}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-8 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why installers love NetNear</h2>
            <div className="space-y-4">
              {[
                { icon: '📡', title: 'More customers, less hustle', desc: 'Stop relying on word of mouth. NetNear brings customers directly to you based on your location and skills.' },
                { icon: '💳', title: 'Secure, guaranteed payments', desc: 'No more chasing payments. Customers pay upfront into escrow — you get paid the moment the job is done.' },
                { icon: '⭐', title: 'Build your reputation', desc: 'Every review builds your profile. Top-rated installers earn significantly more and get priority placement.' },
                { icon: '📊', title: 'Track your earnings', desc: 'Real-time dashboard showing your jobs, earnings, and performance metrics.' },
                { icon: '🛡️', title: 'Verified badge', desc: 'Get background checked and certified for the NetNear Verified badge — customers trust verified installers 3x more.' },
                { icon: '📱', title: 'Work from your phone', desc: 'Manage everything on the go — accept jobs, chat with customers, and check earnings from your phone.' },
              ].map(benefit => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {/* Testimonials */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What installers say</h2>
            {[
              { name: 'James M.', location: 'Nairobi', earnings: 'KES 78,000/mo', avatar: 'JM', color: 'bg-green-100 text-green-700', quote: "Before NetNear I was struggling to find consistent work. Now I have more bookings than I can handle. Best decision I ever made!" },
              { name: 'Sarah M.', location: 'Nairobi', earnings: 'KES 62,000/mo', avatar: 'SM', color: 'bg-purple-100 text-purple-700', quote: "The secure payment system is a game changer. I used to chase payments for weeks. Now I get paid the same day!" },
              { name: 'David K.', location: 'Kisumu', earnings: 'KES 41,000/mo', avatar: 'DK', color: 'bg-blue-100 text-blue-700', quote: "I started as a free member and upgraded to Pro after my first month. The ROI is insane — best KES 999 I spend every month." },
            ].map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name} · {t.location}</div>
                    <div className="text-xs text-green-600 font-medium">Earning {t.earnings}</div>
                  </div>
                  <div className="ml-auto text-yellow-500 text-sm">★★★★★</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to grow your business? 🚀</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">Join thousands of WiFi professionals across Kenya who are building their business on NetNear. Start free today.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/signup">
              <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition">
                Create your free profile →
              </button>
            </Link>
            <Link to="/pricing">
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition">
                View pricing plans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForInstallers