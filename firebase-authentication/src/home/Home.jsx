import { Link } from "react-router-dom";

const Home=(props)=>{
    return(
        <>
        <ul>
<li><Link to='/login'/>Login </li>
<li><Link to='/signup'/>Signup</li>
        </ul>
        <h2>{props.name ? `welocome -${props.name}`:"login please"}</h2>
        </>
    )
}

export default Home;
