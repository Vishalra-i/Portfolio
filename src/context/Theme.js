import { Context,createContext } from "react";
import { useContext } from "react";

export const  Theme= createContext({
    thememode:"dark",
    mode:true,
    darkmode:()=>{},
    lightmode:()=>{}
})

export const Themeprovider = Theme.Provider

export default function useTheme() {
    return useContext(Theme)
 }

