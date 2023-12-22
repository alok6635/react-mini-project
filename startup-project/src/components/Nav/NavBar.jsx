import { Link, Outlet } from "react-router-dom";

const NavBar=()=>{

    return(
        <>
        <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/item'>Item</Link>
        </div>
        <Outlet/>
        </>
    )
}


export default NavBar;