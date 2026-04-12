/*
 * @lc app=leetcode id=2210 lang=javascript
 *
 * [2210] Count Hills and Valleys in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) arr.push(nums[i]);
    }
    let count = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
            (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])) {
            count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countHillValley([2,4,1,1,6,5])); // 3
console.log(countHillValley([6,6,5,5,4,1])); // 0
console.log(countHillValley([1,2,3,2,1])); // 1
