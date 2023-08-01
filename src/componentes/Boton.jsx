import React from "react";
import '../css/Boton.css';

function Boton({ texto, esBotonClick, manejadorClick }) {
    return (
    <button 
    className= {esBotonClick? 'botonClick':'botonReiniciar' }
    onClick={manejadorClick} >
        {texto}
    </button>
    )        
}

export default Boton;