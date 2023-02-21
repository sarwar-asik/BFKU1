import React, { useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/UserContext'
import useAdmin from '../Hooks/useAdmin'
// import Loading from "../Pages/Sheard/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)

  const location = useLocation()

  if (loading || isAdminLoading) {
    return (
      <>
        <h1 className="text-center my-6">
          You are not authorized to access this page. Please login as an admin.
          <br />
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </h1>
      </>
    )
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default AdminRoute
