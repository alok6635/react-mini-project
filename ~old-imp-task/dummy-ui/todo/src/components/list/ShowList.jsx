const ShowList=({item})=>{

    return( 
        <>
        <li className="list-group-item pb-2 d-flex justify-content-between">{item.name}
        <div className="icon_wrap">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
        </div>
        </li>
        </>
    )
}
export default ShowList;