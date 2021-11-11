import React from 'react';

import '../App.css'
//Testing

function Testing(props) {
    
    
    return (
        <div>
            <h1 className= "heading">Counter App</h1>
            <break/>
            <h1 className={props.count > 0 ? "positive" : props.count < 0 ? "negative" : null}>{props.count}</h1>
            <div className="btn1">
            <button onClick={()=>props.setcount(props.count-1)}>-</button>
            <button  onClick={props.increment}>+</button>
            </div>
        </div>
    )
}

export default Testing
