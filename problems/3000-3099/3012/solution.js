/*
 * @lc app=leetcode id=3012 lang=javascript
 *
 * [3012] Minimize Length of Array Using Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumArrayLength = function(nums) {
    let minVal = Math.min(...nums);
    let cnt = 0;
    for (let x of nums) {
        if (x % minVal !== 0) return 1;
        if (x === minVal) cnt++;
    }
    return Math.ceil(cnt / 2);
};
// @lc code=end

// TEST:
console.log(minimumArrayLength([1,4,3,1])); // 1
console.log(minimumArrayLength([5,5,5,10,5])); // 2
console.log(minimumArrayLength([2,3,4])); // 1
