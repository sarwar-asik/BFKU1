import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../Firebase/Firebase'
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'
const auth = getAuth(app)

export const AuthContext = createContext()

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [databaseUser, setDatabaseUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // ==================== Sign Out ====================
  const logout = () => {
    setUser()
    localStorage.clear()
    Swal.fire('Succesfully Logout!', 'You clicked the button!', 'success')
  }

  // Set user in localStorage

  function setUserInLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  // Get User Data on Database

  useEffect(() => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/users/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setDatabaseUser(data.data[0])
      })
  }, [user?.email, user])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    setUser(userData)
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  //==================== select all =================
  const [allChecket, setAllChecket] = useState(false)
  //====================== =========================

  const [balance, setBalance] = useState({})

  useEffect(() => {
    fetch(
      `https://project-khulna-backend-thebrightfuture.vercel.app/userBalance/${user?.userID}`,
    )
      .then((res) => res.json())
      .then((balanceResult) => {
        setBalance(balanceResult)
      })
  }, [user, balance])

  // use usequery instead of using

  const { refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(
        'https://api.github.com/repos/tannerlinsley/react-query',
      ).then((res) => res.json()),
  })

  const authInfo = {
    user,
    setUser,
    databaseUser,
    error,
    setError,
    logout,
    loading,
    setLoading,
    setUserInLocalStorage,
    allChecket,
    setAllChecket,
    balance,
    refetch,
    setBalance,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default UserContext
