/* eslint-disable react/prop-types */
import { Navigate } from "react-router"
import React from "react";

export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "admin") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}