const ShowList=({item,index,handleDel,handleEdit})=>{

const handleDelbtn=(index)=>{
    handleDel(index)
}

const handleEditBtn=()=>{
    handleEdit(item.name,index)
}

    return( 
        <>
        <li className="list-group-item pb-2 d-flex justify-content-between">{item.name}
        <div className="icon_wrap">
        <i className="bi bi-pencil-square" onClick={()=>handleEditBtn(item.name,index)}></i>
        <i className="bi bi-trash" onClick={()=>handleDelbtn(index)} ></i>
        </div>
        </li>
        </>
    )
}
export default ShowList;