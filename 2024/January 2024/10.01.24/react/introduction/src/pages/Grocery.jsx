import { useState } from "react";

function Grocery() {
    const [groceries, setGroceries] = useState([
        "potatos",
        "banana",
        "melon",
        "cheese",
        "apple"
    ]);
    return (
        <div>
            <h1>Grocery List</h1>
            <ul>
                {groceries.map((item, index) =>{
                    return <li key={`gr_${index}`}>{item}</li>
                })}
            </ul>
        </div>
    )

}


export default Grocery;