function checkPalindrome(inputString) {
   for (front = 0; front < Math.ceil(inputString.length / 2); front++) {
      const back = inputString.length - (front + 1);
      if (inputString[front] !== inputString[back]) return false;
   }
   return true;
}
