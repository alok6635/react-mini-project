import React from "react";

const TodoInput = ({inputValue,handleInputChange,handleFormSubmit})=>{

  return (
    <>
      <div className="input-group mb-3">
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="form-control" placeholder="enter here" value={inputValue} onChange={handleInputChange}/>
          <input type="submit" />
        </form>
        {
        inputValue.map((item)=>{
          return <li>{item}</li>
        })
      }
      </div>
    </>
  );
};
export default TodoInput;
