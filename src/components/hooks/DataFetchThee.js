import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchThee() {
    const [count, setCount]= useState(0);


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((resolve)=>{
            console.log(resolve)
            setCount(resolve);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[] )


  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>
            click me
        </button>
        
    </div>
  )
}

export default DataFetchThee; 
// the best of thing  