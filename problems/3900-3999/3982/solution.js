/*
 * @lc app=leetcode id=3982 lang=javascript
 *
 * [3982] Sum of Numbers with Maximum Digit Range
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
  const range = (v) => {
    let lo = 10;
    let hi = -1;
    while (v > 0) {
      const d = v % 10;
      if (d < lo) lo = d;
      if (d > hi) hi = d;
      v = Math.floor(v / 10);
    }
    return hi - lo;
  };
  let maxR = -1;
  const rs = nums.map((v) => {
    const r = range(v);
    if (r > maxR) maxR = r;
    return r;
  });
  let ans = 0;
  nums.forEach((v, i) => {
    if (rs[i] === maxR) ans += v;
  });
  return ans;
};
// @lc code=end

// TEST:
console.log(maxDigitRange([5724, 111, 350]) === 6074);
console.log(maxDigitRange([5, 5]) === 10);
console.log(maxDigitRange([12, 34]) === 46);
console.log(maxDigitRange([9]) === 9);
