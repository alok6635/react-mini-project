import ShowList from "./ShowList";

const List = ({todoItems})=>{
    return (
        <>
                {
                    todoItems.length > 0 ? todoItems.map((item,index) => <ShowList item={item} key={index} index={index}/>):<span>data not found</span>
                }

        </>
    )
}

export default List;