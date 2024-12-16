import React from 'react';
import { FaLock, FaBell, } from 'react-icons/fa';

const SettingsPage = () => {



  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">Settings</h1>



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
