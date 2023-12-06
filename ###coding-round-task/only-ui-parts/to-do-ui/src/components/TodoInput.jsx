const TodoInput = () => {
  
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <input type="text" placeholder="enter here"/>
                    </div>
                    <div className="col-3">
                        <input type="date"/>
                    </div>
                    <div className="col-1" >
                    <button type="button" className="btn btn-primary">Add</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default TodoInput;
