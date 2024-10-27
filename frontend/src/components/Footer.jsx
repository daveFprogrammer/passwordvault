// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <div className="container text-center">
        <p className="mb-0">© 2024 Password Vault. Tutti i diritti riservati.</p>
        <div>
          <a href="#!" className="text-white mx-2">Contatti</a>
          <a href="#!" className="text-white mx-2">Privacy</a>
          <a href="#!" className="text-white mx-2">Termini di servizio</a>
        </div>
        <div className="mt-2">
          <a href="#!" className="text-white mx-1">Facebook</a>
          <a href="#!" className="text-white mx-1">Twitter</a>
          <a href="#!" className="text-white mx-1">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
