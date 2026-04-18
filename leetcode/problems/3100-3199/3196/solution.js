/*
 * @lc app=leetcode id=3196 lang=javascript
 *
 * [3196] Maximize Total Cost of Alternating Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function(nums) {
    let even = nums[0], odd = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        const newEven = Math.max(even, odd) + nums[i];
        const newOdd = even - nums[i];
        even = newEven;
        odd = newOdd;
    }
    return Math.max(even, odd);
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(maximumTotalCost, [[1,-2,3,4]], 10);
test(maximumTotalCost, [[1,-1,1,-1]], 4);
test(maximumTotalCost, [[0]], 0);
test(maximumTotalCost, [[1,-1]], 2);
test(maximumTotalCost, [[1,2,3,4]], 10);
test(maximumTotalCost, [[-1,-2,-3]], 0);
