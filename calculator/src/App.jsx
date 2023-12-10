import { useState } from "react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";
import Calculator from "./components/Calculator";


const App = () => {
    const [showInput, setShowInput] = useState('');

    const btnData = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'AC', '0', '=', '+']

    const handleBtn = (item) => {
        switch (item) {
            case '=':
                if (showInput != '') {
                    setShowInput((prev) => eval(prev))
                }

                break;
            case 'AC':
                setShowInput((prev) => prev = '')
                break;

            default:
                setShowInput((prev) => prev + item)
                break;
        }
    }

    return (
        <>
            <Calculator />
            <div className="mainwrapper">
                <Display showInput={showInput} />
                <ButtonWrapper btnData={btnData} handleBtn={handleBtn} />
            </div>
        </>
    );
};
export default App;
