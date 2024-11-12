import React from 'react';
import { FaEnvelope, FaLock, FaBell, FaUser } from 'react-icons/fa';

const SettingsPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Settings</h1>

        {/* Account Information Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaUser className="text-blue-500" /> Account Information
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                className="bg-transparent focus:outline-none w-full"
                placeholder="Enter new email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center bg-gray-50 border border-gray-300 rounded-md p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="bg-transparent focus:outline-none w-full"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold mt-4">Save Changes</button>
        </div>

        {/* Preferences Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaBell className="text-yellow-500" /> Notifications
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Push Notifications</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaLock className="text-red-500" /> Security Settings
          </h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold">Enable</button>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Manage Sessions</label>
            <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-semibold">View Active Sessions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
