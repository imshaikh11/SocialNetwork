import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App