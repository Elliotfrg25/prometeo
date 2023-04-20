import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); // eslint-disable-line no-unused-vars

    const signIn = (email, password) => {
        // Aquí puedes agregar la lógica para iniciar sesión del usuario (por ejemplo, llamada a una API)
        console.log("Iniciando sesión:", { email, password });
    };

    const value = {
        currentUser,
        signIn,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

