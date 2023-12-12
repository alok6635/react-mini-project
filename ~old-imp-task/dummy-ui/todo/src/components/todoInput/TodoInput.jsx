
const TodoInput = ({todoItems}) => {

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Please enter here"/>
                <button className="btn btn-success py-1" type="button" id="button-addon2">Add</button>
            </div>
        </>
    )
}
export default TodoInput;