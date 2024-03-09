import React from 'react'
import isLogin from '../../utils'
import { Navigate,Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    let isUserLogin = isLogin("ShM")
  return (
    <div>
        {
            isUserLogin ? (
                <Outlet/>
            ):(
                <Navigate to="/home" />
            )
        }
    </div>
  )
}
