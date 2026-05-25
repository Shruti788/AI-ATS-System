import React from 'react'

function Hero () {
  return (
    <section className = "text-center py-20 bg-gray-100">
        <h1 className = "text-5xl font-bold mb-6">
            Smart AI Applicant Tracking System
        </h1>

        <p className = "text-gray-600 text-1g mb-8">
            Upload resumes and get AI-powered analysis instantly
        </p>

        <button className = "bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Get Started
        </button>

    </section>
  )
}

export default Hero