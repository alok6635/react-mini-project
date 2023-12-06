import TodoItem from "./TodoItem";

const TodoItemList=({todoitems})=>{
   
    return(
        <>
        {
            todoitems.map((item,index)=> 
            <TodoItem key={index} todoName={item.name} todoDate={item.date}/>)
        }
        </>
    )
}
export default TodoItemList;
