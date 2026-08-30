import React from 'react'
import estilos from './NavbarAdmin.module.css'

export default function NavbarEmpleados() {
  return (
    <header className={estilos.header}>

      {/* logo */}

      <div className={estilos.logoNavbar}>
        <img src="./src/assets/Logo.png" alt="logo" />
        <p>TEMPLE <span>ESTÉTIQUE</span></p>
      </div>

      {/* navbar */}

      <nav className={estilos.navbar}>

        <ul>
          <li><a href=""><strong> Inicio </strong></a></li>
          <p>|</p>
          <li><a className={estilos.desabilitado} href=""><strong> Jornada </strong></a></li>
          <p>|</p>
          <li><a className={estilos.desabilitado} href=""><strong> Servicios </strong></a></li>
          <p>|</p>
          <li><a className={estilos.desabilitado} href=""><strong> Consultas </strong></a></li>
        </ul>

      </nav>

      {/* perfil */}

      <div className={estilos.perfil}>
        <span>Hola, <strong>UserName </strong></span>
        <img src="src/assets/UserDefectImg.webp" alt="perfil" />
      </div>

    </header>
  )
}
