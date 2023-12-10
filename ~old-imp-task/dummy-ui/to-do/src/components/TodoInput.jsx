import { useState } from "react"

const TodoInput=({addInp})=>{
const[inputValue,setInputValue]=useState('')
const[add,setAdd]=useState([])

     
const InpData=(e)=>{
    setInputValue(e.target.value)
}

const handleAdd=()=>{
     setAdd([...add,inputValue])
     setInputValue('')
     addInp(add,inputValue)
}


    return(
        <>
        <input type="text" placeholder="enter here" onChange={InpData} value={inputValue}/>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}
export default TodoInput