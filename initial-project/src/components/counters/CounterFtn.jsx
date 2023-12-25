import { useState } from "react";

const CounterFtn=()=>{
    const[count,setCount]=useState(0);

const handleAdd=()=>{
    if(count<10){
        setCount(count+1)
    }
}

const handelDel=()=>{
    if(count>0){
        setCount((prev)=>prev-1)
    }
}

    return(
        <>
        <p> functional based counter</p>
        <h2>{count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={()=>handelDel()}>Del</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export default CounterFtn;