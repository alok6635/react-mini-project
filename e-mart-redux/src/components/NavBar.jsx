import { Outlet } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {

    return (
        <>
          <main>
            <Header/>
           <Outlet/>
        </main>

        </>
    )
}
export default NavBar;