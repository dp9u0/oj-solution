/*
 * @lc app=leetcode.cn id=LCR 007 lang=javascript
 *
 * [LCR 007] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const n = nums.length;
  if (n < 3) return [];

  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < n - 2; i++) {
    // 首元素去重：相同值只处理第一个
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 最小组合已大于 0，后续不可能有解
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    // 当前元素与最大两数之和仍小于 0，换更大首元素
    if (nums[i] + nums[n - 1] + nums[n - 2] < 0) continue;

    let left = i + 1;
    let right = n - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]]);
        // 内层去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}
// @lc code=end

// TEST:
const assert = require('assert');

function sortTriplets(triplets) {
  return triplets
    .map((t) => [...t].sort((a, b) => a - b))
    .sort((a, b) => {
      for (let k = 0; k < 3; k++) {
        if (a[k] !== b[k]) return a[k] - b[k];
      }
      return 0;
    });
}

assert.deepStrictEqual(
  sortTriplets(threeSum([-1, 0, 1, 2, -1, -4])),
  sortTriplets([
    [-1, -1, 2],
    [-1, 0, 1],
  ])
);

assert.deepStrictEqual(threeSum([]), []);
assert.deepStrictEqual(threeSum([0]), []);
assert.deepStrictEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
assert.deepStrictEqual(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
assert.deepStrictEqual(threeSum([1, 2, -2, -1]), []);
assert.deepStrictEqual(
  sortTriplets(threeSum([-2, 0, 1, 1, 2])),
  sortTriplets([
    [-2, 0, 2],
    [-2, 1, 1],
  ])
);
assert.deepStrictEqual(
  sortTriplets(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])),
  sortTriplets([
    [-4, -2, 6],
    [-4, 0, 4],
    [-4, 1, 3],
    [-4, 2, 2],
    [-2, -2, 4],
    [-2, 0, 2],
  ])
);

console.log('All tests passed!');
