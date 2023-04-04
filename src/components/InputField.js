import React, { useState } from 'react';
import './InputField.css';
import schemeChecks from './SchemeChecks.js'; 
import schemeOperations from './SchemeOperations';
import manifoldTests from './ManifoldTests';

function InputField() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [currentType, setCurrentType] = useState('')
  const [manifoldClass, setManifoldClass] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (checkInputValidity(inputValue)) {
      const inputArray = schemeChecks.convertStringToArray(inputValue)
      if (schemeChecks.isProper(inputArray)){
        if (schemeOperations.isTorusType(inputArray)){
            setCurrentType("Torus")
            if (inputArray.length === 4){
                if (manifoldTests.checkSphere(inputArray)){
                    setManifoldClass('S^2')
                } else if (manifoldTests.checkTorus(inputArray)){
                    setManifoldClass('T^2')
                }
            }
            
        }else{
            setCurrentType("Projective")

        }
        setDisplayValue(inputArray);
        setInputValue('');
      } else{
         setDisplayValue('Not a proper scheme')
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
      {displayValue && <h2>Manifold Type: {currentType}</h2>}
      {displayValue && <h2>Manifold Classification: {manifoldClass}</h2>}
    </div>
  );
}

export default InputField;
