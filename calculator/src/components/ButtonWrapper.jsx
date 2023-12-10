const ButtonWrapper=({btnData,handleBtn})=>{


    const handleInptBtn=(item)=>{
        handleBtn(item);
    }

    return(
        <>
        <div className="wrap_button">
            {btnData.map((item,index)=>{
            return <button key={index} className={item =='AC' || item == '=' ? 'last' : '' }  onClick={()=>handleInptBtn(item)}>{item}</button>
            })}
                </div>
        </>
    )
}

export default ButtonWrapper;