// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(false);

    const toogleDarkMode = () => {
        console.log("Seeing no error")
        setDarkMode(!darkmode);
        // You may also save the dark mode preference in localStorage or a state management tool
    };

    return (
        <DarkModeContext.Provider value={{ darkmode, toogleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export { DarkModeProvider, useDarkMode };