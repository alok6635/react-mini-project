const Error=({user})=>{

    return(
        <>
        {user.length==0 ? <h5>Data is empty</h5>: ''}
        </>
    )
}

export default Error;