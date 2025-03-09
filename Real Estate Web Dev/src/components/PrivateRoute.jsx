import React from 'react'
import { Navigate,Outlet } from 'react-router'

function PrivateRoute() {
    const loggedIn = false
   
    return loggedIn ? <Outlet/> : <Navigate to="/signin"/>
    }

export default PrivateRoute
