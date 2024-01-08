import { useState } from "react";
import { useEffect } from "react";

const ClockTime=()=>{
const[time,setTime]=useState(new Date())

useEffect(()=>{
 let intervalId= setInterval(()=>{
setTime(new Date())
    },1000)
    return(()=>{
        clearInterval(intervalId)
    })
})

    return(
        <>
     


       <h1>This is the current time:{time.toLocaleDateString()}-{" "} {time.toLocaleTimeString()} </h1>
        </>
    )
}

export default ClockTime;