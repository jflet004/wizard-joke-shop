import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => {
        setUser(data)
      })
      .catch(error => console.log(error))
  }, [])

  const signup = (user) => { 
    setUser(user)
  }
  const login = () => { }
  const logout = () => { }

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }