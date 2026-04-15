/*
 * @lc app=leetcode id=2075 lang=javascript
 *
 * [2075] Decode the Slanted Ciphertext
 */

// @lc code=start
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
  if (!encodedText.length) return '';
  const cols = encodedText.length / rows;
  const chars = [];
  for (let startCol = 0; startCol < cols; startCol++) {
    for (let r = 0, c = startCol; r < rows && c < cols; r++, c++) {
      chars.push(encodedText[r * cols + c]);
    }
  }
  return chars.join('').trimEnd();
};
// @lc code=end

// TEST:
console.log(decodeCiphertext('ch   ie   pr', 3)); // 'cipher'
console.log(decodeCiphertext('iveo    eed   l te   olc', 4)); // 'i love leetcode'
console.log(decodeCiphertext('coding', 1)); // 'coding'
