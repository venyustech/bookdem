import React, { createContext, useContext, useState } from "react";
import { getUser } from "../services/api";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useCount must be used within a AuthProvider");
  const { token, setToken } = context;
  return { token, setToken };
}
