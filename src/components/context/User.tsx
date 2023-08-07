import React, { useContext, useState } from 'react'
import { userContextDemo } from './UserContext'



export const User = () => {

    const userContext = useContext(userContextDemo)

    const handleLogin = () => {

        userContext.setUser({
            name: 'jhon',
            email: 'jhon@gmail.com',
        })


    }
    const handleLogout = () => {

        userContext.setUser(null)

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}
