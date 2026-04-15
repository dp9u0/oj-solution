/*
 * @lc app=leetcode id=2475 lang=javascript
 *
 * [2475] Number of Unequal Triplets in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) continue;
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] !== nums[k] && nums[j] !== nums[k]) count++;
            }
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(unequalTriplets([4,4,2,4,3])); // 3
console.log(unequalTriplets([1,1,1,1,1])); // 0
console.log(unequalTriplets([1,2,3])); // 1
