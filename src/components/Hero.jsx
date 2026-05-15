function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12 bg-white">
      <span className="bg-green-100 text-green-700 text-xs font-medium px-4 py-1 rounded-full mb-6 tracking-wide">
        Kenya's WiFi Installer Network
      </span>
      <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-2xl mb-6">
        Find a WiFi installer{" "}
        <span className="text-green-600">near you</span>, right now
      </h1>
      <p className="text-gray-500 text-lg max-w-xl mb-10 leading-relaxed">
        Connect with verified, rated WiFi installation professionals across Kenya. Fast, reliable, and always nearby.
      </p>
      <div className="flex gap-4 mb-12">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700">
          Find an installer
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-green-600 hover:text-green-600">
          List your services
        </button>
      </div>
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 w-full max-w-xl gap-3">
        <span className="text-gray-400 text-sm">📍</span>
        <input
          type="text"
          placeholder="Enter your town — e.g. Westlands, Kisumu, Eldoret..."
          className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
        />
        <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700">
          Search
        </button>
      </div>
    </section>
  )
}

export default Hero