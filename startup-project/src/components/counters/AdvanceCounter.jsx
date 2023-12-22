import { useState } from "react";

const AdvanceCounter = () => {
    const[count,setCount]=useState(0);


    return (
        <>
            <p>Advance counter</p>
            <button>Start</button>
            <button>Pause</button>
            <button>Reset</button>
            <button>Restart</button>
        </>
    )
}

export default AdvanceCounter;