/*
 * @lc app=leetcode id=1911 lang=javascript
 *
 * [1911] Maximum Alternating Subsequence Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let even = 0, odd = -Infinity;
    for (let x of nums) {
        let ne = Math.max(even, odd + x, x);
        let no = Math.max(odd, even - x);
        even = ne;
        odd = no;
    }
    return even;
};
// @lc code=end

// TEST:
console.log(maxAlternatingSum([4,2,5,3])); // 7
console.log(maxAlternatingSum([5,6,7,8])); // 8
console.log(maxAlternatingSum([6,2,1,2,4,5])); // 10
