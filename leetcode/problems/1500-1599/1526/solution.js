/*
 * @lc app=leetcode id=1526 lang=javascript
 *
 * [1526] Minimum Number of Increments on Subarrays to Form a Target Array
 */

// @lc code=start
/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    let result = target[0];
    for (let i = 1; i < target.length; i++) {
        result += Math.max(0, target[i] - target[i - 1]);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minNumberOperations([1,2,3,2,1])); // 3
console.log(minNumberOperations([3,1,1,2])); // 4
console.log(minNumberOperations([3,1,5,4,2])); // 7
console.log(minNumberOperations([1])); // 1
console.log(minNumberOperations([5,5,5])); // 5
