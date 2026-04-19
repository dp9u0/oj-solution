/*
 * @lc app=leetcode id=3176 lang=javascript
 *
 * [3176] Find the Maximum Length of a Good Subsequence I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
  const dp = Array.from({ length: k + 1 }, () => new Map());
  const top1 = Array.from({ length: k + 1 }, () => ({ val: undefined, len: 0 }));
  const top2 = Array.from({ length: k + 1 }, () => ({ val: undefined, len: 0 }));

  for (const num of nums) {
    for (let j = k; j >= 0; j--) {
      const same = dp[j].get(num) ?? 0;
      const diffBest = j > 0
        ? (top1[j - 1].val !== num ? top1[j - 1].len : top2[j - 1].len)
        : 0;
      const newLen = Math.max(same, diffBest) + 1;

      dp[j].set(num, newLen);

      if (top1[j].val === num) {
        top1[j].len = newLen;
      } else if (newLen > top1[j].len) {
        top2[j] = { val: top1[j].val, len: top1[j].len };
        top1[j] = { val: num, len: newLen };
      } else if (newLen > top2[j].len) {
        top2[j] = { val: num, len: newLen };
      }
    }
  }

  return top1[k].len;
};
// @lc code=end

// TEST:
console.log(maximumLength([1, 2, 1, 1, 3], 2));     // 4
console.log(maximumLength([1, 2, 3, 4, 5, 1], 0));  // 2
console.log(maximumLength([1, 1, 1, 1], 0));         // 4
console.log(maximumLength([1], 0));                   // 1
