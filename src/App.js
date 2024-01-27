import "./main.css";
import React, { useState } from 'react';


const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        <button onClick={() => handleButtonClick('C')} className="clear">C</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('/')} className="operator">&divide;</button>
        <button onClick={() => handleButtonClick('7')} className="number">7</button>
        <button onClick={() => handleButtonClick('8')} className="number">8</button>
        <button onClick={() => handleButtonClick('9')} className="number">9</button>
        <button onClick={() => handleButtonClick('*')} className="operator">&times;</button>
        <button onClick={() => handleButtonClick('4')} className="number">4</button>
        <button onClick={() => handleButtonClick('5')} className="number">5</button>
        <button onClick={() => handleButtonClick('6')} className="number">6</button>
        <button onClick={() => handleButtonClick('-')} className="operator">-</button>
        <button onClick={() => handleButtonClick('1')} className="number">1</button>
        <button onClick={() => handleButtonClick('2')} className="number">2</button>
        <button onClick={() => handleButtonClick('3')} className="number">3</button>
        <button onClick={() => handleButtonClick('+')} className="operator">+</button>
        <button onClick={() => handleButtonClick('DEL')} className="delete">DEL</button>
        <button onClick={() => handleButtonClick('0')} className="number">0</button>
        <button onClick={() => handleButtonClick('.')} className="number">.</button>
        <button onClick={() => handleButtonClick('=')} className="equals">=</button>
      </div>
    </div>
  );
};

export default Calculator;
