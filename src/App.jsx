import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './componets/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/sign-in' element={<SignIn/>}/>
        <Route  path='/sign-up' element={<SignOut/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
