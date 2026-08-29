/*
 * @lc app=leetcode id=1624 lang=javascript
 *
 * [1624] Largest Substring Between Two Equal Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const first = Array(26).fill(-1);
  let ans = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i) - 97;
    if (first[c] === -1) {
      first[c] = i;
    } else {
      ans = Math.max(ans, i - first[c] - 1);
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxLengthBetweenEqualCharacters('aa') === 0);
console.log(maxLengthBetweenEqualCharacters('abca') === 2);
console.log(maxLengthBetweenEqualCharacters('cbzxy') === -1);
console.log(maxLengthBetweenEqualCharacters('a') === -1);
console.log(maxLengthBetweenEqualCharacters('abba') === 2);
console.log(maxLengthBetweenEqualCharacters('abcdefa') === 5);
console.log(maxLengthBetweenEqualCharacters('mgntdygtxrvxjnwksqhxuxtrv') === 18);
