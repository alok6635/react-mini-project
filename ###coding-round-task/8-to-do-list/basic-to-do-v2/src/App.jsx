import { useState } from "react";

const App = () => {

  const prevItem=[
    {name:'alok',age:32},
    {name:'kittu',age:12}
  ]

  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState(prevItem);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleAdd = () => {
    const newItem = { name: inputData}
    setTodos([...todos,newItem])
    setInputData('')
  };

  const handleDel=(index)=>{
  let filterData= todos.filter((item,id)=>id!==index)
      setTodos(filterData)
  }

  return (
    <>
      <h1>to-do-app</h1>
      <input placeholder="enter here" onChange={handleInput} value={inputData} />
      <button onClick={handleAdd}>Add</button>
     {
      todos.map((item,index)=>{
       return <li key={index}>
        {item.name} {item.age}
        <button onClick={()=>handleDel(index)}>Delete</button>
        </li>
      }
      )
     }
    </>
  );
};

export default App;
