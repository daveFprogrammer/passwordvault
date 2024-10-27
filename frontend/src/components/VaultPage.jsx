import React, { useState, useEffect } from "react";
import BackButton from './BackButton';

function VaultPage() {
  const [passwords, setPasswords] = useState([]);
  const [appName, setAppName] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  const addPassword = () => {
    if (appName.trim() && password.trim() && category.trim()) {
      const newEntry = {
        appName: appName,
        category: category,
        password: password,
        tags: tags.split(",").map(tag => tag.trim()),
      };
      const updatedPasswords = [...passwords, newEntry];
      setPasswords(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setAppName("");
      setCategory("");
      setPassword("");
      setTags("");
    }
  };

  const filteredPasswords = passwords.filter(passwordEntry => {
    const lowerCaseSearch = search.toLowerCase();
    return (
      passwordEntry.category.toLowerCase().includes(lowerCaseSearch) ||
      passwordEntry.appName.toLowerCase().includes(lowerCaseSearch) ||
      passwordEntry.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <BackButton />
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Cassaforte delle Password</h2>

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

        <input
          type="text"
          className="w-full px-4 py-3 mb-6 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Cerca per Categoria, App/Sito o Tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h4 className="text-xl font-semibold mb-4 text-gray-700">Le tue Passwords:</h4>
        <div className="space-y-4">
          {filteredPasswords.length > 0 ? (
            filteredPasswords.map((entry, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-lg font-medium text-gray-800">
                  <strong>App/Sito:</strong> {entry.appName}
                </p>
                <p className="text-gray-600">
                  <strong>Categoria:</strong> {entry.category}
                </p>
                <p className="text-gray-600">
                  <strong>Password:</strong> {entry.password}
                </p>
                <p className="text-gray-600">
                  <strong>Tag:</strong> {entry.tags.join(", ")}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">Nessuna password trovata.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VaultPage;
