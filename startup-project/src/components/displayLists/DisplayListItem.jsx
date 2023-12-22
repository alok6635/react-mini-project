import { useState } from "react";
import DisplayItem from "./DisplayItem";
import Error from "./Error";

const DisplayListItem=()=>{
    let user=[
        // {id:1,userName:'alok'},
        // {id:2,userName:'aman'},
        // {id:3,userName:'kittu'},
        // {id:4,userName:'ramu'},
        // {id:5,userName:'rohit'},
        // {id:6,userName:'anish'},
        // {id:7,userName:'sujit'},
        ]
const [data,setData]=useState(user);

const handleDel=(index)=>{
      const filterData=data.filter((item,id)=>index !== id);
       setData(filterData)
}
    return(
        <>
        {data.map((item,index)=><DisplayItem item={item} key={index} index={index} handleDel={handleDel}/>)}
        <Error user={user}/>
        </>
    )
}

export default DisplayListItem;