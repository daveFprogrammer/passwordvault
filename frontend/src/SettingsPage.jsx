import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaBell, FaUser } from "react-icons/fa";
import TextInput from "./components/TextInput"; // Componente per gli input di testo
import ToggleSwitch from "./components/ToggleSwitch"; // Componente per i toggle
import axios from "axios";

const SettingsPage = () => {
  // Stato iniziale
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
    push: false,
  });

  // Carica i dati iniziali
  useEffect(() => {
    axios.get("/api/settings") // Usa la tua endpoint o un mock locale
      .then((res) => {
        setEmail(res.data.email);
        setNotifications(res.data.notifications);
      })
      .catch((err) => console.error(err));
  }, []);

  // Salva le modifiche
  const handleSaveChanges = () => {
    const updatedSettings = { email, password, notifications };
    axios.post("/api/settings", updatedSettings) // Endpoint per salvare
      .then(() => alert("Impostazioni salvate con successo!"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Impostazioni</h1>

        {/* Sezione Informazioni Account */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaUser className="text-blue-500" /> Informazioni Account
          </h2>
          <TextInput
            label="Indirizzo Email"
            icon={<FaEnvelope />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Password"
            icon={<FaLock />}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSaveChanges}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold mt-4"
          >
            Salva Modifiche
          </button>
        </div>

        {/* Sezione Notifiche */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaBell className="text-yellow-500" /> Notifiche
          </h2>
          {["email", "sms", "push"].map((type) => (
            <ToggleSwitch
              key={type}
              label={`Notifiche ${type.toUpperCase()}`}
              checked={notifications[type]}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, [type]: checked }))
              }
            />
          ))}
        </div>

        {/* Sezione Sicurezza */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            <FaLock className="text-red-500" /> Impostazioni di Sicurezza
          </h2>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold">
            Abilita Autenticazione a Due Fattori
          </button>
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-semibold">
            Visualizza Sessioni Attive
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
