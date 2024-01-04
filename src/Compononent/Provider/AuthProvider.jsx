/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUserUser] = useState(JSON.parse(localStorage.getItem("user")));
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);
    
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUserUser }}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;