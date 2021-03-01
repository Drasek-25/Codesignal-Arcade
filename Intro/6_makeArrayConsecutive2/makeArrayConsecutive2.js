function makeArrayConsecutive2(statues) {
   if (statues.length === 0) return 1;
   statues = statues.sort((a, b) => a - b);
   let count = 0;
   for (let i = 0; i < statues.length - 1; i++) {
      count += statues[i + 1] - statues[i] - 1;
   }
   return count;
}
