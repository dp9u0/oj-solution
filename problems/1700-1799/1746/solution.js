/*
 * @lc app=leetcode.cn id=1746 lang=javascript
 *
 * [1746] 经过一次操作后的最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
    let noSq = 0, sq = 0, ans = -Infinity;
    for (const x of nums) {
        const ns = Math.max(noSq + x, x);              // no squaring yet
        const s = Math.max(sq + x, noSq + x * x, x * x); // exactly one squaring
        noSq = ns;
        sq = s;
        if (s > ans) ans = s;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSumAfterOperation([2,-1,-4,-3])); // 17
console.log(maxSumAfterOperation([1,-1,1,1,-1,-1,1])); // 4
console.log(maxSumAfterOperation([1,-9,-5,3])); // 82 ([1,81])
console.log(maxSumAfterOperation([1])); // 1
console.log(maxSumAfterOperation([-5])); // 25
