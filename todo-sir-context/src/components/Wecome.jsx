const Welcome=({todoData})=>{

    return(
        <>
       { todoData.length==0 && <h3>Enjoy your day</h3>}
        </>
    )
}

export default Welcome;