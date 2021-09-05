import React from "react";
import { useFetch } from "./hooks/useFetch";
import Clicks from './Clicks';

const APICall = () => {
    const [names, loading, error] = useFetch("https://jsonplaceholder.typicode.com/todos/")
    return ( 
        <div>
            <Clicks />
            <h1>Titulos</h1>
            {error && <h6>Ups :V</h6>}
            {loading && <h1>Cargando...</h1> }
            {names?.length > 0 ? (
                names.map((name) => <p key={name.id}>{name.title}</p>) 
                    ) : (
                    <p>No hay elementos</p>
                )}
        </div>
    );
}
 
export default APICall;








{
    /* 
    {names && names.length > 0 && // buena practica, siempre preguntar el ato, otra opcion es names?.length > 0 &&
        names.map((name)=>(
        <p key={name.id}>{name.title}</p>
    ))} */
}
