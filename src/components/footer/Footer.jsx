import React from 'react'
import estilos from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={estilos.footer}>

      {/* logo */}
      <section className={estilos.logo}>
        <img src="./src/assets/Logo.png" alt="logo" />
      </section>

      {/* integrantes */}
      <section className={estilos.datosIntegrantes}>
        <ul>
          <li>Amerise Román, Camila Belén || Colque, Micaela Tania</li>
          <li>Sánchez, Pablo || Suares, Marisa Sofía</li>
          <li>Villarreal, Maximiliano Ulises</li>
        </ul>
      </section>

      {/* datosInstituto */}
      <section className={estilos.datosInstituto}>
        <ul>
          <li>Instituto Superior del Milagro</li>
          <li>n°8207 - 2026</li>
          <li>Salta- Capital</li>
        </ul>
      </section>
    </footer>
  )
}

