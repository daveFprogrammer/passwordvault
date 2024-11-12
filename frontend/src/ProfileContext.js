import React, { createContext, useState, useContext } from "react";
import userfree from "./components/assets/userfree.jpg"; // Aggiorna il percorso se necessario


const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    avatar: userfree, // Avatar di default
    phoneNumber: "+39 123 456 7890",
    email: "user@example.com",
    twoFactorAuth: false,
    lastAccess: "12/11/2024",
    savedPasswords: 25,
    securityLevel: "Alto",
  });

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
    throw new Error("useProfile deve essere usato all'interno di ProfileProvider");
  }
  return context;
};
