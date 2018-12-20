/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let length = digits.length;
  digits[length-1] ++;
  let carrying = 0;
  for(let index = length - 1 ; index >= 0 ;index--){
      let digit = digits[index] + carrying;
      digits[index] = digit % 10;
      carrying = ~~(digit / 10)
  }
  if(carrying) {
      digits.unshift(carrying)
  }
  return digits;
};