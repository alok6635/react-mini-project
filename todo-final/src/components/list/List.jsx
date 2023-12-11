import ShowList from "./ShowList";

const List = ({todoItems,handleDel,handleEdit})=>{
    return (
        <>
                {
                    todoItems.length > 0 ? todoItems.map((item,index) => <ShowList item={item} key={index} index={index} handleDel={handleDel} handleEdit={handleEdit}/>):<span>data not found</span>
                }

        </>
    )
}

export default List;