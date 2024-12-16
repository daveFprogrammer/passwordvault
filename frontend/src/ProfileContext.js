import React, { createContext, useState, useEffect, useContext } from "react";
import userfree from "./components/assets/userfree.jpg"; // Aggiorna il percorso se necessario

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    avatar: userfree, // Avatar di default
    phoneNumber: "+39 123 456 7890",
    email: "user@example.com",
    twoFactorAuth: false,
    lastAccess: new Date().toLocaleDateString(),
    savedPasswords: 0,
    securityLevel: "Alto",
  });

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:8000/api/passwords/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante il recupero del numero di password");
        }
        return response.json();
      })
      .then((data) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          savedPasswords: data.length,
        }));
      })
      .catch((error) => {
        console.error("Errore nel recupero delle password salvate:", error);
      });
  }, [token]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook personalizzato per utilizzare il contesto
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "useProfile deve essere usato all'interno di ProfileProvider"
    );
  }
  return context;
};
