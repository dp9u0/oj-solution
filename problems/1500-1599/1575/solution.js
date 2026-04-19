/*
 * @lc app=leetcode id=1575 lang=javascript
 *
 * [1575] Count All Possible Routes
 */

// @lc code=start
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
  const MOD = 1e9 + 7;
  const n = locations.length;

  // dp[i][f]: routes from city i with f fuel remaining to reach finish
  const dp = new Array(n);
  for (let i = 0; i < n; i++) dp[i] = new Int32Array(fuel + 1).fill(-1);

  function dfs(city, f) {
    if (f < 0) return 0;
    if (dp[city][f] !== -1) return dp[city][f];

    let count = city === finish ? 1 : 0;
    for (let j = 0; j < n; j++) {
      if (j === city) continue;
      const cost = Math.abs(locations[city] - locations[j]);
      if (f >= cost) {
        count = (count + dfs(j, f - cost)) % MOD;
      }
    }
    dp[city][f] = count;
    return count;
  }

  return dfs(start, fuel);
};
// @lc code=end

// TEST:
console.log(countRoutes([2, 3, 6, 8, 4], 1, 3, 5)); // 4
console.log(countRoutes([4, 3, 1], 1, 0, 6)); // 5
console.log(countRoutes([5, 2, 1], 0, 2, 3)); // 0
console.log(countRoutes([1, 2, 3], 0, 2, 10)); // need to verify
console.log(countRoutes([2, 1], 0, 1, 1)); // 1
