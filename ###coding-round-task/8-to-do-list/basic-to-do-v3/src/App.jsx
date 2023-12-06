import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoItemList from './components/TodoItemList';
import TodoName from "./components/TodoName";


const App=()=>{

  const initialTodoitems=[
    { name:'Alok',date:'2020/12/23'},
    {name:'kittu',date:'2002/11/21'},
]

const[todoitems,setTodoItems]=useState(initialTodoitems)


const handleNewItem =(itemName,itemDate)=>{
  const newTodoItems=[...todoitems,{name:itemName,date:itemDate}]
   setTodoItems(newTodoItems)
}

const handleDelItem=(todoName)=>{
let filterData=todoitems.filter((item)=>item.name!==todoName)
setTodoItems(filterData)
}

  return (
    <>
      <center>
        <TodoName />
        <TodoInput addNewItem={handleNewItem}/>
        <TodoItemList todoitems={todoitems} delTodoItem={handleDelItem}/>
      </center>

    </>
  )
}

export default App;