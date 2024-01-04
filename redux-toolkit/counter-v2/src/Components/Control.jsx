import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Control = () => {

  const inpVal = useRef();
  const dispatch = useDispatch();

  const Incre = () => {
    dispatch(counterActions.incre())

  }

  const Dcre = () => {
    dispatch(counterActions.dcre())
  }

  const handelAdd = () => {
    dispatch(counterActions.add({
      num: inpVal.current.value,
    }))
    inpVal.current.value = ''
  }

  const handleSub = () => {
    dispatch(counterActions.sub({
      num: inpVal.current.value
    }))
    inpVal.current.value = ''
  }

  const handlePriv = () => {
    dispatch(privacyActions.toggle())
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => Incre()}>Incre</button>
      <button type="button" className="btn btn-secondary" onClick={() => Dcre()}>Dcre</button>
      { }
      <button className="btn btn-success" onClick={handlePriv}>privacy</button><br />
      <input type="text" ref={inpVal} />
      <button type="button" className="btn btn-danger" onClick={handelAdd}>Add</button>
      <button type="button" className="btn btn-info" onClick={handleSub}>Sub</button>
    </>
  )
}

export default Control;