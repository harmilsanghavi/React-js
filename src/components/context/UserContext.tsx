import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type userContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const userContextDemo = createContext({} as userContextType)

export const UserContext = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return <userContextDemo.Provider value={{ user, setUser }}>{children}</userContextDemo.Provider>
}