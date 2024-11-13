// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from "./ProfileContext";
import HomePage from './components/HomePage';
import PasswordGenerator from './components/PasswordGenerator';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage';
import VaultPage from './components/VaultPage';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import HeaderPage from './components/HeaderPage';
import IlNostroTeam from './components/IlNostroTeam';
import ChiSiamo from './components/ChiSIamo';
import SettingsPage from './components/SettingsPage'
import YourProfilePage from './components/YourProfilePage';
import SignOut from './components/SignOut';
import ContattaSupporto from './components/ContattaSupporto';

const App = () => {
  return (
    
      
      <ProfileProvider>
      <Router>
      <div id="app">
        <HeaderPage /> {/* Header visualizzato su ogni pagina */}
        <Routes>
          <Route path="/" element={<HomePage />} />     
          <Route path="/generate" element={<PasswordGenerator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/team" element={<IlNostroTeam />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/profilo" element={<YourProfilePage />} />
          <Route path="/contatta-supporto" element={<ContattaSupporto />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      </Router>
      </ProfileProvider>
  );
};

export default App;
