import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initializing = "initial_structure"
    return (
        <AuthContext.Provider value={{ initializing }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useCount must be used within a AuthProvider");
    const { initializing } = context;
    return { initializing };
}
