import { createContext } from "react";
const AuthContext= createContext(
{
    token:null,
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
}
);
export default AuthContext;
