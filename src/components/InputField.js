import React, { useState } from 'react';
import './InputField.css';
import schemeChecks from './SchemeChecks.js'; 
import schemeOperations from './SchemeOperations';

function InputField() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [currentType, setCurrentType] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (checkInputValidity(inputValue)) {
      const inputArray = schemeChecks.convertStringToArray(inputValue)
      console.log(inputArray)
      console.log("Proper Scheme?", schemeChecks.isProper(inputArray))
      if (schemeChecks.isProper(inputArray)){
        if (schemeOperations.isTorusType(inputArray)){
            setCurrentType("Torus")
        }else{
            setCurrentType("Projective")
        }
        console.log("Is Torus Type?", schemeOperations.isTorusType(inputArray))
        setDisplayValue(inputArray);
        setInputValue('');
      } else{
         setDisplayValue('Not a proper scheme')
         console.log("not a proper scheme")
         setInputValue('')
      }
     } else {
      setDisplayValue('Input must contain only lowercase letters or apostrophes');
      setInputValue('')
    }
  };

  const checkInputValidity = (inputString) => {
    const regex = /^[a-z']+$/
    let prevCharIsApostrophe = false;
    if (inputString[0] === "'"){
        return false
    }
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === "'" && (prevCharIsApostrophe || inputString[i+1] === "'")) {
        return false;
      }
      if (!regex.test(inputString[i])) {
        return false;
      }
      prevCharIsApostrophe = inputString[i] === "'";
    }
  
    return true;
  };
  

  return (
    <div className="InputField">
      <h2>Input Field</h2>
      <form onSubmit={handleInputSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
      {displayValue && <h2>{displayValue}</h2>}
      {displayValue && <h2>Torus Type: {currentType}</h2>}
    </div>
  );
}

export default InputField;
