import React from 'react'

const AppControlsInputs = () => {
  return (
<>
<div className='App_control'>
<div className='control_Input'>
      <input type="text" placeholder='Meal' value="" />
      <input type="Number" placeholder='Cailories' value="" />
      <button className='btn'>Add Meal</button>
    </div>
</div>

</>

   
  )
}

export default AppControlsInputs;