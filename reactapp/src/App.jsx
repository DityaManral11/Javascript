import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {add,subtract} from './utility'
import Sample from './component/Sample'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './UserContext'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      <UserContext.Provider value = {name}>
        <Routes>
          <Route path='homepage' element={<HomePage/>}>
            <Route path='sample' element={<Sample/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>
      </UserContext.Provider>
      
    </>
  )
}

export default App