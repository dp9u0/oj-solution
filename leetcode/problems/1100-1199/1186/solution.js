/*
 * @lc app=leetcode id=1186 lang=javascript
 *
 * [1186] Maximum Subarray Sum with One Deletion
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    const n = arr.length;
    let noDel = arr[0], oneDel = -Infinity;
    let result = arr[0];

    for (let i = 1; i < n; i++) {
        oneDel = Math.max(noDel, oneDel + arr[i]);
        noDel = Math.max(arr[i], noDel + arr[i]);
        result = Math.max(result, noDel, oneDel);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumSum([1,-2,0,3])); // 4
console.log(maximumSum([1,-2,-2,3])); // 3
console.log(maximumSum([-1,-1,-1,-1])); // -1
