import React, { useState } from "react";
import BackButton from './BackButton';

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <BackButton />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Genera una Password Sicura</h2>
        <button 
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
          onClick={generatePassword}
        >
          Genera Password
        </button>

        {password && (
          <div className="mt-5 p-4 bg-green-100 rounded-lg">
            <strong className="text-green-700">Password Generata:</strong> 
            <p className="mt-2 text-lg font-medium text-gray-800">{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
