function operation_77_1(arr) {
    const a = findRepeatingElement(arr);
    if (a === null) {
      return arr;
    }
    const [y0, y1, y2] = splitArray(arr, a);
    const flippedY1 = flipArray(y1);
    const newW = [...a, ...a, ...y0, ...flippedY1, ...y2];
    return newW;
  }
  
  function findRepeatingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
      const prev = arr[i - 1];
      const curr = arr[i];
      const next = arr[i + 1];
      if (curr !== prev && curr !== next) {
        return [curr];
      }
    }
    return null;
  }
  
  function splitArray(arr, a) {
    const i1 = arr.indexOf(a[0]);
    const i2 = arr.lastIndexOf(a[0]);
    const y0 = arr.slice(0, i1);
    const y1 = arr.slice(i1 + 1, i2);
    const y2 = arr.slice(i2 + 1);
    return [y0, y1, y2];
  }
  
  function flipArray(arr) {
    return arr.slice().reverse();
  }

export default operation_77_1