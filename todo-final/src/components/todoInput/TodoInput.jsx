import {useEffect,useState} from "react";

const TodoInput = ({handleInpFtn,edit}) => {
    console.log(edit);

    const [inputValue, setInputValue]=useState();

    useEffect(()=>{
setInputValue(edit.item)
    },[edit])

    const handleInp = (e) => {
        setInputValue(e.target.value)
    }
    const handleAdd=()=>{
        if(inputValue){
            handleInpFtn(inputValue);
            setInputValue('')
        }
    }


    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Please enter here " onChange={handleInp} value={inputValue}/>
                <button className="btn btn-success py-1" type="button" id="button-addon2" onClick={()=>handleAdd()}>Add</button>
            </div>
        </>
    )
}
export default TodoInput;