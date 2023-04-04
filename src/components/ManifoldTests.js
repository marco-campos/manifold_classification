const manifoldTests = {
    checkSphere: (arr) =>{
            if (arr.length !== 4) {
              return false;
            }
            const [letter1, letter1WithApostrophe, letter2, letter2WithApostrophe] = arr;
            if (letter1.includes("'") || letter2.includes("'")) {
              return false;
            }
            if (letter1 !== letter1WithApostrophe[0] || letter2 !== letter2WithApostrophe[0]) {
             
              return false;
            }
            if (letter1 === letter2) {
              return false;
            }
            if (letter1WithApostrophe === letter2WithApostrophe) {
              return false;
            }
            return true;          
    },
    checkTorus: (arr) =>{
            if (arr.length !== 4) {
              return false;
            }
            const [letter1, letter2, letter1WithApostrophe, letter2WithApostrophe] = arr;
            if (letter1.includes("'") || letter2.includes("'")) {
              return false;
            }
            if (letter1 !== letter1WithApostrophe[0] || letter2 !== letter2WithApostrophe[0]) {
            
              return false;
            }
            if (letter1 === letter2) {
              return false;
            }
            if (letter1WithApostrophe === letter2WithApostrophe) {
              return false;
            }
            return true;      
    }
    
}

export default manifoldTests