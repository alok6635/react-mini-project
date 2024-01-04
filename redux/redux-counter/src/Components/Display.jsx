import { useSelector } from "react-redux";

const Display=()=>{

  const data= useSelector(store=>store.counter)

    return(
        <>  
        <p>total value: {data}</p>
        </>
    )
}

export default Display;