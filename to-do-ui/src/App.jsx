import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoName from "./components/TodoName";

const App = () => {

  const totalItem = [
    { name: 'alok', age: 23 },
    { name: 'kittu', age: 12 }
  ]

const[item,setItem]=useState(totalItem)

const handleAdd=({add})=>{
  setItem([...totalItem,{...add }])
}
console.log(item);

  return (
    <>
      <center>
        <TodoName/>
        <TodoInput addInp={handleAdd}/>
        <TodoList item={item}/>

      </center>
    </>
  )
}
export default App;