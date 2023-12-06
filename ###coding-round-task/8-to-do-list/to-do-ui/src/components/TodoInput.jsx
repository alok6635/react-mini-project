import {  useState, useContext } from 'react';
const TodoInput = () => {
    const { handleInpAdd } = useContext(TodoContext);
    const [inputData, setInputData] = useState();
    const [date, setDate] = useState();
  
    const handleInp = (e) => {
      setInputData(e.target.value);
    };
  
    const handleDate = (e) => {
      setDate(e.target.value);
    };
  
    const handleAdd = () => {
      handleInpAdd(inputData, date);
    };
  
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <input type="text" placeholder="enter here" onChange={handleInp} value={inputData} />
            </div>
            <div className="col-3">
              <input type="date" onChange={handleDate} value={date} />
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-primary" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default TodoInput;
  
  