import { useState } from "react";

export default function App() {
  const arr = ['play cricket', 'play video game', 'reading books'];
  const [arrCopy, setArrCopy] = useState(arr);
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleDel = (index) => {
    const filterData = arrCopy.filter((item, id) => index !== id);
    setArrCopy(filterData);
    setCheckedIndex(null);
  }

  const handleCheck = (index) => {
    setCheckedIndex(index);
  }

  return (
    <>
      <ul>
        {arrCopy.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onClick={() => handleCheck(index)} />
            <span>{item}</span>
            {checkedIndex === index && <button onClick={() => handleDel(index)}>Del</button>}
          </li>
        ))}
      </ul>
    </>
  );
}
