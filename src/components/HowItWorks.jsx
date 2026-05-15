function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Search by location",
      desc: "Enter your area and browse verified installers ranked by distance, rating, and availability.",
    },
    {
      number: "02",
      title: "Book & pay safely",
      desc: "Chat with the installer, agree on a price, and pay securely through M-Pesa or card — held in escrow until the job is done.",
    },
    {
      number: "03",
      title: "Get connected & rate",
      desc: "Your installer comes to you, sets everything up, then you release payment and leave a review.",
    },
  ]

  return (
    <section className="px-8 py-16 bg-white">
      <p className="text-green-600 text-xs font-semibold tracking-widest uppercase mb-2">How it works</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Three steps to connected</h2>
      <p className="text-gray-500 mb-10 max-w-lg">Whether you're a homeowner, business, or school — getting professional WiFi installed has never been simpler.</p>
      <div className="grid grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
        {steps.map((step) => (
          <div key={step.number} className="bg-white p-8">
            <div className="text-5xl font-bold text-green-50 text-gray-100 mb-4">{step.number}</div>
            <div className="text-base font-semibold text-gray-800 mb-2">{step.title}</div>
            <div className="text-sm text-gray-500 leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks