import React from "react";
import "./TodosLoading.css"
import loading from "../Imagenes/loggingOff.png"

function TodosLoading ({error}) {
    return (
        <div className="loading"> 
        <img className="ImgCarga" src={loading} alt="loading" />
        <p className="Cargando">Cargando datos, espera un momento por favor...</p>
        </div>
    )
}

export {TodosLoading}