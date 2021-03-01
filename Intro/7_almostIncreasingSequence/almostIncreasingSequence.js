function almostIncreasingSequence(seq) {
   if (seq.length < 2) return true;

   let deletion = false;

   const runTest = (i) => {
      let start = i - 2 < 0 ? 0 : i - 2;
      let end = i + 2 > seq.length - 1 ? seq.length : i + 3;
      const testArr = seq.slice(start, end);
      let fails = 0;

      for (let a = 0; a < testArr.length; a++) {
         const subTest = testArr.filter((val, index) => index !== a);

         for (let b = 0; b < subTest.length - 1; b++) {
            if (subTest[b] >= subTest[b + 1]) {
               fails++;
               break;
            }
         }
      }

      if (fails === testArr.length) return false;
      return true;
   };

   for (let i = 0; i < seq.length - 1; i++) {
      if (seq[i] >= seq[i + 1] || seq[i - 1] >= seq[i + 1]) {
         if (deletion === true) return false;

         if (runTest(i)) {
            deletion = true;
            i += 2;
         } else {
            return false;
         }
      }
   }

   return true;
}

/*
// FAILED ATTEMPT: Failed 2 test hidden cases I couldnt reproduce.
function almostIncreasingSequence(seq) {
   let deletions = 1
   const checking= () =>{
         for(let i =0; i< seq.length-1; i++){             
            if(seq[i] >= seq[i+1]){ 
               
               if(!deletions){
                  return false
               }
               
               deletions--
               
               if(seq[i-1] >= seq[i+1]){
                  seq.splice(i+1, 1)
               } else {
                  seq.splice(i, 1)
               }
               
               return checking()
            }
         }
         return true
   }

   return checking()
}
*/
