import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Review() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (rating === 0) { setError('Please select a rating'); return }
    setLoading(true)
    const { error } = await supabase.from('reviews').insert({
      job_id: id,
      customer_id: user.id,
      installer_id: user.id,
      rating,
      comment,
    })
    if (error) { setError(error.message); setLoading(false) }
    else navigate('/customer/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="text-center mb-8">
            <span className="text-5xl block mb-4">⭐</span>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">How was your experience?</h1>
            <p className="text-gray-500 text-sm">Your review helps other customers choose the right installer</p>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>}

          {/* Star rating */}
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Tap to rate</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="text-4xl transition-transform hover:scale-110"
                >
                  <span className={star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-200'}>★</span>
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very good'}
              {rating === 5 && 'Excellent! 🎉'}
            </p>
          </div>

          {/* Review categories */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: '⏰', label: 'On time' },
              { icon: '🔧', label: 'Professional' },
              { icon: '💬', label: 'Communicative' },
              { icon: '✨', label: 'Clean work' },
              { icon: '💰', label: 'Fair price' },
              { icon: '🔁', label: 'Would rebook' },
            ].map(tag => (
              <button key={tag.label} className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition">
                <span>{tag.icon}</span>{tag.label}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 block mb-2">Write your review <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea
              placeholder="Tell others about your experience — was the installer on time? Was the work done well? Would you recommend them?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500 transition resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || rating === 0}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition disabled:opacity-50 mb-3"
          >
            {loading ? 'Submitting...' : 'Submit review ⭐'}
          </button>
          <Link to="/customer/dashboard">
            <button className="w-full border border-gray-200 text-gray-500 py-3 rounded-xl font-medium hover:border-green-400 transition text-sm">
              Skip for now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Review