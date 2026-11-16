/*
 * @lc app=leetcode.cn id=4114 lang=javascript
 *
 * [4114] 统计一致子数组数目 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function(nums) {
  const n = nums.length;
  let maxV = 0;
  for (const x of nums) if (x > maxV) maxV = x;
  const last = new Int32Array(maxV + 1).fill(-1);
  // 段列表按左端点从大到小(值单调不增),每项 [and值, 左端点a, 右端点b]
  let ranges = [];
  let count = 0;
  for (let r = 0; r < n; r++) {
    last[nums[r]] = r;
    const nr = [[nums[r], r, r]];
    for (const [x, a, b] of ranges) {
      const y = x & nums[r];
      const top = nr[nr.length - 1];
      if (top[0] === y) {
        top[1] = a; // 相邻同值段合并,吸收更小的左端点
      } else {
        nr.push([y, a, b]);
      }
    }
    for (const [x, a, b] of nr) {
      const lx = last[x];
      if (lx >= a) count += Math.min(b, lx) - a + 1;
    }
    ranges = nr;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countConsistent([5, 3, 1, 2])) // 6
console.log(countConsistent([1, 1, 1])) // 6
console.log(countConsistent([0])) // 1
console.log(countConsistent([7, 7, 7, 7])) // 10
console.log(countConsistent([3, 5, 6])) // 3
