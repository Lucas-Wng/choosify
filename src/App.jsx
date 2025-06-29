import { useState } from 'react'
import './App.css'

function App() {
  const [permutation, setPermutation] = useState([])
  const [confidence, setConfidence] = useState(null)
  const [loading, setLoading] = useState(false)

  function generatePermutation() {
    setLoading(true)
    setTimeout(() => {
      const nums = Array.from({ length: 11 }, (_, i) => i + 2)
      for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
      setPermutation(nums)
      setConfidence((Math.random() * 100).toFixed(2))
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Choosify™</h1>
      <p className="text-lg text-gray-600 mb-2">
        Empowering scalable emotional synergies and frictionless paradigms of tomorrow.
      </p>
      <p className="text-lg text-gray-600 mb-6">Your agency, automatically optimized.</p>

      <button
        onClick={generatePermutation}
        className="px-6 py-3 mb-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Let the Algorithm Decide™
      </button>

      {loading ? (
        <p className="text-gray-500 text-sm italic mt-4 animate-pulse">
          Optimizing user experience…
        </p>
      ) : permutation.length > 0 && (
        <>
          <div className="max-w-xs sm:max-w-md break-words text-sm text-gray-700 font-mono">
            <span className="font-semibold">Follow this page sequence:</span> {permutation.join(', ')}
          </div>
          <p className="text-xs text-gray-500 italic mt-2">
            Decision Confidence: <span className="text-blue-600 font-semibold">{confidence}%</span>
          </p>
        </>
      )}
    </div>
  )
}

export default App