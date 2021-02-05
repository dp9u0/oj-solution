/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  return str1.substring(0, gcd(str1.length, str2.length))
};
const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))

// TEST:

let str1, str2, result;

str1 = "ABCABC", str2 = "ABC"
result = gcdOfStrings(str1, str2);
console.log(result);

str1 = "ABABAB", str2 = "ABAB"
result = gcdOfStrings(str1, str2);
console.log(result);

str1 = "LEET", str2 = "CODE"
result = gcdOfStrings(str1, str2);
console.log(result);
