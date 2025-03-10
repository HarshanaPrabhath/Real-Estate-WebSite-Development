import React from 'react'
import { Navigate,Outlet } from 'react-router'
import useAuthStatus from '../hooks/useAuthStatus'

function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus
   
    return loggedIn ? <Outlet/> : <Navigate to="/signin"/>
    }

export default PrivateRoute
