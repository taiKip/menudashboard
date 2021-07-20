import { createContext } from "react";
interface IAuthState{
    token: string|null,
    isLoggedIn: boolean,
    login: (token: string,expiresIn:Date) =>void,
    logout:()=>void
    
}
export const AuthContext = createContext<IAuthState>({token:'',isLoggedIn:false,login:(token,expiresIn)=>{},logout:()=>{}})