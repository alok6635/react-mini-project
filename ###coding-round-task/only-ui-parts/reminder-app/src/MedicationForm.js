import { useState } from "react";
import MedicationList from "./MedicationList";

const MedicationForm =()=>{
  const[input,setInput]=useState('');
  const[medicine,setMedicine]=useState('');


  const handleInp=(e)=>{
      setInput(e.target.value)
  }

const handleMed=(e)=>{
    setMedicine(e.target.value)
  }
  return (
    <>
    <h1>Medication Reminder App</h1>
    <form>
      <input type="text" placeholder="Medication Name" onChange={handleInp} value={input}/>
      <input type="number" placeholder="Dosage in mg" onChange={handleMed} value={medicine}/>
      <div className="time-input-container">
        {/* <input type="time"  placeholder="Time" value=""/> */}
        {/* <select  value="Am">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select> */}
      </div>
      <button type="submit">Add Medication</button>
    </form>
    <MedicationList input={input} medicine={medicine}/>
    </>
    
  );
};

export default MedicationForm;
