import React from 'react'
import estilos from './Tarjeta.module.css'

export default function Tarjeta({
    nombre,
    categoria,
    precio,
    duracion,
    estado,
    }) {
    return (
        <article className={estilos.tarjeta}>
        
            <h3>{nombre}</h3>

            <p>{categoria}</p>

            <p>Precio: ${precio}</p>

            <p>Duración: {duracion} minutos</p>     
    
            <p className={estilos.estado}>
                Estado: {estado ?? 'Sin Estado'}
            </p>

        </article>
    )
}
