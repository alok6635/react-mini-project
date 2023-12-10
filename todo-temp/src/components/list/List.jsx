import ShowList from "./ShowList";

const List = ({todoItems}) => {
    return (
        <>
        <ul>
        {
                todoItems.map((item,index)=><ShowList item={item} key={index}/>)
            }
        </ul>
           
        </>
    )
}

export default List;