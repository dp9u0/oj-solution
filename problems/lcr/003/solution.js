/*
 * @lc app=leetcode.cn id=LCR 003 lang=javascript
 *
 * [LCR 003] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};
// @lc code=end

// TEST: [0,1,1]
console.log(countBits(2));
// TEST: [0,1,1,2,1,2]
console.log(countBits(5));
// TEST: [0]
console.log(countBits(0));
// TEST: [0,1]
console.log(countBits(1));
// TEST: [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4]
console.log(countBits(15));
