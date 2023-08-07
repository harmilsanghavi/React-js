import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarPanel } from './NavBarPanel'
import { Provider } from 'react-redux'
import Store from '../store/Store'

export const RootyLayout = () => {
    return (
        <div className='container'>
            <Provider store={Store} >
                <NavBarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </div>
    )
}
