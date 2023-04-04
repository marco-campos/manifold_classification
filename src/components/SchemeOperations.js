const schemeOperations ={
    schemeFlip: (arr) => {
        const flipped_arr = arr.slice().reverse();
        const result = [];
      
        for (const letter of flipped_arr) {
          if (letter.endsWith("'")) {
            result.push(letter.slice(0, -1));
          } else {
            result.push(letter + "'");
          }
        }
      
        return result;
      },
      isTorusType: (arr) => {
        const letters = new Set();
        const apostrophes = new Set();
        
        for (let letter of arr) {
          if (letter.endsWith("'")) {
            letter = letter.slice(0, -1); // remove the apostrophe
            if (apostrophes.has(letter)) {
              return false;
            }
            apostrophes.add(letter);
          } else {
            if (letters.has(letter)) {
              return false;
            }
            letters.add(letter);
          }
        }
        
        return letters.size === apostrophes.size && arr.length % 2 === 0;
      }


}

export default schemeOperations



 
  