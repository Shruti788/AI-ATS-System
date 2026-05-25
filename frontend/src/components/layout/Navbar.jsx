import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">

      <Link to="/">
  <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
    AI ATS
  </h1>
</Link>

     <div className="flex gap-6 items-center">

  <Link to="/" className="text-gray-700 hover:text-blue-600">
    Home
  </Link>

  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
    Dashboard
  </Link>

  <Link to="/login">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      Login
    </button>
  </Link>

  <Link to="/signup">
    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
      Signup
    </button>
  </Link>

</div>
    </nav>
  )
}

export default Navbar