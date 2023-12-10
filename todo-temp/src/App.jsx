import React, { useState } from "react";
import TodoInput from "./TodoInput";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", inputValue);
    // Add your logic to handle the submitted value
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;
