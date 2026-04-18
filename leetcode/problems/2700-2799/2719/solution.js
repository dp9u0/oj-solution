/*
 * @lc app=leetcode id=2719 lang=javascript
 *
 * [2719] Count of Integers
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function(num1, num2, min_sum, max_sum) {
  const MOD = 1e9 + 7;

  const countUpTo = (s, minS, maxS) => {
    const digits = s.split('').map(Number);
    const n = digits.length;
    // dp[sum][tight] -> count
    // Use memoization
    const memo = new Map();

    const dfs = (pos, sum, tight) => {
      if (sum > maxS) return 0;
      if (pos === n) return sum >= minS ? 1 : 0;

      const key = pos * 1000 + sum + (tight ? 500 : 0);
      if (memo.has(key)) return memo.get(key);

      const limit = tight ? digits[pos] : 9;
      let result = 0;

      for (let d = 0; d <= limit; d++) {
        result = (result + dfs(pos + 1, sum + d, tight && d === limit)) % MOD;
      }

      memo.set(key, result);
      return result;
    };

    return dfs(0, 0, true);
  };

  // count(num2) - count(num1-1)
  const result = countUpTo(num2, min_sum, max_sum) - countUpTo(decStr(num1), min_sum, max_sum);
  return ((result % MOD) + MOD) % MOD;
};

function decStr(s) {
  const arr = s.split('');
  let i = arr.length - 1;
  while (i >= 0 && arr[i] === '0') {
    arr[i] = '9';
    i--;
  }
  arr[i] = String(parseInt(arr[i]) - 1);
  // Remove leading zeros
  let result = arr.join('');
  while (result.length > 1 && result[0] === '0') result = result.slice(1);
  // If result is all zeros, return "0" (but we won't count it)
  if (result === '' || parseInt(result) === 0) return '0';
  return result;
}
// @lc code=end

// TEST:
console.log(count('1', '12', 1, 8) === 11);
console.log(count('1', '5', 1, 5) === 5);
console.log(count('1', '10', 1, 1) === 2);
console.log(count('10', '10', 1, 1) === 1);
console.log(count('1', '100', 1, 9) === 55);
