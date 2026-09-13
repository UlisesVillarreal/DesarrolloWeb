import React, { useState } from 'react'
import estilos from './Main.module.css'
import Servicio from '../servicio/Servicio'
import Tarjeta from '../tarjeta/Tarjeta'
import imagenEstetica from '../../assets/temple_estetique.png'

const servicios = [
  {
    id: 1,
    nombre: "Limpieza Facial",
    categoria: "Facial",
    precio: 15000,
    duracion: 60,
    estado: "Disponible"
  },
  {
    id: 2,
    nombre: "Masaje Relajante",
    categoria: "Masaje",
    precio: 20000,
    duracion: 45,
    estado: "Disponible"
  },
  {
    id: 3,
    nombre: "Depilacion Facial",
    categoria: "Depilacion",
    precio: 12000,
    duracion: 30,
    estado: "Disponible"
  },
  {
    id: 4,
    nombre: "Limpieza Facial",
    categoria: "Facial",
    precio: 15000,
    duracion: 60,
    estado: null
  },
  {
    id: 5,
    nombre: "Masaje Corporal",
    categoria: "Masaje",
    precio: 0,
    duracion: 50,
    estado: "Disponible"
  },
  {
    id: 6,
    nombre: "Tratamiento Corporal",
    categoria: "Corporal",
    precio: 25000,
    duracion: 90,
    estado: "No disponible"
  }
]

export default function Main() {
  const [pantalla, setPantalla] = useState("inicio")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos")
  const [orden, setOrden] = useState("ninguno")
  const [estadoPantalla, setEstadoPantalla] = useState("datos")

  // FILTRO
  const serviciosFiltrados = servicios.filter((servicio) => {

    if (categoriaSeleccionada === "Todos") {
      return true
    }

    return servicio.categoria === categoriaSeleccionada
  })

  // ORDENAMIENTO
  // Se crea una copia para no modificar el array original
  const serviciosOrdenados = [...serviciosFiltrados].sort((a, b) => {

    if (orden === "menor") {
      return a.precio - b.precio
    }

    if (orden === "mayor") {
      return b.precio - a.precio
    }

    return 0
  })

  const hayResultados = serviciosOrdenados.length > 0

  return (
  <main className={estilos.contenido}>

    {/* =====================================
        PANTALLA PRINCIPAL
        ===================================== */}

    {pantalla === "inicio" && (
      <>

        {/* PRESENTACIÓN */}

        <section className={estilos.presentacion}>

          <div className={estilos.textoPresentacion}>

            <h3 className={estilos.subtitulos}>
              Bienvenidos a
            </h3>

            <h1 className={estilos.titulo}>
              EL SISTEMA DE GESTION INTEGRAL
            </h1>

            <h3 className={estilos.subtitulos}>
              De Temple Estetique
            </h3>

            <div className={estilos.linea}></div>

            <p className={estilos.descripcion}>
              Este es un sistema de gestion diseñado para organizar y
              controlar la informacion relacionada con la jornada laboral
              de los empleados de la estetica.
            </p>

            <p className={estilos.descripcion}>
              El mismo permitira registrar los horarios de entrada y salida
              de los empleados, llevar un control de los servicios realizados
              durante su jornada laboral y facilita el calculo del porcentaje
              de pago diario y aguinaldo correspondiente.
            </p>

          </div>


          <div className={estilos.imagenPresentacion}>

            <img
              src={imagenEstetica}
              alt="Interior de Temple Estetique"
            />

          </div>

        </section>


        {/* MÓDULOS */}

        <section className={estilos.seccionTarjetas}>

          <h2 className={estilos.tituloTarjetas}>
            Modulos
          </h2>


          <div className={estilos.tarjetas}>

            <Tarjeta
              titulo="Jornada"
              descripcion="Permitira registrar la hora de entrada y salida de cada empleado."
              principal
            />


            <Tarjeta
              titulo="Servicios"
              descripcion="Permitira registrar los servicios realizados por cada empleado y el monto del mismo para que el sistema calcule su correspondiente comisión."
              estado="En desarrollo"
              onClick={() => setPantalla("servicios")}
            />


            <Tarjeta
              titulo="Consultas"
              descripcion="Permite consultar información de cada empleado: Ingresos generados, Comisiones correspondientes, Asistencias y Aguinaldo."
            />

          </div>

        </section>

      </>
    )}


    {/* =====================================
        PANTALLA DE SERVICIOS
        ===================================== */}

    {pantalla === "servicios" && (

      <section className={estilos.seccionTarjetas}>

        {/* VOLVER */}

        <button
          className={estilos.botonVolver}
          onClick={() => setPantalla("inicio")}
        >
          ← Volver a módulos
        </button>


        <h2 className={estilos.tituloTarjetas}>
          Servicios
        </h2>


        {/* BOTONES DE ESTADOS */}

        <div className={estilos.controlesEstados}>

          <button onClick={() => setEstadoPantalla("cargando")}>
            Cargando
          </button>

          <button onClick={() => setEstadoPantalla("datos")}>
            Con datos
          </button>

          <button onClick={() => setEstadoPantalla("vacio")}>
            Vacío sin error
          </button>

          <button onClick={() => setEstadoPantalla("error")}>
            Con error
          </button>

        </div>


        {/* FILTRO Y ORDENAMIENTO */}

        <div className={estilos.controlesFiltros}>

          <label>
            Categoría:

            <select
              value={categoriaSeleccionada}
              onChange={(e) =>
                setCategoriaSeleccionada(e.target.value)
              }
            >

              <option value="Todos">
                Todos
              </option>

              <option value="Facial">
                Facial
              </option>

              <option value="Masaje">
                Masaje
              </option>

              <option value="Depilacion">
                Depilación
              </option>

              <option value="Corporal">
                Corporal
              </option>

            </select>

          </label>


          <label>
            Ordenar:

            <select
              value={orden}
              onChange={(e) =>
                setOrden(e.target.value)
              }
            >

              <option value="ninguno">
                Sin orden
              </option>

              <option value="menor">
                Precio menor a mayor
              </option>

              <option value="mayor">
                Precio mayor a menor
              </option>

            </select>

          </label>

        </div>


        {/* LISTADO DE SERVICIOS */}

        <div className={estilos.tarjetas}>

          {/* CARGANDO */}

          {estadoPantalla === "cargando" && (
            <p>Cargando</p>
          )}


          {/* ERROR */}

          {estadoPantalla === "error" && (
            <p>Con error</p>
          )}


          {/* VACÍO */}

          {estadoPantalla === "vacio" && (
            <p>Vacío sin error</p>
          )}


          {/* CON DATOS */}

          {estadoPantalla === "datos" && (

            hayResultados ? (

              serviciosOrdenados.map((servicio) => (

                <Servicio
                  key={servicio.id}
                  nombre={servicio.nombre}
                  categoria={servicio.categoria}
                  precio={servicio.precio}
                  duracion={servicio.duracion}
                  estado={servicio.estado}
                />

              ))

            ) : (

              <p>
                No se encontraron servicios con el filtro seleccionado
              </p>

            )

          )}

        </div>

      </section>

    )}

  </main>
)
}