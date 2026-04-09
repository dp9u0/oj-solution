/*
 * @lc app=leetcode id=3424 lang=javascript
 *
 * [3424] Minimum Cost to Make Arrays Identical
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} k
 * @return {number}
 */
var minCost = function(arr, brr, k) {
    const n = arr.length;

    // Option 1: No rearrange, direct matching
    let cost1 = 0;
    for (let i = 0; i < n; i++) {
        cost1 += Math.abs(arr[i] - brr[i]);
    }

    // Option 2: Rearrange (sort both, then match)
    const sortedArr = [...arr].sort((a, b) => a - b);
    const sortedBrr = [...brr].sort((a, b) => a - b);
    let cost2 = k;
    for (let i = 0; i < n; i++) {
        cost2 += Math.abs(sortedArr[i] - sortedBrr[i]);
    }

    return Math.min(cost1, cost2);
};
// @lc code=end

// TEST:
console.log(minCost([-7,9,5], [7,-2,-5], 2));  // 13
console.log(minCost([2,1], [2,1], 0));          // 0
