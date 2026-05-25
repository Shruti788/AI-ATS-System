import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/ui/Hero'
import ResumeUpload from '../components/upload/ResumeUpload'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <Hero />

      <ResumeUpload />

    </div>
  )
}

export default Home