import React from 'react'
import estilos from './Main.module.css'
import Tarjeta from '../tarjeta/tarjeta'
import imagenEstetica from '../../assets/temple_estetique.png'

export default function Main() {
  return (
    <main className={estilos.contenido}>
      <section className={estilos.presentacion}>

        <div className={estilos.textoPresentacion}>

          <h3 className={estilos.subtitulos}>Bienvenidos a</h3>
          <h1 className={estilos.titulo}>EL SISTEMA DE GESTION INTEGRAL</h1>
          <h3 className={estilos.subtitulos}>De Temple Estetique</h3>

          <div className={estilos.linea}></div>

          <p className={estilos.descripcion}> Este es un sistema de gestion diseñado para organizar y controlar la informacion relacionada con la jornada laboral de los empleados de la estetica.</p>

          <p className={estilos.descripcion}>El mismo permitira registrar los horarios de entrada y salida de los empleados, llevar un control de los servicios realizados durante su jornada laboral y facilita el calculo del porcentaje de pago diario y aguindaldo correspondiente.</p>

        </div>

        <div className={estilos.imagenPresentacion}>
          <img src={imagenEstetica} alt="Interior de Temple Estetique"/>
        </div>
        
      </section>

      <section className={estilos.seccionTarjetas}>
        <h2 className={estilos.tituloTarjetas}>
          Modulos 
        </h2>
          
        <div className={estilos.tarjetas}>

          <Tarjeta
            titulo="Jornada"
            descripcion="Permitira registrar la hora de entrada y salida de cada empleado."
            principal
            estado="Pendiente"
          />

          <Tarjeta
            titulo="Servicios"
            descripcion="Permitira registrar los servicios realizados por cada empleado y el monto del mismo para que el sistema calcule su correspondiente comisión."
            estado="Pendiente"
          />

          <Tarjeta
            titulo="Consultas"
            descripcion="Permite consultar información de cada empleados: Ingresos generados, Comisiones Correspondientes, Asistencias y Aguinaldo"
            estado="Pendiente"
          />
        
        </div>


      </section>
    </main>
  )
}

