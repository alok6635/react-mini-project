import { useState, useEffect } from "react";

const App = () => {
  const [count,setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(()=>{
      setCount((prevCount)=>{
        if (prevCount >= 10) {
          return 0; 
        } else {
          return prevCount + 1; 
        }
      });
    },1000)
},[]); 

  return (
    <>
      <div>{count}</div>
    </>
  )
}
export default App;