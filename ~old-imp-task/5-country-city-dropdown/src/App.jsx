import { useState } from "react";

export default function App() {
  let [country, setCountry] = useState([]);

  let data=[
    {
      name: "india",
      code: "in",
      cities: ["delhi", "kanpur",'lucknow']
    },
    {
      name: "America",
      code: "22",
      cities: ["New yark",'washington','golal']
    },
    {
      name:'nepal',
      code:542,
      cities:['kadmandu','noida','mathura']
    }
  ];
  return (
    <>
      <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
        {data.map((item,index)=>{
          return <option value={index}>{item.name}</option>;
        })}
      </select>

      <select value={country}>
        {data[country]?.cities.map((item,index)=>(
          <option>{item}</option>
        ))}
      </select>
    </>

  );
}
