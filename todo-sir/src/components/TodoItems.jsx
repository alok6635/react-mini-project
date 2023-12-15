import TodoItem from "./TodoItem"

const TodoItems=({todoData,handleDel})=>{
    return(
        <>
        {
            todoData.map((item,index)=><TodoItem todoName={item.todoName} todoDate={item.todoDate} key={index} handleDel={handleDel} index={index}/>)
        }
        </>
    )
}
export default TodoItems;