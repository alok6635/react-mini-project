import {useRef } from "react";

const TodoInput = ({handleAdd})=>{
    const  refName=useRef();
    const  refDate=useRef();

const addBtn=(e)=>{
    e.preventDefault();
  const  todoInput=refName.current.value;
  const  todoDate=refDate.current.value;
   refName.current.value='';
   refDate.current.value='';
    handleAdd(todoInput,todoDate);
}

    return (
        <>
            <form className="container-fluid text-center" onSubmit={addBtn}>
                <div className="wrapper">
                <div className="row">
                    <div className="col-6">
                        <input type="text" placeholder="enter here" ref={refName}/>
                    </div>
                    <div className="col-4">
                        <input type="date" ref={refDate}/>
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-success newBtn">Add</button>
                    </div>
                </div>
                </div>
            </form>
        </>
    )
}

export default TodoInput;