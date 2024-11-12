import React from "react";
import securityImage from "./assets/securityImage.jpeg"; // Importa l'immagine
import organizzazioneFacile from "./assets/organizzazioneFacile.jpeg"; // Importa l'immagine
import easyPass from "./assets/easyPass.jpeg"; // Importa l'immagine
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Benvenuto in Password Vault</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La tua cassaforte personale per password e codici di sicurezza. Non dimenticare mai più le tue credenziali!
        </p>
        <Link to="/login" className="mt-8 inline-block text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Accedi
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300">
          <h4 className="text-xl p-2 text-center font-semibold text-gray-800">Massima Sicurezza</h4>
          <img src={securityImage} alt="Sicurezza" className="w-36 h-36 rounded-full mb-4 mx-auto shadow-md" />          
          <p className="text-gray-600">Le tue password sono cifrate e al sicuro, accessibili solo da te.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300">
        <h4 className="text-xl p-2 font-semibold text-center text-gray-800">Organizzazione Facile</h4>
          <img src={organizzazioneFacile} alt="Organizzazione" className="w-36 h-36 rounded-full mb-4 mx-auto shadow-md" />          
          <p className="text-gray-600">Organizza le tue password per categorie e tag per un facile accesso.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300">
        <h4 className="text-xl p-2 font-semibold text-center text-gray-800">Accesso Facile</h4>
          <img src={easyPass} alt="Accesso Facile" className="w-36 h-36 rounded-full mb-4 mx-auto shadow-md" />          
          <p className="text-gray-600">Accedi rapidamente alle tue password con la nostra interfaccia intuitiva.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Link to="/signup" className="text-white bg-gradient-to-r from-green-500 to-teal-600 px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
          Registrati
        </Link>
      </div>
    </div>
  );
};

export default HomePage;