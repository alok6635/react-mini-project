import React, { useState } from "react";
import Data from "./Data";

const App = () => {
  const userList=[]
  // const userList = [
  //   { id: 1, userName: 'alok' },
  //   { id: 2, userName: 'aman' },
  //   { id: 3, userName: 'kittu' },
  //   { id: 4, userName: 'ramu' },
  //   { id: 5, userName: 'rohit' },
  //   { id: 6, userName: 'anish' },
  //   { id: 7, userName: 'sujit' },
  // ];


  const [data, setData] = useState(userList);

  const handleDel = (id) => {
    console.log(id);
    const updatedData = data.filter((user,index) => index !== id);
    setData(updatedData);
  };

  return (
    <>
      {data.map((item, index) => (
        <Data  listValue={item} index={index} delItem={handleDel} />
      ))}
    </>
  );
};

export default App;
