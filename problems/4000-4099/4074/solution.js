/*
 * @lc app=leetcode.cn id=4074 lang=javascript
 *
 * [4074] 和为目标值的最大乘积对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function maxProductPair(nums, target) {
  const firstIdx = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!firstIdx.has(nums[i])) firstIdx.set(nums[i], i);
  }
  let best = null;
  for (const [v, i] of firstIdx) {
    const c = target - v;
    if (c >= v || !firstIdx.has(c)) continue;
    const product = v * c;
    if (best === null || product > best[0]) {
      best = [product, i, firstIdx.get(c)];
    }
  }
  return best ? [best[1], best[2]] : [-1, -1];
}
// @lc code=end

// TEST:
console.log(JSON.stringify(maxProductPair([1,2,3,4], 5)) === JSON.stringify([2,1]));
console.log(JSON.stringify(maxProductPair([-3,-1,4,2], 1)) === JSON.stringify([3,1]));
console.log(JSON.stringify(maxProductPair([3,3,5], 6)) === JSON.stringify([-1,-1]));
console.log(JSON.stringify(maxProductPair([1,1], 2)) === JSON.stringify([-1,-1]));
console.log(JSON.stringify(maxProductPair([-5,10], 5)) === JSON.stringify([1,0]));
console.log(JSON.stringify(maxProductPair([0,-7,7,3,4], 10)) === JSON.stringify([2,3]));
