import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Signup from './Signup';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then(user => setUser(user))
        }
      })
  }, [])

  if (!user) return <Home />

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup onLogin={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
