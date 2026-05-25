import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Chat() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-8 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden" style={{height: '70vh'}}>
          <div className="flex h-full">

            {/* Conversations list */}
            <div className="w-72 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">Messages</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {[
                  { name: 'James Mwangi', last: 'I will be there by 10am', time: '9:30 AM', unread: 1, color: 'bg-green-100 text-green-700', initials: 'JM' },
                  { name: 'Sarah Mutua', last: 'Thank you for booking!', time: 'Yesterday', unread: 0, color: 'bg-purple-100 text-purple-700', initials: 'SM' },
                ].map(convo => (
                  <div key={convo.name} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${convo.color}`}>
                      {convo.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{convo.name}</span>
                        <span className="text-xs text-gray-400">{convo.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{convo.last}</p>
                    </div>
                    {convo.unread > 0 && (
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{convo.unread}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat window */}
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center font-bold text-sm text-green-700">JM</div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">James Mwangi</div>
                  <div className="text-xs text-green-600">🟢 Online</div>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">Hello! I received your booking request. I'll be available on the date you selected.</p>
                    <p className="text-xs text-gray-400 mt-1">9:15 AM</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-600 rounded-2xl rounded-tr-none px-4 py-2 max-w-xs">
                    <p className="text-sm text-white">Great! Please come around 10am if possible.</p>
                    <p className="text-xs text-green-200 mt-1">9:28 AM</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">I will be there by 10am 👍</p>
                    <p className="text-xs text-gray-400 mt-1">9:30 AM</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200 flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-500 transition"
                />
                <button className="bg-green-600 text-white px-4 py-2.5 rounded-xl hover:bg-green-700 transition text-sm font-medium">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat