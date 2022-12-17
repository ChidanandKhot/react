import React, { useEffect, useState } from 'react'

function UseEffectTwo() {
    const[count, setCount] = useState(0);
    const[input, SetInput] = useState("");


    useEffect(()=>{
        console.log("Useefferct calling")
        document.title=`you clicked ${count}`
    },[] )

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>SetInput(e.target.value)} />
        <button onClick={()=>setCount(count+1)} > Click me {count} </button>
        
    </div>
  )
}

export default UseEffectTwo; 