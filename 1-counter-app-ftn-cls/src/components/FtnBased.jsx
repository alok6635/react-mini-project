import { useState } from "react"

const FtnBased=()=>{

    const[count,setCount]=useState(0);

const handleInc=()=>{
    if(count<5){
        setCount(count+1)
    }
}
const handleDec=()=>{
    if(count>0){
        setCount((prev)=>prev-1)
    }
}

const handleReset=()=>{
     setCount(0)
}

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>handleInc()}>Inc</button>
        <button onClick={()=>handleDec()}>Dec</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default FtnBased;