const ShowList=({item,index,handleDel})=>{

const handleDelbtn=(index)=>{
    handleDel(index)
}

    return( 
        <>
        <li className="list-group-item pb-2 d-flex justify-content-between">{item.name}
        <div className="icon_wrap">
        <i className="bi bi-pencil-square" onClick={()=>handleDelbtn(index)}></i>
        <i class="bi bi-trash" onClick={()=>handleDelbtn(index)}></i>
        </div>
        </li>
        </>
    )
}
export default ShowList;