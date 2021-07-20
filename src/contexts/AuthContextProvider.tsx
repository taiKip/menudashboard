import { Console } from 'console'
import React, { ReactNode } from 'react'
import { useState,useEffect } from 'react'
import { AuthContext } from './AuthContext'
const calculteExpiry = (time: Date) => {
    const remainingTime = time.getTime() - new Date().getTime()
    return remainingTime;
}
let logoutTimer: NodeJS.Timeout;

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
 
    const storedToken = localStorage.getItem('token');
    const [token, setToken] = useState<string|null>(storedToken?storedToken:null)
    const IsLoggedIn = token ? true : false;
    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken(null)
        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }
    const handleLogin = (token:string,expiresIn:Date) => {
        setToken(token)
        localStorage.setItem("token", token)
     logoutTimer= setTimeout(handleLogout,calculteExpiry(expiresIn))
    }
  
    return (
        <AuthContext.Provider value={{token:token,isLoggedIn:IsLoggedIn,login:handleLogin,logout:handleLogout}}>
{children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
