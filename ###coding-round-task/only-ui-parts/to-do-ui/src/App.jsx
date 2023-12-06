import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoItemList from './components/TodoItemList';


const App=()=>{

  const initialTodoitems=[
    { name:'Alok',date:'2020/12/23'},
    {name:'kittu',date:'2002/11/21'},
]

  return (
    <>
      <center>
        <TodoInput/>
        <TodoItemList todoitems={initialTodoitems}/>
      </center>
    </>
  )
}

export default App;