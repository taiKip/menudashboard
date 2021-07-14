import React, { ReactNode } from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    
    const [token, setToken] = useState<string|null>(null)
    const IsLoggedIn = token ? true : false;
    const handleLogout = () => {
        setToken(null)
    }
    const handleLogin = (token:string) => {
        setToken(token)
       
    }
    return (
        <AuthContext.Provider value={{token:token,isLoggedIn:IsLoggedIn,login:handleLogin,logout:handleLogout}}>
{children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
