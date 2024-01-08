import { useState } from "react";

const App = () => {
  const [color, setColor] = useState()

  return (
    <>
      <div className="wrapper" style={{ backgroundColor: color }}>
        <div className="btn_cover">
          <button type="button" className="btn btn-primary" onClick={() => setColor('blue')}>blue</button>
          <button type="button" className="btn btn-warning" onClick={() => setColor('yellow')}>yellow</button>
          <button type="button" className="btn btn-danger" onClick={() => setColor('red')}>red</button>
        </div>
      </div>

    </>
  )
}
export default App;