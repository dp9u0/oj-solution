/*
 * @lc app=leetcode id=1234 lang=javascript
 *
 * [1234] Replace the Substring for Balanced String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const n = s.length;
  const target = n / 4;
  const count = { Q: 0, W: 0, E: 0, R: 0 };

  for (const c of s) count[c]++;

  const check = () => count.Q <= target && count.W <= target && count.E <= target && count.R <= target;

  if (check()) return 0;

  let result = n;
  let left = 0;

  for (let right = 0; right < n; right++) {
    count[s[right]]--;
    while (check()) {
      result = Math.min(result, right - left + 1);
      count[s[left]]++;
      left++;
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(balancedString('QWER')); // 0
console.log(balancedString('QQWE')); // 1
console.log(balancedString('QQQW')); // 2
