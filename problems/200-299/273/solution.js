/*
 * @lc app=leetcode id=273 lang=javascript
 *
 * [273] Integer to English Words
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) return "Zero";

  const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  const helper = (num) => {
    if (num === 0) return "";
    else if (num < 20) return belowTwenty[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return belowTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
  };

  let result = "";
  for (let i = 0; num > 0; i++) {
    if (num % 1000 !== 0) {
      result = helper(num % 1000) + thousands[i] + " " + result;
    }
    num = Math.floor(num / 1000);
  }

  return result.trim();
};
// @lc code=end


// TEST:
console.log(numberToWords(1234567891)); // "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
console.log(numberToWords(1234567)); // "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(123)); // "One Hundred Twenty Three"
console.log(numberToWords(12345)); // "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(123456789)); // "One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine"
console.log(numberToWords(0)); // "Zero"
console.log(numberToWords(1000000)); // "One Million"
console.log(numberToWords(1000000000)); // "One Billion"
console.log(numberToWords(1000000001)); // "One Billion One"
console.log(numberToWords(1000000009)); // "One Billion Nine"
console.log(numberToWords(1000000090)); // "One Billion Ninety"
console.log(numberToWords(1000000900)); // "One Billion Nine Hundred"