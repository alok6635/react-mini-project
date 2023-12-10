import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDel = () => {
    setIsVisible(false);
  };

  const handleShow = () => {
    setIsVisible(true);
  };

  return (
    <>
      {isVisible && <h2 style={{ color: "red" }}>my name is alok</h2>}
      <button onClick={handleDel}>Delete</button>
      <button onClick={handleShow}>Show</button>
    </>
  );
};

export default App;
