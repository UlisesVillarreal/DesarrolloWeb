    import React from 'react'
    import estilos from './Servicio.module.css'

    export default function Servicio({
    nombre,
    categoria,
    precio,
    duracion,
    estado
    }) {
    return (
        <article className={estilos.servicio}>

        <h3 className={estilos.nombre}>
            {nombre}
        </h3>

        <p className={estilos.categoria}>
            {categoria}
        </p>

        <div className={estilos.informacion}>

            <p>
            <strong>Precio:</strong> $
            {precio !== null ? precio : 'No especificado'}
            </p>

            <p>
            <strong>Duración:</strong> {duracion} minutos
            </p>

            <p>
            <strong>Estado:</strong>{' '}
            {estado !== null ? estado : 'Sin información'}
            </p>

        </div>

        </article>
    )
    }