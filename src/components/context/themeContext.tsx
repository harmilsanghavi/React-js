import { createContext } from "react"
import { theme } from "./theme"

type themeContextProviderProps={
    children:React.ReactNode
}

export const themeContext=createContext(theme)

export const ThemeContext = ({children}:themeContextProviderProps) =>{
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>
}