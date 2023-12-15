import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";



const App=()=>{

  const router=createBrowserRouter([
      {path:'/', element:<NavBar/>,children:[
      {path:'/dashboard',element:<Dashboard/>},
      {path:'/cart', element:<Cart/>}
    ]}
  ])


  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App;