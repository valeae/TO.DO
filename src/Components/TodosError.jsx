import React from "react";
import TodoError from "./TodoError.css"
import pageNotFound from "../Imagenes/pageNotFound.png"

function TodosError () {
    return (
        <div className="ErrorLoading">
        <img className="ImgError" src={pageNotFound} alt="Page Not Found" />
        <p className="Error">¡Encontramos un error!</p>
        </div>
    )     
}


export {TodosError}