import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
