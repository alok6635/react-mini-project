import ShowFoodList from "./ShowFoodList";

const FoodTrans = ({foodItems}) => {
    return (
        <>
        <ul className="fooditem">

        {
            foodItems.map((item,index)=><ShowFoodList item={item} key={index}/>)
        }
        </ul>

        </>
    )
}

export default FoodTrans;