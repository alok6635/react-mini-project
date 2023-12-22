import { useState } from "react";

const CheckboxDeleted = () => {

    const arr = ['play cricket', 'play video game', 'reading books','coding'];
    const [arrCopy, setArrCopy] = useState(arr);
    const [checkedIndex, setCheckIndex] = useState(null);

    const handleCheck = (index) => {
        setCheckIndex(index);
    }
const handleDel=(index)=>{
    const filterData=arrCopy.filter((item,id)=>id !==index)
    setArrCopy(filterData)
}

    return (
        <>
            <ul>
                {
                    arrCopy.map((item, index) => {
                        return <li key={index}>
                            <input type="checkbox" onClick={() => handleCheck(index)} />
                            <span>{item}</span>
                            {checkedIndex === index && <button onClick={()=>handleDel(index)}>Del</button>}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default CheckboxDeleted;