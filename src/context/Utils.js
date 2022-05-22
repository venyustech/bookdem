import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export default function UtilsProvider({ children }) {
    const [searchBarOpened, setSearchBarOpened] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    console.log(` ${searchInput}`);

    return (
        <UtilsContext.Provider value={{
            searchBarOpened, setSearchBarOpened,
            searchInput, setSearchInput
        }}>
            {children}
        </UtilsContext.Provider>
    );
}

export function useUtils() {
    const context = useContext(UtilsContext);
    if (!context) throw new Error("useCount must be used within a UtilsProvider");
    const { searchBarOpened, setSearchBarOpened, searchInput, setSearchInput } = context;
    return {
        searchBarOpened, setSearchBarOpened,
        searchInput, setSearchInput
    };
}