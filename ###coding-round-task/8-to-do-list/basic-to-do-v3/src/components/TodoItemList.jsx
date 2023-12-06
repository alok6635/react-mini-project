import TodoItem from "./TodoItem";

const TodoItemList=({todoitems,delTodoItem})=>{
// console.log(todoitems);
   
    return(
        <>
        {
            todoitems.map((item,index)=> 
            <TodoItem key={index} todoName={item.name} todoDate={item.date} delTodoItem={delTodoItem}/>)
        }
        </>
    )
}
export default TodoItemList;
