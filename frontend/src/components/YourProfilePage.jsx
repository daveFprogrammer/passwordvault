import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProfile } from "../ProfileContext";
import { useNavigate } from "react-router-dom";

const YourProfilePage = () => {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    profile.avatar || "/path/to/default/avatar.jpg"
  );
  const [phoneNumber, setPhoneNumber] = useState(
    profile.phoneNumber || "+39 123 456 7890"
  );
  const [email, setEmail] = useState(profile.email || "user@example.com");
  const [twoFactorAuth, setTwoFactorAuth] = useState(
    profile.twoFactorAuth || false
  );
  const [loading, setLoading] = useState(false);

  // Recupera il token di autenticazione dal localStorage
  const token = localStorage.getItem("auth_token");

  // Funzione per recuperare i dati del profilo all'inizio
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!token) {
        console.error(
          "Token non trovato. Reindirizzamento alla pagina di login."
        );
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/user/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
        setProfileImage(
          response.data.profile_image || "/path/to/default/avatar.jpg"
        );
        setPhoneNumber(response.data.phone_number || "+39 123 456 7890");
        setEmail(response.data.email || "user@example.com");
        setTwoFactorAuth(response.data.two_factor_auth || false);
      } catch (error) {
        console.error("Errore nel recuperare i dati dell'utente", error);
        if (error.response && error.response.status === 401) {
          alert("Sessione scaduta. Effettua nuovamente il login.");
          navigate("/login");
        }
      }
    };

    fetchProfileData();
  }, [setProfile, navigate, token]);

  // Funzione per gestire l'upload dell'immagine
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Funzione per salvare le modifiche
  const handleSaveChanges = async () => {
    if (!token) {
      alert("Token non trovato. Effettua nuovamente il login.");
      navigate("/login");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("profile_image", profileImage);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    formData.append("two_factor_auth", twoFactorAuth);

    try {
      const response = await axios.put(
        "http://localhost:8000/api/users/user/profile/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(response.data);
      alert("Modifiche salvate con successo!");
    } catch (error) {
      console.error("Errore nel salvare le modifiche", error);
      if (error.response && error.response.status === 401) {
        alert("Sessione scaduta. Effettua nuovamente il login.");
        navigate("/login");
      } else {
        alert(
          "Si è verificato un errore durante il salvataggio delle modifiche."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800">Il tuo profilo</h1>
        <p className="text-gray-500">
          Gestisci le impostazioni del tuo account
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 text-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-gray-300"
            />
            <label
              htmlFor="upload-photo"
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              Cambia immagine
            </label>
            <input
              type="file"
              id="upload-photo"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <div className="col-span-2">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Numero di telefono
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-700">Sicurezza</h2>
            <p className="text-sm text-gray-500">
              Abilita l'autenticazione a due fattori per maggiore sicurezza.
            </p>
            <div className="flex items-center mt-3">
              <span className="mr-2">2FA:</span>
              <button
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  twoFactorAuth
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {twoFactorAuth ? "Abilitato" : "Disabilitato"}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-700">Statistiche</h2>
            <p className="text-sm text-gray-500">Informazioni sull'account.</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Ultimo accesso:{" "}
                <span className="text-gray-700">
                  {profile.lastAccess || "12/11/2024"}
                </span>
              </li>
              <li>
                Password salvate:{" "}
                <span className="text-gray-700">
                  {profile.savedPasswords || 25}
                </span>
              </li>
              <li>
                Livello di sicurezza:{" "}
                <span className="text-green-500">
                  {profile.securityLevel || "Alto"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Salvataggio..." : "Salva modifiche"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourProfilePage;
