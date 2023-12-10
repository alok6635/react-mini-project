import React from "react";

const MedicationList =({input,medicine})=>{

  return (
    <div className="medication-list">
      <h2>Medication List</h2>
      <ul>
      <li>
            <input type="checkbox" />
            <span>SSSS</span> - <span>dffff mg</span>-
            <span>cdccd</span>
            <button>Delete</button>
          </li>
      </ul>
    </div>
  );
};

export default MedicationList;
