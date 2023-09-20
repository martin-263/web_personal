import React from 'react';

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2 class="subtitulo">Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <li class="lista" key={encuesta.id}><span class="pregunta">{encuesta.pregunta}</span>

                    <div class="espacio">
                    {encuesta.opciones.map(opcion => (
                    <label for={opcion} class="opcion"><input id={opcion} type="radio" class="boton" name={encuesta.id}/>{opcion}</label>
                    ))}
                    </div>
    
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;