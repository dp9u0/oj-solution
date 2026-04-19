/*
 * @lc app=leetcode id=2535 lang=javascript
 *
 * [2535] Difference Between Element Sum and Digit Sum of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0, digitSum = 0;
    for (const num of nums) {
        elementSum += num;
        let n = num;
        while (n > 0) {
            digitSum += n % 10;
            n = Math.floor(n / 10);
        }
    }
    return Math.abs(elementSum - digitSum);
};
// @lc code=end

// TEST:
console.log(differenceOfSum([1,15,6,3])); // 9
console.log(differenceOfSum([1,2,3,4]));  // 0
console.log(differenceOfSum([10,20,30])); // 54
