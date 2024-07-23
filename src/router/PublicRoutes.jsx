import { Navigate } from "react-router-dom"

export const PublicRoutes = ({ children }) => {
    const isAuth = true
    return ( isAuth )
        ? children
        : <Navigate to='/' />
}