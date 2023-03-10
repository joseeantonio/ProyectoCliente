import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext.jsx'

const LayoutPrivate = () => {
  const { user } = useUserContext()
  const navigate = useNavigate()

  //Comprobamos si el usuario esta logueado

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutPrivate
