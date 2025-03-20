import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6 gap-7'>
    <h1 className="text-3xl font-bold text-gray-800 ">Vaishali Sahni</h1>
    <Login />
    <Profile />
    </div>
    </UserContextProvider>
  )
}

export default App
