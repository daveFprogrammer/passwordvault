import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContattaSupporto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: '',
    messaggio: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica per inviare il modulo (puoi aggiungere integrazione con email API)
    console.log('Form inviato:', formData);
    setSuccessMessage('Il tuo messaggio è stato inviato con successo!');
    setFormData({
      nome: '',
      email: '',
      oggetto: '',
      messaggio: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contatta il Supporto</h1>
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {successMessage && (
            <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 rounded-lg">
              {successMessage}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Inserisci il tuo nome"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Inserisci la tua email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Oggetto</label>
            <input
              type="text"
              name="oggetto"
              value={formData.oggetto}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Inserisci l'oggetto del messaggio"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Messaggio</label>
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Scrivi il tuo messaggio"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md font-semibold transition duration-300"
          >
            Invia Messaggio
          </button>
        </form>

        <div className="mt-8 text-gray-700 dark:text-gray-300">
          <h2 className="text-xl font-semibold mb-4">Informazioni di contatto</h2>
          <p className="flex items-center gap-2">
            <FaEnvelope /> supporto@tuodominio.it
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> +39 123 456 789
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Via Roma, 123, Milano, Italia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContattaSupporto;
