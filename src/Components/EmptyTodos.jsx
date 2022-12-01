import React from "react";
import "./EmptyTodos.css" 
import empty from "../Imagenes/empty.png"

function EmptyTodos () {
    return (
        <div className="EmptyTittle">
        <p className="TextEmpty">¡Inicia una nueva actividad, no dejes que te gane la AMSIEDAD! <br /> Inicia dando clic en el boton + </p>
        <img className="ImgEmpty" src={empty} alt="Empty" />
        </div>
    )
}

export {EmptyTodos}