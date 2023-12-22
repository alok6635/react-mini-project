const Error=({user})=>{

    return(
        <>
        {user.length==0 ? <h1>data not found</h1>: ''}
        </>
    )
}

export default Error;