import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/UserContext'

const useSubAdmin = () => {
  const [isSubAdmin, setIsSubAdmin] = useState(false)
  const [isSubAdminLoading, setIsSubAdminLoading] = useState(true)
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/users/users/subadmin/${user?.email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setIsSubAdmin(data?.isSubAdmin)
          setIsSubAdminLoading(false)
        })
    }
  }, [user?.email, setIsSubAdmin])
  return [isSubAdmin, isSubAdminLoading]
}

export default useSubAdmin
