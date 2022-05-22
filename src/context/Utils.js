import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export default function UtilsProvider({ children }) {
    const booksFavorites = JSON.parse(localStorage.getItem("favorite-books") || '[]')

    const [favorites, setFavorites] = useState(booksFavorites);

    return (
        <UtilsContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </UtilsContext.Provider>
    );
}

export function useUtils() {
    const context = useContext(UtilsContext);
    if (!context) throw new Error("useCount must be used within a UtilsProvider");
    const { favorites, setFavorites } = context;
    return { favorites, setFavorites };
}