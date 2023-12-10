import React from "react";

const TodoInput = ({ inputValue, handleInputChange, handleFormSubmit }) => {
  return (
    <>
      <div className="input-group mb-3">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter here"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default TodoInput;
