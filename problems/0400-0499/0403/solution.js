/*
 * @lc app=leetcode id=403 lang=javascript
 *
 * [403] Frog Jump
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const n = stones.length;
  const isStone = new Set(stones);
  // 每块石头位置 -> 能以哪些“上一跳距离”落到该石头
  const jumpsMap = new Map();
  for (const pos of stones) jumpsMap.set(pos, new Set());
  jumpsMap.get(0).add(0); // 上一次跳跃为 0，下一跳只能是 1

  const last = stones[n - 1];
  for (const pos of stones) {
    for (const k of jumpsMap.get(pos)) {
      for (let step = k - 1; step <= k + 1; step++) {
        if (step <= 0) continue;
        const next = pos + step;
        if (next === last) return true;
        if (isStone.has(next)) jumpsMap.get(next).add(step);
      }
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]) === true); // example 1
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]) === false); // example 2
console.log(canCross([0, 1]) === true); // 最小输入，直接跳 1
console.log(canCross([0, 2]) === false); // 第一跳必须是 1，够不到
console.log(canCross([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) === true); // 连续石头，每次 +1
console.log(canCross([0, 1, 3, 6, 10, 15, 21]) === true); // 递增间距 1,2,3,4,5,6
console.log(canCross([0, 1, 2147483647]) === false); // 大间距，位置溢出规模
console.log(canCross([0, 1, 2, 5, 6, 9, 10, 14]) === false); // 中途断档
