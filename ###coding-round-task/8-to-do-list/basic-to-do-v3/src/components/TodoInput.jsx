import { useState } from "react";

const TodoInput = ({addNewItem}) => {
  const[input,setInput]=useState();
  const[date,setDate]=useState();

const handleInput=(e)=>{
  setInput(e.target.value)
}
const handleDate=(e)=>{
    setDate(e.target.value)
}

const handleAdd=()=>{
    addNewItem(input,date)
    setInput(' ')
    setDate(' ')
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <input type="text" placeholder="enter here" onChange={handleInput} value={input}/>
                    </div>
                    <div className="col-3">
                        <input type="date" onChange={handleDate} value={date}/>
                    </div>
                    <div className="col-1" >
                    <button type="button" className="btn btn-primary"  onClick={handleAdd}>Add</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default TodoInput;
