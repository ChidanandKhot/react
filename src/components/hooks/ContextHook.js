import React, { createContext, useContext, useState } from 'react'

const MySend = createContext()
// const [name, setName] = useState("React DON");

function ContextHook() {
    const [name, setName] = useState("React DON");
  return ( 
    <MySend.Provider value={name}> 
        <div>ContextHook 1.8 </div>
        <ContextHookA />
    </MySend.Provider>
  )
}

function ContextHookA(){
    return(
        <> 
            <div>Am from context A Two</div>
            <ContextHookB/>
        </>
    )
}

function ContextHookB(){
    const name = useContext(MySend);
    return(
        <> 
            <div>Am from context B Three</div>
            <div>{`Hello ${name}`}</div>

        </>
    )
}


export default ContextHook 