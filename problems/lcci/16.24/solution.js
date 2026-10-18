/*
 * @lc app=leetcode.cn id=面试题 16.24 lang=javascript
 *
 * [面试题 16.24] 数对和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
    // 排序 + 首尾双指针，配对后双端各退一格
    nums.sort((a, b) => a - b);
    const res = [];
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const s = nums[i] + nums[j];
        if (s === target) {
            res.push([nums[i], nums[j]]);
            i++;
            j--;
        } else if (s < target) {
            i++;
        } else {
            j--;
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pairSums([5, 6, 5], 11)) === '[[5,6]]');
console.log(JSON.stringify(pairSums([5, 6, 5, 6], 11)) === '[[5,6],[5,6]]');
console.log(JSON.stringify(pairSums([5], 1)) === '[]');
const r = pairSums([-3, 1, 2, -2, 4], 1);
console.log(JSON.stringify(r) === '[[-3,4]]'); // 唯一数对
console.log(JSON.stringify(pairSums([1, 1, 1], 2)) === '[[1,1]]'); // 奇数个相同值只配一对
