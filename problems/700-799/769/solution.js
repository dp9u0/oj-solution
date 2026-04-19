/*
 * @lc app=leetcode id=769 lang=javascript
 *
 * [769] Max Chunks To Make Sorted
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let result = 0, maxVal = 0;
    for (let i = 0; i < arr.length; i++) {
        maxVal = Math.max(maxVal, arr[i]);
        if (maxVal === i) result++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxChunksToSorted([4,3,2,1,0])); // 1
console.log(maxChunksToSorted([1,0,2,3,4])); // 4
console.log(maxChunksToSorted([0]));          // 1
