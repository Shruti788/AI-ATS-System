import { useState } from "react";
import API from "../api/api";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful");

      window.location.href = "/login";

    } catch (err) {

      alert(err.response.data.message);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Signup
        </button>

      </div>

    </div>

  );
}

export default Signup;