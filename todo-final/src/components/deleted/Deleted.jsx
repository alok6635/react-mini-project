const Deleted=({deleted})=>{
    
    return(
        <>
        {
            deleted.length >0 ? 
            deleted.map((item,index)=>{
              return  <li className="list-group-item pb-2"key={index}>{item.name}</li>
            }): <span>data not found</span> 
        }
        </>
    )
}
export default Deleted;