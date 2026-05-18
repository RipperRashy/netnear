import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="mx-8 my-16 bg-green-600 rounded-2xl px-10 py-12 flex items-center justify-between gap-8 flex-wrap">
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">Ready to get connected?</h3>
        <p className="text-green-100 text-sm">Find a verified installer in your area today.</p>
      </div>
      <div className="flex gap-3">
        <Link to="/search">
          <button className="bg-white text-green-600 font-medium text-sm px-5 py-3 rounded-lg hover:bg-green-50">
            Find an installer
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-transparent border border-white text-white font-medium text-sm px-5 py-3 rounded-lg hover:bg-green-700">
            List your services
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CTA