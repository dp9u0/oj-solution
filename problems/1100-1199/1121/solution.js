/*
 * @lc app=leetcode.cn id=1121 lang=javascript
 *
 * [1121] 将数组分成几个递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, k) {
    let maxFreq = 1, cur = 1;
    for (let i = 1; i < nums.length; i++) {
        cur = nums[i] === nums[i - 1] ? cur + 1 : 1;
        if (cur > maxFreq) maxFreq = cur;
    }
    // feasible iff round-robin over maxFreq sequences gives each >= k elements
    return nums.length >= maxFreq * k;
};
// @lc code=end

// TEST:
console.log(canDivideIntoSubsequences([1,2,2,3,3,4,4], 3)); // true
console.log(canDivideIntoSubsequences([5,6,6,7,8], 3)); // false
console.log(canDivideIntoSubsequences([1,1,1,1], 2)); // false (4 < 4*2)
console.log(canDivideIntoSubsequences([1,1,1,1], 1)); // true (4 sequences of 1)
console.log(canDivideIntoSubsequences([1,2,3], 3)); // true (strictly increasing already)
