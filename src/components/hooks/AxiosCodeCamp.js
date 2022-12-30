import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosCodeCamp() {
    const [count, setCount]= useState("")
    const[post,setPost]=useState(1)
 
    // const BaseUrl=`https://jsonplaceholder.typicode.com/posts/${count}`;
    const BaseUrl=`https://jsonplaceholder.typicode.com/comments/${post}`;

    useEffect(()=>{
        axios.get(BaseUrl)
        .then((responce)=>{setCount(responce.data)})
        .catch((error)=>{console.log(error)})
        
    },[count])
    
  return (
    <div>
  
      <button onClick={()=>setPost(post+1)}>You Cliked {post} times</button>
     
       <h5>{count.name}</h5> 
      {/* <p>{count.body}</p>  */}
    </div>
  )
}


export default AxiosCodeCamp;