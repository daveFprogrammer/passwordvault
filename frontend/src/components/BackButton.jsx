import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transform transition-all duration-300"
      onClick={() => navigate(-1)}
    >
      Torna Indietro
    </button>
  );
};

export default BackButton;
