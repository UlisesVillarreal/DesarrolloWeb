import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import NavbarEmpleados from './components/navbarEmpleados/NavbarEmpleados'

function App() {
  

  return (
    <>
      <NavbarEmpleados/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
