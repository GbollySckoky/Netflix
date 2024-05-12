import React from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Inputs/Login'
const App = () => {
  const user = null
  return (
    <div className='app'>
      <BrowserRouter >
      <Routes>
        {!user ?(
         <Route path='/'  element={<Login />} />
        ):(
          <Route path="/home" element={<HomeScreen />} />
        )
        }
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App