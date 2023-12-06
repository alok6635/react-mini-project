import { useState } from "react";

const App = () => {
   const [input, setInput] = useState('')
   const [todo, setTodo] = useState([])
   const [edit, setEdit] = useState(null)

   const handleInput = (e) => {
      setInput(e.target.value)
   }

   const handleAdd = (e) => {
      if (edit !== null) {
         let data = [...todo]
         data[edit] = input;
         // console.log(data);
         setTodo(data);
         setInput('')
      }
      else {
         setTodo((prevTodo) => {
            const updatedTodo = [...prevTodo, input];
            return updatedTodo;
         })
         setInput('')
      }
   }
      const handleDel = (index) => {
         const filterTodo = todo.filter((item, id) => id !== index)
         setTodo(filterTodo);
      };

      const handleEdit = (index) => {
         setInput(todo[index])
         setEdit([index])
      }

      return (
         <>
            <input onChange={handleInput} placeholder="enter here" value={input} />
            <button onClick={handleAdd} >Add</button>
            {
               <ul>
                  {
                     todo.map((item, index) => {
                        return <li key={index}>
                           <span>{item}</span>
                           <button onClick={() => handleDel(index)}>Del</button>
                           <button onClick={() => handleEdit(index)}>Edit</button>
                        </li>
                     }
                     )
                  }
               </ul>
            }
         </>
      )
   }

export default App;