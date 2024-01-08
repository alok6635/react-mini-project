const ShowFoodList=({item})=>{

   const handleBuy=()=>{
    console.log(`${item} being  bought`);
   }

    return(

        <>
            <li className="showItem">
                {item}
                <button onClick={handleBuy}>Buy</button>
            </li>
        </>
    )
}

export default ShowFoodList;
