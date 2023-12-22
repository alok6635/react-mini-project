import { useState } from "react";

const ShowDeleteText = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleShow = () => {
        setIsVisible(true);
    };

    const handleDel = () => {
        setIsVisible(false);
    };

    return (
        <>
        <p>delete and show text conditionaly</p>
            {isVisible ? <h2>Alok kumar</h2> : ''}
            <button onClick={handleDel}>Delete</button>
            <button onClick={handleShow}>Show</button>
        </>
    );
}

export default ShowDeleteText;