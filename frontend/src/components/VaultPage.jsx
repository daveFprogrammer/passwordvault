import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "./BackButton";

function VaultPage() {
  const [passwords, setPasswords] = useState([]);
  const [appName, setAppName] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState({}); // Stato per controllare visibilità delle password

  useEffect(() => {
    const fetchPasswords = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        alert("Accesso negato. Verifica di essere autenticato.");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:8000/api/passwords/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPasswords(response.data);
      } catch (error) {
        console.error("Errore durante il recupero delle password:", error);
      }
    };

    fetchPasswords();
  }, []);

  const addPassword = async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      alert("Accesso negato. Verifica di essere autenticato.");
      return;
    }

    if (appName.trim() && password.trim() && category.trim()) {
      const newEntry = {
        app_name: appName,
        category: category,
        password: password,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .join(","),
      };

      try {
        const response = await axios.post(
          "http://localhost:8000/api/passwords/",
          newEntry,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Includi il token
            },
          }
        );
        setPasswords([...passwords, response.data]);
        setAppName("");
        setCategory("");
        setPassword("");
        setTags("");
      } catch (error) {
        console.error("Errore aggiungendo la password:", error);
      }
    }
  };

  const deletePassword = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/passwords/${id}/`);
      setPasswords(
        passwords.filter((passwordEntry) => passwordEntry.id !== id)
      );
    } catch (error) {
      console.error("Error deleting password:", error);
    }
  };

  const toggleShowPassword = (id) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPasswords = passwords.filter((passwordEntry) => {
    const lowerCaseSearch = search.toLowerCase();
    return (
      passwordEntry.category.toLowerCase().includes(lowerCaseSearch) ||
      passwordEntry.app_name.toLowerCase().includes(lowerCaseSearch) ||
      passwordEntry.tags
        .split(",")
        .some((tag) => tag.toLowerCase().includes(lowerCaseSearch))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <BackButton />
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Cassaforte delle Password
        </h2>

        {/* Form di aggiunta password */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Nome App/Sito"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
          <input
            type="text"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            placeholder="Tag (separati da virgola)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:scale-105 transform transition-all duration-300"
            onClick={addPassword}
          >
            Aggiungi Password
          </button>
        </div>

        {/* Campo di ricerca */}
        <input
          type="text"
          className="w-full px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Cerca per Categoria, App/Sito o Tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Visualizzazione delle password */}
        <h4 className="text-xl font-semibold mb-4 text-gray-700">
          Le tue Passwords:
        </h4>
        <div className="space-y-4">
          {filteredPasswords.length > 0 ? (
            filteredPasswords.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-lg font-medium text-gray-800">
                  <strong>App/Sito:</strong> {entry.app_name}
                </p>
                <p className="text-gray-600">
                  <strong>Categoria:</strong> {entry.category}
                </p>
                <p className="text-gray-600 flex items-center">
                  <strong>Password:</strong>
                  <span className="ml-2">
                    {showPassword[entry.id] ? entry.password : "●●●●●●●●"}
                  </span>
                  <button
                    onClick={() => toggleShowPassword(entry.id)}
                    className="ml-2 text-blue-500 focus:outline-none"
                  >
                    {showPassword[entry.id] ? "👁️" : "🙈"}
                  </button>
                </p>
                <p className="text-gray-600">
                  <strong>Tag:</strong>{" "}
                  {entry.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
                <button
                  className="mt-2 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  onClick={() => deletePassword(entry.id)}
                >
                  Elimina Password
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">
              Nessuna password trovata.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VaultPage;
