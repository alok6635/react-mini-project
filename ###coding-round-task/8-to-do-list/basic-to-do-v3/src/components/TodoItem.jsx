const TodoItem=({todoName,todoDate,delTodoItem})=>{
    // console.log(todoName,todoDate);

    return(
        <>
     <div className="container text-center">

        <div className="row">
                    <div className="col-3">{todoName}</div>
                    <div className="col-3">{todoDate}</div>
                    <div className="col-1">
                    <button type="button" className="btn btn-success" onClick={()=>delTodoItem(todoName)}>Delete</button>
                    </div>
                </div>
      </div>


        </>
        
    )
}

export default TodoItem;