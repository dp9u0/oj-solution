/*
 * @lc app=leetcode id=3229 lang=javascript
 *
 * [3229] Minimum Operations to Make Array Equal to Target
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumOperations = function(nums, target) {
    const n = nums.length;
    let ans = 0;
    let prev = 0;
    for (let i = 0; i < n; i++) {
        const diff = target[i] - nums[i];
        if (diff > prev) ans += diff - prev;
        prev = diff;
    }
    if (prev < 0) ans -= prev;
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(minimumOperations, [[3, 5, 1, 2], [4, 6, 2, 4]], 2);
test(minimumOperations, [[1, 3, 2], [2, 1, 4]], 5);
test(minimumOperations, [[1], [1]], 0);
test(minimumOperations, [[1, 1, 1], [2, 2, 2]], 1);
test(minimumOperations, [[5, 3, 2], [1, 1, 1]], 4);
test(minimumOperations, [[1, 2, 3], [3, 2, 1]], 4);
