import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Effettua la richiesta POST al nuovo endpoint del backend Django
      await axios.post("http://localhost:8000/api/users/register/", {
        username,
        password,
        email,
      });
      
      alert("Registrazione completata!");
      navigate("/login");
    } catch (error) {
      console.error("Errore durante la registrazione:", error);
      setError(
        error.response?.data?.message || "Errore durante la registrazione."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 py-12">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Registrati</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <label className="text-gray-700">Nome utente:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-gray-700">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Registrati
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Torna Indietro
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
