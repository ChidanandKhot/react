import React, { useEffect, useState } from 'react'

function UseEffectOne() {
  
    const [count, setCount] = useState(0);

    
    useEffect(()=>{
      setTimeout(()=>{
        setCount((count)=>count+1)
      }, 1000)
      console.log(`am running ${count} times`)
    },[])  // Pass here count to contnue to call. [dependacy array]


    // setTimeout(()=>{
    //   setCount(()=>count+1);
    // }, 1000);

    


  return (
    <button>UseEffectOne : {count}</button>
  );
}

export default UseEffectOne;

