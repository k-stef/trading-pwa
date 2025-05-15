import React, { useState } from 'react';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const calculateResult = () => {
        try {
            // Evaluate the input expression
            const evalResult = eval(inputValue);
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter calculation"
            />
            <button onClick={calculateResult}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default Calculator;