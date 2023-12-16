import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LiveRace from './pages/LiveRace'
import Test from './pages/Test'

function App() {

  return (
    <>
    <Routes>
      <Route path='/race-track/' element={<Home />}/>
      <Route path='/race-track/live' element={<LiveRace />} />
      <Route path='/race-track/test' element= {<Test />}/>
    </Routes>
    </>
  )
}

export default App
