import React,{useState} from 'react'

function HooksOne() {
        const[count, setCount]  = useState(0)

        // myCounter= () => {
        //     setCount(prevState){
        //         count : prevState.count + 1
        //     }
        // }

    //   function  myCount(count){
    //         setCount({count: count +1})
    //     }



  return (
    <div>
        <button onClick={() => setCount(count+1)}> HooksOne : { count}</button>
        {/* <button onClick={myCount}> HooksOne : { count}</button> */}

    </div>
  )
}

export default HooksOne