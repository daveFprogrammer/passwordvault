import React, { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    avatar: "/path/to/default/avatar.jpg",
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

export const useProfile = () => useContext(ProfileContext);
