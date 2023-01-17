import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

//Lo utilizamos para guardar el usuario

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)
