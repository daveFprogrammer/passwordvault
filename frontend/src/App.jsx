// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartPage from './components/StartPage';
import PasswordGenerator from './components/PasswordGenerator';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage';
import VaultPage from './components/VaultPage';
import Login from './components/Login';
import PasswordList from './components/PasswordList';
import NotFoundPage from './components/NotFoundPage';
import HeaderPage from './components/HeaderPage';
import IlNostroTeam from './components/IlNostroTeam';

const App = () => {
  return (
    <Router>
      <div id="app">
        <HeaderPage /> {/* Header visualizzato su ogni pagina */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/generate" element={<PasswordGenerator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/team" element={<IlNostroTeam />} />
          <Route path="/list" element={<PasswordList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
