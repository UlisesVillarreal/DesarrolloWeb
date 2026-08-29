import React from 'react'
import estilos from './Tarjeta.module.css'

function Tarjetas({ titulo, descripcion, estado = 'Pendiente', principal = false}){
    return (
        <article className={`${estilos.tarjetas} ${principal ? estilos.destacada : ''}`} 
        >
        
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            {principal && (
                <span className={estilos.insignia}>
                    Modulo central
                </span>

            )}

            <p className={estilos.estado}>
                Estado: {estado}
            </p>
            
        

        </article>
    
    )
}
