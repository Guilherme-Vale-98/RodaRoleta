import { useCallback, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './Components/Register'
import Login from './Components/Login'
import Match from './Components/Match/Match'
import { logout } from './slices/sliceAuth'
import { useDispatch } from 'react-redux'
import AuthVerify from './services/authVerify'


function App() {

  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Form/>}></Route>
      <Route path='/match' element={<Match/>}></Route>
    </Routes>
    <AuthVerify logOut={logOut}/>
    </>
  )
}

export default App
