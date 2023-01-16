import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/globalState';
import NavBar from './NavBar'
import Home from './Home'
import Signup from './Signup';
import Login from './Login';
import ItemList from './ItemList'
import './App.css';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("/items")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/items' element={<ItemList items={items} />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
