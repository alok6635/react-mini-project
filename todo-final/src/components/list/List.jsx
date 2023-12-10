import ShowList from "./ShowList";

const List = ({ todoItems,handleDel }) => {
    return (
        <>
                {
                    todoItems.length > 0 ? todoItems.map((item,index) => <ShowList item={item} key={index} index={index} handleDel={handleDel}/>) : <h2>data not found</h2>
                }

        </>
    )
}

export default List;