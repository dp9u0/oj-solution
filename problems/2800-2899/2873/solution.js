/*
 * @lc app=leetcode id=2873 lang=javascript
 *
 * [2873] Maximum Value of an Ordered Triplet I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let n = nums.length;
    let maxVal = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let val = (nums[i] - nums[j]) * nums[k];
                if (val > maxVal) maxVal = val;
            }
        }
    }
    return maxVal;
};
// @lc code=end

// TEST:
console.log(maximumTripletValue([12,6,1,2,7])); // 77
console.log(maximumTripletValue([1,10,3,4,19])); // 133
console.log(maximumTripletValue([1,2,3])); // 0
