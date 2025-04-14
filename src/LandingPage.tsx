import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Discover my work and experience
        </p>
        <button
          onClick={() => navigate('/portfolio')}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Enter Portfolio
        </button>
      </div>
    </div>
  )
}

export default LandingPage
