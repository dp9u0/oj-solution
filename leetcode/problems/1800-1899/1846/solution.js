/*
 * @lc app=leetcode id=1846 lang=javascript
 *
 * [1846] Maximum Element After Decreasing and Rearranging
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.min(arr[i], arr[i - 1] + 1);
    }
    return arr[arr.length - 1];
};
// @lc code=end

// TEST:
console.log(maximumElementAfterDecrementingAndRearranging([2,2,1,2,1])); // 2
console.log(maximumElementAfterDecrementingAndRearranging([100,1,1000])); // 3
console.log(maximumElementAfterDecrementingAndRearranging([1,2,3,4,5])); // 5
