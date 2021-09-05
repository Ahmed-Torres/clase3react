import React, { useClicks } from "./hooks/useClicks";

const Clicks = () => {
    const {increment, decrement, clicks} = useClicks(0)
    return ( 
        <div>
            <h3>Clicks: {clicks} </h3>
            <button onClick={increment} >+1</button>
            <button onClick={decrement} >-1</button>
        </div>
     );
}
 
export default Clicks;