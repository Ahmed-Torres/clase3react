import React, { useEffect, useState } from "react";

const Effect = () => {

    const [clicks, setClicks]= useState(0);
    const [name, setName]= useState("");

    useEffect(()=>{
        console.log("Solo me ejecuto al principio")
        //API CALL
    }, [])

    useEffect(()=>{
        console.log("useEffect de clicks")
    }, [clicks])

    useEffect(()=>{
        console.log("useEffect de names")
    }, [name])

    return(
        <div>
            <h1>Ejemplo de useEffect</h1>
            <button onClick={()=> setClicks(clicks + 1) } >+1</button>
            <button onClick={()=> setClicks(clicks - 1) } >-1</button>
            <hr />
            <input 
                type="text" 
                placeholder="nombre" 
                onChange={(e) => setName(e.target.value)} />
            <p>Clicks: {clicks} </p>
            <p>Name: {name} </p>
        </div>
    )
}

export default Effect;