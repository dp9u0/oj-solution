/*
 * @lc app=leetcode.cn id=LCR 067 lang=javascript
 *
 * [LCR 067] 数组中两个数的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = 0;
  let mask = 0;
  // 从最高位向最低位逐位贪心
  for (let bit = 30; bit >= 0; bit--) {
    mask |= 1 << bit;
    // 候选值：将当前答案的 bit 位尝试设为 1
    const candidate = max | (1 << bit);
    const set = new Set();
    // 截取每个数的高位前缀
    for (const num of nums) {
      set.add(num & mask);
    }
    // 若存在两个前缀异或等于 candidate，说明该位可置 1
    for (const prefix of set) {
      if (set.has(prefix ^ candidate)) {
        max = candidate;
        break;
      }
    }
  }
  return max;
};
// @lc code=end

// TEST:
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8])); // 28
console.log(findMaximumXOR([0])); // 0
console.log(findMaximumXOR([2, 4])); // 6
console.log(findMaximumXOR([8, 10, 2])); // 10
console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70])); // 127
