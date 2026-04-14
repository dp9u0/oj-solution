/*
 * @lc app=leetcode id=2592 lang=javascript
 *
 * [2592] Maximize Greatness of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a, b) => a - b);
    let slow = 0, fast = 0, count = 0;
    const n = nums.length;
    while (fast < n) {
        if (nums[fast] > nums[slow]) {
            count++;
            slow++;
            fast++;
        } else {
            fast++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maximizeGreatness([1,3,5,2,1,3,1]));
console.log(maximizeGreatness([1,2,3,4]));
