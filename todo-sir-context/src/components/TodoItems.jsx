import { useContext } from "react";
import { TodoContext } from "../store/todostore";
import TodoItem from "./TodoItem"

const TodoItems = ({ handleDel }) => {
    const todoData = useContext(TodoContext);
    console.log(todoData);

    
    return (
        <>
            {
                todoData.map((item, index) => {
                    return <TodoItem todoName={item.todoName} todoDate={item.todoDate} key={index} handleDel={handleDel} index={index} />
                })
            }
        </>
    )
}
export default TodoItems;