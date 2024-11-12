import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaBell, FaUser, FaMoon, FaSun } from 'react-icons/fa';

const SettingsPage = () => {
  // Stato per il dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Carica la preferenza dal localStorage al caricamento
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Funzione per switchare il tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">Settings</h1>

        {/* Dark Mode Switch */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            {darkMode ? <FaMoon className="text-yellow-500" /> : <FaSun className="text-yellow-500" />}
            Dark Mode
          </h2>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md"
          >
            {darkMode ? 'Disattiva' : 'Attiva'}
          </button>
        </div>

        {/* Account Information Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaUser className="text-blue-500" /> Account Information
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                className="bg-transparent focus:outline-none w-full text-gray-800 dark:text-white"
                placeholder="Enter new email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="bg-transparent focus:outline-none w-full text-gray-800 dark:text-white"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold mt-4">
            Save Changes
          </button>
        </div>

        {/* Notifications Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaBell className="text-yellow-500" /> Notifications
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">SMS Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
            <FaLock className="text-red-500" /> Security Settings
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Two-Factor Authentication</label>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold">
              Enable
            </button>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Manage Sessions</label>
            <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:text-white py-2 rounded-md font-semibold">
              View Active Sessions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
