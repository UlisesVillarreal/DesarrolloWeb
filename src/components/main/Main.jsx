import React from 'react'
import estilos from './Main.module.css'

export default function Main() {
  return (
    <div>
        <main className={estilos.contenido}>
          <h3 className={estilos.subtitulos}>Bienvenidos a</h3>
          <h1 className={estilos.titulo}>EL SISTEMA DE GESTION INTEGRAL</h1>
          <h3 className={estilos.subtitulos}>De Temple Estetique</h3>

          <div className={estilos.linea}></div>

          <p className={estilos.descripcion}> Este es un sistema de gestion diseñado para organizar y controlar la informacion relacionada con la jornada laboral
            de los empleados de la estetica. 
          <p className={estilos.descripcion}>El mismo permitira registrar los horarios de entrada y salida de los empleados, llevar un control de los servicios realizados durante su jornada laboral y facilita el calculo del porcentaje de pago diario y aguindaldo correspondiente. </p>
          </p>
        </main>
    </div>
  )
}

