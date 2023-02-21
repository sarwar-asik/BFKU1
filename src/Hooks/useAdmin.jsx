import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/UserContext'

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAdminLoading, setIsAdminLoading] = useState(true)
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/users/admin/${user?.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.isAdmin)
          setIsAdminLoading(false)
        })
    }
  }, [user?.email, setIsAdmin])
  return [isAdmin, isAdminLoading]
}

export default useAdmin
