/*
 * @lc app=leetcode id=2222 lang=javascript
 *
 * [2222] Number of Ways to Select Buildings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
  const n = s.length;
  const left0 = new Array(n).fill(0);
  const left1 = new Array(n).fill(0);

  let cnt0 = 0, cnt1 = 0;
  for (let i = 0; i < n; i++) {
    left0[i] = cnt0;
    left1[i] = cnt1;
    if (s[i] === '0') cnt0++;
    else cnt1++;
  }

  let result = 0;
  let right0 = 0, right1 = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      result += left1[i] * right1;
      right0++;
    } else {
      result += left0[i] * right0;
      right1++;
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(numberOfWays('001101'));  // 6
console.log(numberOfWays('11100'));   // 0
console.log(numberOfWays('010'));     // 1
console.log(numberOfWays('101'));     // 1
