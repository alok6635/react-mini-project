const ShowList=({item})=>{
    return( 
        <>
        <li className="list-group-item pb-2 d-flex justify-content-between">{item.name}
        <button className="btn btn-dark">delete</button>
        </li>
        </>
    )
}
export default ShowList;