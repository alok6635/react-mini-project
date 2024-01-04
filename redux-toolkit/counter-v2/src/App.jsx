import { useSelector } from "react-redux";
import Control from "./Components/Control";
import Display from "./Components/Display";
import './index.css';


const App=()=>{
  const privacy= useSelector(store=>store.privacy)

  return(
    <>
    <div className="wrapper">
    {privacy ?<h2>This is hide and show</h2>:<Display/>}
       <Control/>
    </div>
    </>
  )
}
export default App;