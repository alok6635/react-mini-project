import { useEffect, useState } from "react";

const App=()=>{
  const[timer,setTimer]=useState(0);
const[isActive,setIsactive]=useState(false)



useEffect(()=>{
  if(isActive){
    const interval= setInterval(()=>{
      setTimer((prev)=>prev+1)
    },1000);
    return()=>{
      clearInterval(interval)
    }
  }
},[isActive])

  return(
    <>
<h2>Timer:{timer}s</h2>
  <button onClick={()=>setIsactive(true)}>Start</button>  
  <button onClick={()=>setIsactive(false)}>Pause</button>  
  <button onClick={()=>{setTimer(0);setIsactive(false);}}>Reset</button>  
  <button onClick={()=>{setTimer(0);setIsactive(true);}}>Restart</button>  
    </>
  )
}
export default App;