import { useRef } from "react";
import { useDispatch } from "react-redux";
import Display from "./Display";

const Control = () => {
  const inpVal = useRef();
  const dispatch = useDispatch();

  const Incre=()=>{
    dispatch({ type: 'incre' })
  }

  const Dcre=()=>{
    dispatch({ type: 'dcre' })
  }

  const handelAdd = () => {
    dispatch(
      {
        type: 'Add',
        payload: {
          num: inpVal.current.value
        }
      }
    )
    inpVal.current.value = ''
  }

  const handleSub = () => {
    dispatch(
      {
        type: 'Sub',
        payload: {
          num: inpVal.current.value
        }
      }
    )
    inpVal.current.value = ''
  }

const handlePriv=()=>{
  dispatch(
    {
      type:'priv'
    })
}

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => Incre()}>Incre</button>
      <button type="button" className="btn btn-secondary" onClick={() => Dcre()}>Dcre</button>
      {}
      <button className="btn btn-success" onClick={handlePriv}>privacy</button><br/>
      <input type="text" ref={inpVal} />
      <button type="button" className="btn btn-info" onClick={handelAdd}>Add</button>
      <button type="button"  className="btn btn-danger" onClick={handleSub}>Subtract</button>
    </>
  )
}

export default Control;