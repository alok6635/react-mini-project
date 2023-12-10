const Deleted=({deleted})=>{
    console.log(deleted);
    return(
        <>
        {
            deleted.length >0 ? 
            deleted.map((item,index)=>{
              return  <li className="list-group-item pb-2"key={index}>{item.name}</li>
            }): <h2>data not found</h2> 
        }
        </>
    )
}
export default Deleted;