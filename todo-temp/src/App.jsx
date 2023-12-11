import React, { useState } from "react";
import TodoInput from "./components/todoInput/TodoInput";


const App = () => {
  const [inputValue,setInputValue] = useState([]);

  const handleInputChange=(e)=>{
    setInputValue(e.target.value)
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    
  };

  return (
    <div>
      <TodoInput inputValue={inputValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
     
    </div>
  );
};

export default App;
