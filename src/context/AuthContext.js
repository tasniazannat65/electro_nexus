'use client';
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=> {
        fetch('/api/auth')
        .then(res=> res.json())
        .then(data => setIsLoggedIn(data.loggedIn)

        )
    }, []);
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}

        </AuthContext.Provider>
    )
    
}
export function useAuth(){
    return useContext(AuthContext);
}