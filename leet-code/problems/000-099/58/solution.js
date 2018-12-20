/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  let i = s.length - 1;
  while (s[i] === " " && i >= 0) {
    i--;
  }
  while (i >= 0 && s[i] !== " ") {
    i--;
    length++;
  }
  return length;
};