const ClockTime=()=>{
 let time=new Date();

    return(
        <>
       <h1>This is the current time:{time.toLocaleDateString()}-{" "} {time.toLocaleTimeString()} </h1>
        </>
    )
}

export default ClockTime;