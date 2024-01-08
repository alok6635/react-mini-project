import { useSelector } from "react-redux";

const Display=()=>{

  const {counterVal}= useSelector(store=>store.counter)

    return(
        <>  
        <p>Total value: {counterVal}</p>
        </>
    )
}

export default Display;