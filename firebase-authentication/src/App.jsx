import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./home/Home";
import Signup from "./signup/Signup";
import Login from "./login/Login";


const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='signup' element={<Signup/>}/>
      <Route path ='login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;