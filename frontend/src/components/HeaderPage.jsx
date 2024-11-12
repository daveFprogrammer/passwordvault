<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../ProfileContext";
import logovault from "./assets/logovault.jpeg"; // Importa l'immagine
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userfree from "./assets/userfree.jpg"; // Importa l'immagine
import logovault from "./assets/logovault.jpeg"; // Importa l'immagine

>>>>>>> 0ef8e03f2518b86d3ea13e5468b4636e2ad0d17a

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profile } = useProfile(); // Ottieni il profilo dal contesto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={logovault}
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
<<<<<<< HEAD
                <div className="ml-8 flex items-baseline space-x-2 overflow-x-auto">
                  <Link to="/" className="rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white">Home</Link>
                  <Link to="/Team" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Il nostro Team</Link>
                  <Link to="/vault" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Cassaforte</Link>
                  <Link to="/generate" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Generatore di password</Link>
                  <Link to="/chisiamo" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Chi Siamo</Link>
                  <Link to="/indietro" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Torna indietro</Link>
                </div>
=======
>>>>>>> 0ef8e03f2518b86d3ea13e5468b4636e2ad0d17a
              <div className="ml-8 flex items-baseline space-x-2 overflow-x-auto">
                <Link to="/" className="rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white" aria-current="page">Home</Link>
                <Link to="/Team" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Il nostro Team</Link>
                <Link to="/vault" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Cassaforte</Link>
                <Link to="/generate" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Generatore di password</Link>
                <Link to="/chisiamo" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Chi Siamo</Link>
                <Link to="/indietro" className="rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Torna indietro</Link>
              </div>

              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Dropdown del profilo */}
                <div className="relative ml-3">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
<<<<<<< HEAD
                    <img className="h-8 w-8 rounded-full" src={profile.avatar} alt="User avatar" />
=======
                    <img className="h-8 w-8 rounded-full" src={userfree} alt="User avatar" />
>>>>>>> 0ef8e03f2518b86d3ea13e5468b4636e2ad0d17a
                  </button>

                  {isMenuOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <p className="block px-4 py-2 text-sm text-gray-700">Ciao, {profile.username}!</p>
                      <Link to="/profilo" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                        Your Profile
                      </Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                        Settings
                      </Link>
                      <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                        Sign Out
                      </Link>
                      <Link to="/profilo" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Your Profile</Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Settings</Link>
                      <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPage;
