/*
 * @lc app=leetcode.cn id=面试题 17.10 lang=javascript
 *
 * [面试题 17.10] 主要元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Boyer-Moore 摩尔投票：不同元素两两抵消，候选若存在必存活
    let candidate = 0;
    let count = 0;
    for (const num of nums) {
        if (count === 0) candidate = num;
        count += num === candidate ? 1 : -1;
    }
    // 主要元素可能不存在，二次扫描复核
    let occur = 0;
    for (const num of nums) {
        if (num === candidate) occur++;
    }
    return occur * 2 > nums.length ? candidate : -1;
};
// @lc code=end

// TEST:
console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]) === 5);
console.log(majorityElement([3, 2]) === -1);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
console.log(majorityElement([]) === -1);
console.log(majorityElement([1]) === 1);
console.log(majorityElement([1, 2, 3]) === -1); // 恰好无过半
console.log(majorityElement([4, 4, 4, 1]) === 4);
