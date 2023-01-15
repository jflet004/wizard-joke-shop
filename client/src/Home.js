import React, { useContext } from 'react'
import { UserContext } from './context/globalState'

const Home = () => {

  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
      <h1>Please Login or Signup</h1>
    )
  } else {
    return (
      <div>
        <h1>{user.username} Home</h1>
      </div>
    )
  }
}

export default Home