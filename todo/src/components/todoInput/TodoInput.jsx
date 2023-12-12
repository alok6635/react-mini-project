import { useEffect, useState } from "react";

const TodoInput=({handleAdd,edit})=>{
console.log(edit);

const[inputValue,setInputValue]=useState()


const handleInp=(e)=>{
setInputValue(e.target.value);
}

const addBtn=()=>{
    handleAdd(inputValue)
    setInputValue('');
}

useEffect(()=>{
setInputValue(edit)
},[edit])
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Please enter here" onChange={handleInp} value={inputValue}/>
                <button className="btn btn-success py-1" type="button" id="button-addon2" onClick={addBtn}>Add</button>
            </div>
        </>
    )
}
export default TodoInput;