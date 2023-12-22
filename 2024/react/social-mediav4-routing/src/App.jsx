import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import PostStore from "./store/PostListStore";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
   <PostStore>
      <Header/>
      <div className="wrapper">
        <SideBar/>
        <Outlet/>
      </div>
      <Footer/>
   </PostStore>
    </>
  )
}
export default App;