import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import ResumeUpload from "./components/upload/ResumeUpload";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      {/* NAVBAR ALWAYS SHOWS */}
      <Navbar />

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<ResumeUpload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;