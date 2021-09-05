import React, {useEffect, useState} from 'react'

function MouseMove() {
    const [mouseCoords, setMouseCoords] = useState({x: null, y: null})

    const handleMouseCoords =(e)=>{
        setMouseCoords({
            x: e.clientX,
            y: e.clientY,
        })
    }
    //el useEffect controla cuando se monta el componente por primera vez, en cada evento, 
    //actualizacion y cuando el componente se destruye
    //componentDidMount--> cuando el componente se monta
    //componentsDidUpdate-->cuando el componente se actualiza
    //componentWillUnmount--> cuando el componente se destruye
    
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseCoords)
        return () => {
            window.removeEventListener("mousemove", handleMouseCoords)
        }
    })
    return (
        <div className="mouse-area" >
            <h1>Encontra la coordenada secreta </h1>
            <h2>Frio Frio / Caliente Caliente</h2>
            <h3>
                X: {mouseCoords.x} | Y: {mouseCoords.y}
            </h3>
        </div>
    )
}

export default MouseMove

