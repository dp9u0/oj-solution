/*
 * @lc app=leetcode id=4008 lang=javascript
 *
 * [4008] Minimum Initial Strength to Defeat All Monsters
 */

// @lc code=start
/**
 * @param {number[]} monsters
 * @param {number[][]} boosts
 * @return {number}
 */
var minInitialStrength = function(monsters, boosts) {
  const n = monsters.length;
  // 差分数组：区间 [l, r] 加 v
  const diff = new Array(n + 1).fill(0);
  for (const [l, r, v] of boosts) {
    diff[l] += v;
    diff[r + 1] -= v;
  }

  let ans = 0;
  let bonus = 0;   // 当前下标的总增益
  let prefix = 0;  // 之前所有怪物力量之和
  for (let i = 0; i < n; i++) {
    bonus += diff[i];
    const need = monsters[i] - bonus;
    // need > 0 时约束为 S >= prefix + need
    if (need > 0) {
      ans = Math.max(ans, prefix + need);
    }
    prefix += monsters[i];
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minInitialStrength([5, 10, 15], [[1, 1, 10]]) === 30);
console.log(minInitialStrength([5, 10, 15], [[1, 2, 10], [1, 2, 5]]) === 5);
console.log(minInitialStrength([3, 7], []) === 10);
console.log(minInitialStrength([5], [[0, 0, 5]]) === 0);
console.log(minInitialStrength([2, 3], [[0, 1, 10]]) === 0);
console.log(minInitialStrength([10, 1], [[0, 0, 20]]) === 11);
console.log(minInitialStrength([1, 100], [[0, 0, 1]]) === 101);
console.log(minInitialStrength([1000000000, 1000000000], []) === 2000000000);
