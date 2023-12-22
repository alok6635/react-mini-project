const DisplayItem=({item,index,handleDel})=>{
    const delBtn=(index)=>{
        handleDel(index)
    }
    return(
        <>
            <ul>
                <li>
                    {item.userName}
                    <button onClick={()=>delBtn(index)}>Del</button>
                    </li>
            </ul>
        </>
    )

}

export default DisplayItem;