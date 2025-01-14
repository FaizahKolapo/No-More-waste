import React from "react";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    setCurrentUser(null);
    const res = await axios.post("http://localhost:8800/api/auth/logout");
  };

  useEffect(() => {
    //console.log(JSON.stringify(currentUser));
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
