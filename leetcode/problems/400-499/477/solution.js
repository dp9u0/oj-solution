/*
 * @lc app=leetcode id=477 lang=javascript
 *
 * [477] Total Hamming Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    const n = nums.length;
    let result = 0;

    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (const num of nums) {
            if ((num >> i) & 1) count++;
        }
        result += count * (n - count);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(totalHammingDistance([4,14,2])); // 6
console.log(totalHammingDistance([4,14,4])); // 4
console.log(totalHammingDistance([0,0])); // 0
