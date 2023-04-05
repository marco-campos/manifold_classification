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
      },

    // Operations for Lemma 77.1

      operation_77_1: (arr) => {
        const a = schemeOperations.findRepeatingElement(arr);
        if (a === null) {
          return arr;
        }
        const [y0, y1, y2] =schemeOperations.splitArray(arr, a);
        const flippedY1 =schemeOperations.schemeFlip(y1);
        const newW = [...a, ...a, ...y0, ...flippedY1, ...y2];
        return newW;
      },
      
      findRepeatingElement: (arr) => {
        const found = new Set();
        for (let i = 0; i < arr.length; i++) {
          const curr = arr[i];
          if (found.has(curr)) {
            const prev = arr[i - 1];
            const next = arr[i + 1];
            if (prev !== curr && next !== curr) {
              return curr;
            }
          } else {
            found.add(curr);
          }
        }
        return null;
      },
      
      splitArray: (arr, a) => {
        const i1 = arr.indexOf(a[0]);
        const i2 = arr.lastIndexOf(a[0]);
        const y0 = arr.slice(0, i1);
        const y1 = arr.slice(i1 + 1, i2);
        const y2 = arr.slice(i2 + 1);
        return [y0, y1, y2];
      },

      splitAtNonConsecutiveDoubles: (arr) =>{
        let i = 0;
        while (i < arr.length && arr[i] === arr[i+1]) {
            i += 2;
        }
        const doubles = arr.slice(0, i);
        const rest = arr.slice(i);
        return [doubles, rest];
             
          
      },
      operation_77_2: (arr) =>{
        if (!schemeOperations.isTorusType(arr)){
            let [doubles, split_arr] = schemeOperations.splitAtNonConsecutiveDoubles(arr)
            if (schemeOperations.isTorusType(split_arr)){
                return arr
            }
            let current_checks = 0
            while (!schemeOperations.isTorusType(split_arr)){
                let current_arr = schemeOperations.operation_77_1(split_arr)
                let [new_doubles, new_split_arr] = schemeOperations.splitAtNonConsecutiveDoubles(current_arr)
                if (schemeOperations.isTorusType(new_split_arr)){
                    return [...doubles, ...current_arr]
                } else if (current_checks === 10){
                    console.log("max exceeded for operation 77_2")
                    break
                } else{
                    console.log("Here we go again")
                    split_arr = new_split_arr
                    doubles = [...doubles, ...new_doubles]
                    continue
                }
            }
        }else{
            console.log("Torus Type, can't use this function")
            return arr
        }
      },
      operation_77_3: (arr) =>{
            let i = 0;
            let w0 = [];
            let w1 = [];
            while (i < arr.length - 5) {
              if (arr[i] === arr[i + 1]) {
                let j = i + 2;
                if ((arr[j] === arr[j + 2][0] && arr[j + 1] === arr[j + 3][0] && j + 3 < arr.length) || (arr[j][0] === arr[j + 2] && arr[j + 1][0] === arr[j + 3] && j + 3 < arr.length)) {
                  w0 = arr.slice(0, i);
                  w1 = arr.slice(j + 4);
                  return w0.concat([arr[i+2], arr[i+2], arr[i+3], arr[i+3], arr[i], arr[i]], w1);
                }
                i = j;
              } else {
                i++;
              }
            }
          
            return arr;          
      }
      
      
      
}

export default schemeOperations



 
  