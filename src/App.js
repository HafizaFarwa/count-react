import Testing from './comp/Testing';
import React, { useState } from 'react'

function App() {
  const [count, setcount] = useState(0)
  const increment=()=>{
    setcount(count+1)
}
  return (

    <div className="App">
        <Testing increment={increment} count={count} setcount={setcount}/>
    </div>
  );
}

export default App;
