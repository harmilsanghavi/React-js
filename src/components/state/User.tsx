import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = (props : AuthUser) => {

    const [user, setUser] = useState({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: props.name,
            email: props.email,
        })
    }
    const handleLogout = () => {
        setUser({} as AuthUser)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}
