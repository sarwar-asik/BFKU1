import { useEffect, useState } from 'react'

const useJwtToken = (email) => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    if (email) {
      fetch(
        `https://project-khulna-backend-thebrightfuture.vercel.app/jwt?email=${email}`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accesToken) {
            localStorage.setItem('accesToken', data.accesToken)
            setToken(data.accesToken)
          }
        })
    }
  }, [email])

  return [token]
}

export default useJwtToken
