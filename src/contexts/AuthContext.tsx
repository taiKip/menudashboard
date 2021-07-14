import { createContext } from "react";
interface IAuthState{
    token: string|null,
    isLoggedIn: boolean,
    login: (token: string) =>void,
    logout:()=>void
    
}
export const AuthContext = createContext<IAuthState>({token:'',isLoggedIn:false,login:(token)=>{},logout:()=>{}})