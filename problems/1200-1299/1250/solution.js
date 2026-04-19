/*
 * @lc app=leetcode id=1250 lang=javascript
 *
 * [1250] Check If It Is a Good Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    let g = nums[0];
    for (let i = 1; i < nums.length && g !== 1; i++) {
        g = gcd(g, nums[i]);
    }
    return g === 1;
};

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}
// @lc code=end

// TEST:
console.log(isGoodArray([12,5,7,23])); // true
console.log(isGoodArray([29,6,10])); // true
console.log(isGoodArray([3,6])); // false
console.log(isGoodArray([1])); // true
console.log(isGoodArray([6,10,15])); // true
console.log(isGoodArray([4,8,12])); // false