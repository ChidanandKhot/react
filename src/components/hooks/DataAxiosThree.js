import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function DataAxiosThree() {

    const [count, setCount] = useState(0);

    // useEffect(()=>{
    
    //     Axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((resolve)=>{console.log(resolve)
    //     setCount(count)})
    //     .catch((error)=>{console.log(error)})
    //   }, count)
    
    useEffect(()=>{
        console.log(`you clicked ${count}times`)
        document.title = `you clicked ${count}times`
    })
  return (
    <div>
        <div> Hello world : {count} </div>
      <button onClick={() => setCount(count + 1)}>Click me Babu </button>


    </div>
  )
}

export default DataAxiosThree;



