/*
 * @lc app=leetcode.cn id=1852 lang=javascript
 *
 * [1852] 每个子数组的数字种类数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var distinctNumbers = function(nums, k) {
    const cnt = new Map();
    let distinct = 0;
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const c = cnt.get(nums[i]) || 0;
        cnt.set(nums[i], c + 1);
        if (c === 0) distinct++;
        if (i >= k) {
            const d = cnt.get(nums[i - k]);
            if (d === 1) {
                cnt.delete(nums[i - k]);
                distinct--;
            } else {
                cnt.set(nums[i - k], d - 1);
            }
        }
        if (i >= k - 1) ans.push(distinct);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(distinctNumbers([1,2,3,2,2,1,3], 3))); // [3,2,2,2,3]
console.log(JSON.stringify(distinctNumbers([1,1,1,1,2,3,4], 4))); // [1,2,3,4]
console.log(JSON.stringify(distinctNumbers([5], 1))); // [1]
console.log(JSON.stringify(distinctNumbers([2,2,2], 3))); // [1]
console.log(JSON.stringify(distinctNumbers([1,2,1,2,1], 2))); // [2,2,2,2]
