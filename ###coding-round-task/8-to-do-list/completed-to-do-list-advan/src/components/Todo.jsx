import { useState } from "react";
import './Todo.css'; // Create a CSS file for styling

const Todo = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const handleToggle = (id) => {
        const updatedTodo = todo.map((item, index) => {
            if (index === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodo(updatedTodo);
    };

    const handleAdd = () => {
        setTodo([...todo, { text: input, completed: false }]);
        setInput("");
    };

    const handleInp = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <input type="text" placeholder="Enter here" onChange={handleInp} value={input} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todo.map((item, id) => (
                    <li key={id}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleToggle(id)}
                        />
                        <span className={item.completed ? 'completed' : ''}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todo;
