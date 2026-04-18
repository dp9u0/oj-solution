/*
 * @lc app=leetcode id=3471 lang=javascript
 *
 * [3471] Find the Largest Almost Missing Integer
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;
    const count = new Map();

    for (let i = 0; i <= n - k; i++) {
        const seen = new Set();
        for (let j = i; j < i + k; j++) {
            seen.add(nums[j]);
        }
        for (const v of seen) {
            count.set(v, (count.get(v) || 0) + 1);
        }
    }

    let ans = -1;
    for (const [v, c] of count) {
        if (c === 1 && v > ans) ans = v;
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(largestInteger, [[3, 9, 2, 1, 7], 3], 7);
test(largestInteger, [[3, 9, 7, 2, 1, 7], 4], 3);
test(largestInteger, [[0, 0], 1], -1);
test(largestInteger, [[1, 2, 3], 3], 3);
test(largestInteger, [[5], 1], 5);
test(largestInteger, [[1, 1, 1, 1], 2], -1);
