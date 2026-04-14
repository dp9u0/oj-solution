/*
 * @lc app=leetcode id=1542 lang=javascript
 *
 * [1542] Find Longest Awesome Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {
  const first = new Map();
  first.set(0, -1);

  let mask = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    mask ^= (1 << parseInt(s[i]));

    // Case 1: same mask appeared before (all even)
    if (first.has(mask)) {
      result = Math.max(result, i - first.get(mask));
    } else {
      first.set(mask, i);
    }

    // Case 2: flip one bit (exactly one odd digit)
    for (let d = 0; d < 10; d++) {
      const flipped = mask ^ (1 << d);
      if (first.has(flipped)) {
        result = Math.max(result, i - first.get(flipped));
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(longestAwesome('3242415')); // 5
console.log(longestAwesome('12345678')); // 1
console.log(longestAwesome('213123')); // 6
