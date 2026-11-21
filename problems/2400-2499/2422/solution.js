/*
 * @lc app=leetcode.cn id=2422 lang=javascript
 *
 * [2422] 使用合并操作将数组转换为回文序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let l = 0, r = nums.length - 1;
    let ls = nums[l], rs = nums[r];
    let ops = 0;
    while (l < r) {
        if (ls === rs) {
            l++;
            r--;
            ls = nums[l];
            rs = nums[r];
        } else if (ls < rs) {
            l++;
            ls += nums[l];
            ops++;
        } else {
            r--;
            rs += nums[r];
            ops++;
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minimumOperations([4,3,2,1,2,3,1])); // 2
console.log(minimumOperations([1,2,3,4])); // 3
console.log(minimumOperations([1,2,1])); // 0
console.log(minimumOperations([5])); // 0
console.log(minimumOperations([1,1])); // 0
