import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
     <div className="app">
      <Navbar/>
        <div className="container">
          <Outlet/>
        </div>
     </div>
    </>
  )
}

export default App
