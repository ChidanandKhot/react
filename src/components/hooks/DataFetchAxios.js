import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchAxios() {
    const[post, setPost] = useState([]);

    const BaseUrl = " https://jsonplaceholder.typicode.com/posts ";

    useEffect(()=>{
        axios.get(BaseUrl)
        .then((resolve)=>{setPost(resolve.data)})
        .catch((error)=>{console.log(error)})
    }, )


  return (
    <div> 
        <button type='text' value={post} onChange={(e)=>setPost(e.target.value)}> Click me</button>

        {/* <button type='text' value={post} onChange((e)=> {setPost(e.target.value)} ) > onChange Button <button/>  */}
        {/* document.body() */}
    </div>
  )
}

export default DataFetchAxios ; 

/*  For data fetching we use axios
==> Axios is the React Library, 

Syntax for fetching.

 useEffect(()=>{
    axios.get("Url")
    .then((resolve)=>{console.log(resolve)} )
    .catch((error)=>{console.log(error)})
 });



*/ 