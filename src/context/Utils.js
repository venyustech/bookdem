import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export default function UtilsProvider({ children }) {
    const booksFavorites = JSON.parse(localStorage.getItem("favorite-books") || '[]')
    const myGroupsList = JSON.parse(localStorage.getItem("my-groups") || '[]')

    const [favorites, setFavorites] = useState(booksFavorites);
    const [myGroups, setMyGroups] = useState(myGroupsList);

    return (
        <UtilsContext.Provider value={{ favorites, setFavorites, myGroups, setMyGroups }}>
            {children}
        </UtilsContext.Provider>
    );
}

export function useUtils() {
    const context = useContext(UtilsContext);
    if (!context) throw new Error("useCount must be used within a UtilsProvider");
    const { favorites, setFavorites, myGroups, setMyGroups } = context;
    return { favorites, setFavorites, myGroups, setMyGroups };
}