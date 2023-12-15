const TodoItem = ({ todoName,todoDate,handleDel,index}) => {

    const delBtn=()=>{
        handleDel(index)
    }

    return (
        <>
            <div className="wrapper">

                <div className="row">
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={delBtn}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem