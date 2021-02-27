function adjacentElementsProduct(inputArray) {
   let largestNum = Number.MIN_SAFE_INTEGER;
   for (let i = 0; i < inputArray.length - 1; i++) {
      const curPair = inputArray[i] * inputArray[i + 1];
      if (curPair > largestNum) largestNum = curPair;
   }
   return largestNum;
}
