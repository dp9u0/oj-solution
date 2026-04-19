/*
 * @lc app=leetcode id=2451 lang=javascript
 *
 * [2451] Odd String Difference
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
  const getKey = (word) => {
    const diffs = [];
    for (let i = 1; i < word.length; i++) {
      diffs.push(word.charCodeAt(i) - word.charCodeAt(i - 1));
    }
    return diffs.join(',');
  };

  const map = new Map();
  for (const word of words) {
    const key = getKey(word);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  for (const [, arr] of map) {
    if (arr.length === 1) return arr[0];
  }
};
// @lc code=end

// TEST:
console.log(oddString(['adc','wzy','abc'])); // 'abc'
console.log(oddString(['aaa','bob','ccc','ddd'])); // 'bob'
