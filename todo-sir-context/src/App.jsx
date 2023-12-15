import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoName from "./components/TodoName";
import TodoItems from "./components/todoItems";
import Welcome from "./components/Wecome";
import { TodoContext } from "./store/todostore";

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

const newObj=[
    {todoName:'dssd', todoDate:'12/232/323'}
]
    return (
        <>
        <TodoContext.Provider value={todoData}>
            <center>
                <TodoName/>
                <TodoInput handleAdd={handleAdd}/>
                <Welcome todoData={todoData}/>
                <TodoItems handleDel={handleDel}/>
            </center>
        </TodoContext.Provider>
        </>
    )
}

export default App;