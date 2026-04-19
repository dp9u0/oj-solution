/*
 * @lc app=leetcode id=3068 lang=javascript
 *
 * [3068] Find the Maximum Sum of Node Values
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let sum = 0, cnt = 0, minAbs = Infinity;
    for (const v of nums) {
        const xk = v ^ k;
        if (xk > v) { sum += xk; cnt++; }
        else sum += v;
        const d = Math.abs(xk - v);
        if (d < minAbs) minAbs = d;
    }
    if (cnt & 1) sum -= minAbs;
    return sum;
};
// @lc code=end

// TEST:
console.log(maximumValueSum([1,2,1], 3, [[0,1],[0,2]])); // 6
console.log(maximumValueSum([2,3], 7, [[0,1]])); // 9
console.log(maximumValueSum([7,7,7,7,7,7], 3, [[0,1],[0,2],[0,3],[0,4],[0,5]])); // 42
console.log(maximumValueSum([1,1,1], 3, [[0,1],[0,2]])); // 6
console.log(maximumValueSum([0,1,2], 4, [[0,1],[0,2]])); // 8
console.log(maximumValueSum([24,78,1,97,44], 6, [[0,1],[1,2],[2,3],[3,4]])); // 260
