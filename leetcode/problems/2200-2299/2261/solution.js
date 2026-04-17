/*
 * @lc app=leetcode id=2261 lang=javascript
 *
 * [2261] K Divisible Elements Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    const n = nums.length;
    const seen = new Set();

    for (let l = 0; l < n; l++) {
        let cnt = 0;
        let s = '';
        for (let r = l; r < n; r++) {
            if (nums[r] % p === 0) cnt++;
            if (cnt > k) break;
            s += (r > l ? ',' : '') + nums[r];
            seen.add(s);
        }
    }

    return seen.size;
};
// @lc code=end

// TEST:
console.log(countDistinct([2, 3, 3, 2, 2], 2, 2));  // 11
console.log(countDistinct([1, 2, 3, 4], 4, 1));      // 10
console.log(countDistinct([1], 1, 2));                // 1
console.log(countDistinct([2, 2, 2], 2, 2));          // 2 ([2] and [2,2])
console.log(countDistinct([1, 9], 1, 5));             // 3 ([1], [9], [1,9])
