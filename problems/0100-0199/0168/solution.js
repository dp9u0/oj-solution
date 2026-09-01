/**
 * @param {number} n
 * @return {string}
 */
const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']
var convertToTitle = function (n) {
  return n === 0 ? "" : convertToTitle(~~((n - 1) / 26)) + map[n % 26];
};