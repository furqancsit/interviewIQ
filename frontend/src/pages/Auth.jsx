import React from 'react'

const Auth = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Modal Box */}
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-2">InterviewIQ.AI</h1>

        <h2 className="text-lg font-semibold mb-4">
          Continue with <span className="text-blue-600">AI Smart Interview</span>
        </h2>

        <p className="text-gray-600 mb-6">
          Sign in to start AI-powered mock interviews, track your progress,
          and unlock detailed performance insights.
        </p>

        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 px-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 active:scale-95 cursor-pointer">

          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-400 flex items-center justify-center text-white font-bold text-sm ">
            G
          </div>

          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  )
}

export default Auth