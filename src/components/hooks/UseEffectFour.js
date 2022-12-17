import React, { useEffect, useState } from 'react'

function UseEffectFour() {
    const [count, setCount]= useState(0)
    const[name, setName] = useState("")

    useEffect(()=>{
        document.title= `Times ${count}`
        console.log(`you clicked ${count} times`)
        
    },[count])
    
  return (
    <div>
        <p> {count}</p>

        <input type="text"  onChange={(e)=>setName(e.target.value) } />

        <button onClick={()=>setCount(count+1)}> Get Update </button>
    </div>
  )
}

export default UseEffectFour;



