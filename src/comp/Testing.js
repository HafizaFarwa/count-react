import React, { useState } from 'react'
import '../App.css'
//Testing

function Testing(props) {
    const [count, setcount] = useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    return (
        <div>
            <h1 className= "heading">Counter App</h1>
            <break/>
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
            <div className="btn1">
            <button onClick={()=>setcount(count-1)}>-</button>
            <button  onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Testing
