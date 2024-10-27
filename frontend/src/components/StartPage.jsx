import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 py-12">
      {/* Titolo principale */}
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Inizia Ora</h1>
      <p className="text-lg text-gray-600 mb-10">Seleziona una delle seguenti opzioni per continuare:</p>

      {/* Pulsanti di opzione */}
      <div className="flex space-x-6 mb-10">
        <Link to="/" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Home
        </Link>
        <Link to="/vault" className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Cassaforte
        </Link>
        <Link to="/generate" className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Generatore di Password
        </Link>
      </div>

      {/* Pulsante "Torna Indietro" */}
      <div>
        <Link to="/" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Torna Indietro
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
