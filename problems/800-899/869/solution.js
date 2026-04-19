/*
 * @lc app=leetcode id=869 lang=javascript
 *
 * [869] Reordered Power of 2
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const countDigits = (num) => {
    const count = new Array(10).fill(0);
    for (const ch of String(num)) {
      count[+ch]++;
    }
    return count.join('');
  };
  const target = countDigits(n);
  for (let i = 0; i < 30; i++) {
    if (countDigits(1 << i) === target) return true;
  }
  return false;
};
// @lc code=end

// TEST:
console.log(reorderedPowerOf2(1)); // true
console.log(reorderedPowerOf2(10)); // false
console.log(reorderedPowerOf2(46)); // true (64)
console.log(reorderedPowerOf2(218)); // true (128)
