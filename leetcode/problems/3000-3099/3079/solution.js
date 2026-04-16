/*
 * @lc app=leetcode id=3079 lang=javascript
 *
 * [3079] Find the Sum of Encrypted Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    const encrypt = (x) => {
        let maxD = 0, len = 0;
        while (x > 0) {
            maxD = Math.max(maxD, x % 10);
            x = Math.trunc(x / 10);
            len++;
        }
        let result = 0;
        for (let i = 0; i < len; i++) result = result * 10 + maxD;
        return result;
    };

    return nums.reduce((sum, x) => sum + encrypt(x), 0);
};
// @lc code=end

// TEST:
console.log(sumOfEncryptedInt([1, 2, 3])); // 6
console.log(sumOfEncryptedInt([10, 21, 31])); // 66
console.log(sumOfEncryptedInt([523])); // 555
console.log(sumOfEncryptedInt([213])); // 333
console.log(sumOfEncryptedInt([1000, 1])); // 1111 + 1 = 1112
