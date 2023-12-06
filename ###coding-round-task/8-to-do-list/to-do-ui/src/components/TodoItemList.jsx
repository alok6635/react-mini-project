const TodoItemList = () => {
    const { todoitems } = useContext(TodoContext);
  
    return (
      <>
        {todoitems.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.date} />
        ))}
      </>
    );
  };
  
  export default TodoItemList;
  