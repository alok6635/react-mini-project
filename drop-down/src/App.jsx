import { useState } from "react";

const App = () => {
  const [data, setData] = useState();

  const handleSel=(e)=>{
    setData(e.target.value)
  }

  return (
    <>
        <h3>{data}</h3>
      <select  onChange={handleSel}>
        <option>mango</option>
        <option>orange</option>
        <option>grapes</option>
        <option>banana</option>
      </select>
    </>
  )
}
export default App;