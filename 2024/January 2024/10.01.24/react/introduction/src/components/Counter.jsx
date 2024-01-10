import { useState } from "react";
import "./Counter.css";

function Counter(){

    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                console.log(count);
                setCount(count + 1)}
                }>+</button>
            <button onClick={() => {
                console.log(count);
                setCount(count - 1)}
            }>-</button>
        </div>
    )
}

export default Counter;