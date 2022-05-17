import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialToken = localStorage.getItem("token")

    const [token, setToken] = useState(initialToken);

    const initializing = "initial_structure"
    return (
        <AuthContext.Provider value={{ initializing, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useCount must be used within a AuthProvider");
    const { initializing, token, setToken } = context;
    return { initializing, token, setToken };
}
