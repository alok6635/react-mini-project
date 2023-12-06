import { createContext, useState, } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoItemList from './components/TodoItemList';

const TodoContext = createContext();

const App = () => {
  const initialTodoItems = [
    { name: 'Alok', date: '2020/12/23' },
    { name: 'kittu', date: '2002/11/21' },
  ];

  const [todoitems, setTodoItems] = useState(initialTodoItems);

  const handleInpAdd = (inputData, date) => {
    setTodoItems([...todoitems, { name: inputData, date: date }]);
  };

  const handleInpDel = (todoDate) => {
    let filter = todoitems.filter((item) => item.date !== todoDate);
    setTodoItems(filter);
  };

  const contextValue = { todoitems, handleInpAdd, handleInpDel };

  return (
    <TodoContext.Provider value={contextValue}>
      <center>
        <TodoInput />
        <TodoItemList />
      </center>
    </TodoContext.Provider>
  );
};

export default App;