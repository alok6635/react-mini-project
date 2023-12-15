import { useState } from "react";
import Welcome from "./components/Wecome";
import TodoInput from "./components/TodoInput";
import TodoName from "./components/TodoName";
import TodoItems from "./components/todoItems";

const App = () => {
    const [todoData, setTodoData] = useState([]);

//add functionality- 
    const handleAdd = (todoInput, todoDate)=>{
        setTodoData((currentValue)=>[...currentValue,{todoName:todoInput,todoDate:todoDate}])
    }


//delete functionality- 
const handleDel=(index)=>{
  const delTodo=todoData.filter((item,id)=>id!==index)
  setTodoData(delTodo)
}
    return (
        <>
            <center>
                <TodoName />
                <TodoInput handleAdd={handleAdd} />
                {todoData.length==0 && <Welcome/>}
                <TodoItems todoData={todoData} handleDel={handleDel}/>
            </center>
        </>
    )
}

export default App;