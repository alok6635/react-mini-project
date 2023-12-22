import { useEffect, useState } from "react";

const InfiniteCounter=()=>{
const[count,setCount]=useState(0);

useEffect(() => {
    console.log('d');
    const interval = setInterval(()=>{
      setCount((prevCount)=>{
        if (prevCount >= 10) {
          return 0; 
        } else {
          return prevCount + 1; 
        }
      });
    },[1000])
},[]); 

return(
        <>
        <p>Infinite counter</p>
        <h3>{count}</h3>
        </>
    )
}

export default InfiniteCounter;