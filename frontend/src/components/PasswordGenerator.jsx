import React, { useState } from "react";


function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState("");

  const updateStrength = (pwd) => {
    const lengthScore = pwd.length >= 12 ? 1 : 0;
    const uppercaseScore = /[A-Z]/.test(pwd) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(pwd) ? 1 : 0;
    const numberScore = /\d/.test(pwd) ? 1 : 0;
    const symbolScore = /[!@#$%^&*()]/.test(pwd) ? 1 : 0;

    const totalScore =
      lengthScore + uppercaseScore + lowercaseScore + numberScore + symbolScore;
    if (totalScore <= 2) setStrength("Debole");
    else if (totalScore === 3) setStrength("Media");
    else setStrength("Forte");
  };

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let chars = "";
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) {
      setPassword("Seleziona almeno un tipo di carattere!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
    updateStrength(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copiata negli appunti!");
  };

  const UnSplashImg =
    "https://plus.unsplash.com/premium_photo-1721080250995-5a83519eb2a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="bg-cover bg-center py-24 sm:py-32 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${UnSplashImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Genera una Password Sicura
        </h2>

        {/* Opzioni di personalizzazione */}
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-gray-700 dark:text-gray-300">
            Lunghezza: {length} caratteri
          </span>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2"
            />
            Includi Lettere Maiuscole
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-2"
            />
            Includi Lettere Minuscole
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Includi Numeri
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Includi Simboli
          </label>
        </div>

        {/* Pulsante per generare la password */}
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
          onClick={generatePassword}
        >
          Genera Password
        </button>

        {/* Visualizzazione password */}
        {password && (
          <div className="mt-5 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
            <strong className="text-green-700 dark:text-green-300">
              Password Generata:
            </strong>
            <p className="mt-2 text-lg font-medium text-gray-800 dark:text-white">
              {password}
            </p>
            <button
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500"
              onClick={copyToClipboard}
            >
              Copia negli Appunti
            </button>
          </div>
        )}

        {/* Indicatore di sicurezza */}
        {strength && (
          <div
            className={`mt-4 p-2 rounded text-white ${
              strength === "Forte"
                ? "bg-green-600"
                : strength === "Media"
                ? "bg-yellow-500"
                : "bg-red-600"
            }`}
          >
            Livello di Sicurezza: {strength}
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
