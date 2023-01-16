import React, { useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/globalState'

const Signup = () => {

  // const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorList, setErrorList] = useState([])
  const { signup } = useContext(UserContext)

  const handleSubmit = (e) => {

    e.preventDefault()

    fetch("/signup", {
      method: "POST",  // configuration object
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      })
    })
      .then(r => r.json())
      .then(user => {
        if (!user.errors) {
          signup(user)
          // navigate("/")
        } else {
          setUsername("")
          setPassword("")
          setPasswordConfirmation("")
          const errorLis = user.errors.map(error => 
            <li>
              {error}
            </li>)
          setErrorList(errorLis)
        }
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {errorList}
      </ul>
    </div>
  )
}

export default Signup
