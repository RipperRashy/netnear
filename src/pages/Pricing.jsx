import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-green-600 px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">Simple, fair pricing 💰</h1>
        <p className="text-green-100 max-w-xl mx-auto">NetNear only makes money when installers make money. No hidden fees, no surprises.</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Customer pricing */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">For customers</h2>
          <p className="text-gray-500">Finding and booking an installer is completely free</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🔍', title: 'Browse & search', desc: 'Search installers by location, service, and price — completely free.', price: 'Free' },
            { icon: '📅', title: 'Book an installer', desc: 'Send a booking request to any installer at no charge.', price: 'Free' },
            { icon: '💳', title: 'Platform fee', desc: 'A small KES 50 convenience fee is added to each booking to cover secure payment processing.', price: 'KES 50 / booking' },
          ].map(item => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
              <span className="bg-green-100 text-green-700 font-semibold text-sm px-4 py-2 rounded-full">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Installer pricing */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">For installers</h2>
          <p className="text-gray-500">Choose the plan that works for your business</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            {
              name: 'Free',
              price: 'KES 0',
              period: 'forever',
              color: 'border-gray-200',
              badge: '',
              features: [
                'Basic profile listing',
                'Up to 5 leads per month',
                '12% commission per job',
                'Standard search placement',
                'Customer reviews',
              ],
              cta: 'Get started free',
              ctaStyle: 'border border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600',
              link: '/signup'
            },
            {
              name: 'Pro',
              price: 'KES 999',
              period: 'per month',
              color: 'border-green-500',
              badge: '⭐ Most popular',
              features: [
                'Featured profile listing',
                'Unlimited leads',
                '10% commission per job',
                'Top search placement',
                'Verified Pro badge',
                'Priority customer support',
                'Analytics dashboard',
              ],
              cta: 'Start Pro — KES 999/mo',
              ctaStyle: 'bg-green-600 text-white hover:bg-green-700',
              link: '/signup'
            },
            {
              name: 'Business',
              price: 'KES 2,499',
              period: 'per month',
              color: 'border-gray-200',
              badge: '',
              features: [
                'Everything in Pro',
                '8% commission per job',
                'Team profiles (up to 5)',
                'Bulk job management',
                'Monthly invoicing',
                'Dedicated account manager',
                'ISP partner badge',
              ],
              cta: 'Contact us',
              ctaStyle: 'border border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600',
              link: '/signup'
            },
          ].map(plan => (
            <div key={plan.name} className={`bg-white border-2 rounded-2xl p-6 relative ${plan.color}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className="font-bold text-xl text-gray-900 mb-1">{plan.name}</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">{plan.price}</div>
              <div className="text-xs text-gray-400 mb-6">{plan.period}</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={plan.link}>
                <button className={`w-full py-3 rounded-xl font-medium transition text-sm ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Commission explainer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="font-bold text-xl text-gray-900 mb-4">How commission works</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Customer books', desc: 'Customer sends a booking request and pays via M-Pesa into escrow' },
              { step: '2', title: 'Job completed', desc: 'Installer completes the job and customer confirms satisfaction' },
              { step: '3', title: 'NetNear deducts fee', desc: 'NetNear automatically deducts 10–12% commission from the payment' },
              { step: '4', title: 'Installer paid', desc: 'The remaining amount is sent directly to the installer\'s M-Pesa' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{item.step}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="font-bold text-xl text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is it free to sign up as an installer?', a: 'Yes! Creating a profile and receiving leads is completely free. We only charge commission when you complete a paid job.' },
              { q: 'When do I receive my payment?', a: 'Payments are released to your M-Pesa within 24 hours of the customer confirming the job is complete.' },
              { q: 'Can I cancel my Pro subscription?', a: 'Yes, you can cancel anytime. Your Pro benefits continue until the end of your billing period.' },
              { q: 'Is there a contract?', a: 'No contracts — all plans are month-to-month. Upgrade, downgrade, or cancel whenever you want.' },
            ].map(faq => (
              <div key={faq.q} className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing