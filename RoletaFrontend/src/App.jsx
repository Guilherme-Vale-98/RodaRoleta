import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './Components/Register'
import Login from './Components/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Form/>}></Route>
    </Routes>

    </>
  )
}

export default App
