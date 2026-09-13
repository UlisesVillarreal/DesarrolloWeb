import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import NavbarAdmin from './components/navbarAdmin/NavbarAdmin'

function App() {

  return (
    <div className="app">
      <NavbarAdmin />

      <main className="main">
        <Main />
      </main>

      <Footer />
    </div>
  )
}

export default App