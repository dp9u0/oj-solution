/*
 * @lc app=leetcode id=3234 lang=javascript
 *
 * [3234] Count the Number of Substrings With Dominant Ones
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  const n = s.length;
  const z = [-1];
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') z.push(i);
  }
  z.push(n);
  const m = z.length - 2;
  let ans = 0;
  for (let run = 0, i = 0; i <= n; i++) {
    if (i === n || s[i] === '0') {
      ans += run * (run + 1) / 2;
      run = 0;
    } else {
      run++;
    }
  }
  const maxK = Math.floor(Math.sqrt(n)) + 1;
  for (let k = 1; k <= Math.min(maxK, m); k++) {
    for (let p = 1; p + k - 1 <= m; p++) {
      const lMin = z[p - 1] + 1;
      const lMax = z[p];
      const rMin = z[p + k - 1];
      const rMax = z[p + k] - 1;
      const T = k * k + k - 1;
      if (rMax - lMin < T) continue;
      const split = Math.min(lMax, rMin - T);
      if (split >= lMin) {
        ans += (split - lMin + 1) * (rMax - rMin + 1);
      }
      const L1 = Math.max(lMin, rMin - T + 1);
      const L2 = Math.min(lMax, rMax - T);
      if (L2 >= L1) {
        const cnt = L2 - L1 + 1;
        ans += cnt * (rMax - T + 1) - (L1 + L2) * cnt / 2;
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(numberOfSubstrings('00011')); // 5
console.log(numberOfSubstrings('101101')); // 16
console.log(numberOfSubstrings('1')); // 1
console.log(numberOfSubstrings('0')); // 0
console.log(numberOfSubstrings('111')); // 6
