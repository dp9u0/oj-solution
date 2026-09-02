/*
 * @lc app=leetcode.cn id=LCR 119 lang=javascript
 *
 * [LCR 119] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let best = 0;

    for (const num of numSet) {
        // 仅当 num 是一段连续序列的起点时才扩展,避免 O(n²)
        if (numSet.has(num - 1)) continue;
        let cur = num;
        let length = 1;
        while (numSet.has(cur + 1)) {
            cur++;
            length++;
        }
        if (length > best) best = length;
    }
    return best;
};
// @lc code=end

// TEST:
// 示例 1: [100,4,200,1,3,2] -> 4
console.log(longestConsecutive([100,4,200,1,3,2]) === 4);

// 示例 2: [0,3,7,2,5,8,4,6,0,1] -> 9 (含重复 0)
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]) === 9);

// 空数组 -> 0
console.log(longestConsecutive([]) === 0);

// 单元素 -> 1
console.log(longestConsecutive([5]) === 1);

// 全相同: [1,1,1] -> 1
console.log(longestConsecutive([1,1,1]) === 1);

// 负值连续: [-3,-2,-1,0,1,2,3] -> 7
console.log(longestConsecutive([-3,-2,-1,0,1,2,3]) === 7);

// 多个段取最长: [1,2,3,100,101,102,103,200] -> 4 ([100..103])
console.log(longestConsecutive([1,2,3,100,101,102,103,200]) === 4);

// 乱序跨段: [9,1,4,3,5,2,6,10] -> 6 ([1..6])
console.log(longestConsecutive([9,1,4,3,5,2,6,10]) === 6);

// 大间隔: [-1, 0, 5, 1000000] -> 2
console.log(longestConsecutive([-1,0,5,1000000]) === 2);

// 全不连续唯一数: [0, 100, 200] -> 1
console.log(longestConsecutive([0,100,200]) === 1);
