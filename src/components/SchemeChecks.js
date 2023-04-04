const schemeChecks ={

    convertStringToArray: (str) => {
            const arr = [];
            let i = 0;
            while (i < str.length) {
              const currChar = str[i];
              if (currChar === "'") {
                i++;
                continue;
              }
              let nextChar = '';
              if (i < str.length - 1) {
                nextChar = str[i + 1];
              }
              if (/[a-zA-Z]/.test(currChar) && (nextChar === "'" || i === str.length - 1)) {
                arr.push(currChar + nextChar);
                i += 2;
              } else if (/[a-zA-Z]/.test(currChar)) {
                arr.push(currChar);
                i++;
              } else {
                i++;
              }
            }         
  return arr;
      
      },
    
    isProper: (arr) => {
        
        const count = {};
        for (let i = 0; i < arr.length; i++) {
            const letter = arr[i].toLowerCase().replace("'", "");
            count[letter] = (count[letter] || 0) + 1;
        }
        for (const letter in count) {
            if (count[letter] !== 2) {
            return false;
            }
        }
        return true;
          
      }
}

export default schemeChecks
