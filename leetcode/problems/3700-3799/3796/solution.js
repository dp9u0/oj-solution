/*
 * @lc app=leetcode id=3796 lang=javascript
 *
 * [3796] Find Maximum Value in a Constrained Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[]} diff
 * @return {number}
 */
var findMaxVal = function(n, restrictions, diff) {
    let maxVals = new Array(n);
    maxVals[0] = 0;
    for (let i = 1; i < n; i++) {
        maxVals[i] = maxVals[i - 1] + diff[i - 1];
    }
    for (let [idx, cap] of restrictions) {
        maxVals[idx] = Math.min(maxVals[idx], cap);
    }
    // Forward pass
    for (let i = 1; i < n; i++) {
        maxVals[i] = Math.min(maxVals[i], maxVals[i - 1] + diff[i - 1]);
    }
    // Backward pass
    for (let i = n - 2; i >= 0; i--) {
        maxVals[i] = Math.min(maxVals[i], maxVals[i + 1] + diff[i]);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (maxVals[i] > ans) ans = maxVals[i];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findMaxVal(10, [[3,1],[8,1]], [2,2,3,1,4,5,1,1,2])); // 6
console.log(findMaxVal(8, [[3,2]], [3,5,2,4,2,3,1])); // 12
