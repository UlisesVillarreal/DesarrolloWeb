import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import NavbarAdmin from './components/navbarAdmin/NavbarAdmin'

function App() {
  

  return (
    <>
      <NavbarAdmin/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
