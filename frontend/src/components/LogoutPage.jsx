import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Effettua eventuali operazioni di logout come la pulizia dei dati dell'utente
    localStorage.removeItem('auth_token'); // Esempio: rimuovere i dati di autenticazione
    // Reindirizza alla homepage dopo il logout
    setTimeout(() => {
      navigate('/');
    }, 3000); // Attendi 3 secondi prima di reindirizzare
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Logout Effettuato</h2>
        <p className="text-gray-600 mb-6">Sei stato disconnesso con successo. Sarai reindirizzato alla home tra pochi secondi...</p>
        <div className="loader mb-6"></div> {/* Aggiunta di una semplice animazione */}
        <button 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
          onClick={() => navigate('/')}
        >
          Torna alla Home
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
