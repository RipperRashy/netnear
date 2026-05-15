function Stats() {
  return (
    <div className="border-t border-b border-gray-200 grid grid-cols-4">
      <div className="py-8 text-center border-r border-gray-200">
        <div className="text-3xl font-bold text-green-600">1,240+</div>
        <div className="text-sm text-gray-500 mt-1">Verified installers</div>
      </div>
      <div className="py-8 text-center border-r border-gray-200">
        <div className="text-3xl font-bold text-green-600">47</div>
        <div className="text-sm text-gray-500 mt-1">Counties covered</div>
      </div>
      <div className="py-8 text-center border-r border-gray-200">
        <div className="text-3xl font-bold text-green-600">8,500+</div>
        <div className="text-sm text-gray-500 mt-1">Jobs completed</div>
      </div>
      <div className="py-8 text-center">
        <div className="text-3xl font-bold text-green-600">4.8★</div>
        <div className="text-sm text-gray-500 mt-1">Average rating</div>
      </div>
    </div>
  )
}

export default Stats