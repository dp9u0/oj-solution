/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let prevRunLength = 0,
    curRunLength = 1,
    result = 0;
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) === s.charCodeAt(i - 1)) curRunLength++;
    else {
      prevRunLength = curRunLength;
      curRunLength = 1;
    }
    if (prevRunLength >= curRunLength) result++;
  }
  return result;
};