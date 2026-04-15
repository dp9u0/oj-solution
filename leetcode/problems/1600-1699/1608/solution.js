/*
 * @lc app=leetcode id=1608 lang=javascript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => b - a);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const x = i + 1;
        if (nums[i] >= x && (i + 1 === n || nums[i + 1] < x)) {
            return x;
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(specialArray([3,5]));          // 2
console.log(specialArray([0,0]));          // -1
console.log(specialArray([0,4,3,0,4]));    // 3
