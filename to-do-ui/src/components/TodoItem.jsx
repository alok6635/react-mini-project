const TodoItem = ({ todoName, todoAge }) => {
    // console.log(todoName,todoAge);

    return (
        <>
            <div className="container">
                <ul>
                    <li>{todoName} {todoAge} </li>
                </ul>

            </div>
        </>
    )
}
export default TodoItem