import { useState } from 'react';
import Header from './components/Header/Header';
import Deleted from './components/deleted/Deleted';
import List from './components/list/List';
import TodoInput from './components/todoInput/TodoInput';

const App = () => {

    const [todoItems, setTodoItems] = useState([]);
    const [deleted, setDeleted] = useState([]);

    const handleInpFtn = (inputValue) => {
        setTodoItems([...todoItems, { name: inputValue }])
    }

    const handleDel = (index) => {
        let deletedData = todoItems.filter((item, id) => id == index)
        setDeleted([...deleted, ...deletedData])

        let filterData = todoItems.filter((item, id) => id !== index)
        setTodoItems(filterData)
    }

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <TodoInput handleInpFtn={handleInpFtn} />
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col"><h6>Active todo's</h6></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <List todoItems={todoItems} handleDel={handleDel} />
                            </ul>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col"><h6>Completed todo's</h6></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <Deleted deleted={deleted} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
