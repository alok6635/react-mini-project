import React from "react";

const Data = ({ listValue, delItem, index }) => {

  const handleDel = () => {
    delItem(listValue.id);
  };

  return (
    <>
      <ul>
        <li>
        {index}  {listValue.userName==0 ? <p>item not found</p>:null} 
          <button onClick={handleDel}>Del</button>
        </li>
      </ul>
    </>
  );
};

export default Data;
