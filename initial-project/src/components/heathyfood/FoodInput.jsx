const FoodInput=()=>{
    return(
        <>
        <input type="text" placeholder="Enter food here"  className="foodItems" onChange={(e)=>console.log(e.target.value)}/>
        
        </>
    )
}
export default FoodInput;
