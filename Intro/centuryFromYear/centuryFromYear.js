function centuryFromYear(year) {
   const strYear = year.toString();
   let century = parseInt(strYear.slice(0, -2));
   if (!century) return 1;

   for (let i = strYear.length - 2; i < strYear.length; i++) {
      if (parseInt(strYear[i]) > 0) return century + 1;
   }

   return century;
}
