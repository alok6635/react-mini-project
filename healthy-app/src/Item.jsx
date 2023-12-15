import ShowItem from "./ShowItems";

const Item=({foodList})=>{

    return(
        <>
        {
            foodList.map((item)=><ShowItem item={item}/>)
        }
        </>
    )
}
export default Item;