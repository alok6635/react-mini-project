import TodoItem from "./TodoItem";

const TodoList=({item})=>{
    // console.log(item);


    return(
        <>

        {
          item.map((item,index)=><TodoItem todoName={item.name} todoAge={item.age} key={index}/>)
        }
        </>
    )
}
export default TodoList;