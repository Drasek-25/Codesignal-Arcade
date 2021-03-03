function matrixElementsSum(matrix) {
   const haunt = [];
   matrix[0].forEach(() => haunt.push(0));
   let price = 0;

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         let curRoom = matrix[i][j];

         if (curRoom === 0) {
            haunt[j] = 1;
            continue;
         } else if (haunt[j] === 0) {
            price += curRoom;
         }
      }
   }
   return price;
}
