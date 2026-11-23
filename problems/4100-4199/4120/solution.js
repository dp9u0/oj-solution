/*
 * @lc app=leetcode.cn id=4120 lang=javascript
 *
 * [4120] 统计优势元素的数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDominantElements = function(nums) {
    const n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0, cnt = 0;
        if (i > 0) { sum += nums[i - 1]; cnt++; }
        if (i < n - 1) { sum += nums[i + 1]; cnt++; }
        if (cnt === 0 || nums[i] * cnt >= sum) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countDominantElements([1,10,2])); // 1
console.log(countDominantElements([6,4,2])); // 2
console.log(countDominantElements([7])); // 1
console.log(countDominantElements([5,5])); // 2
console.log(countDominantElements([1,2,3,4])); // 1
