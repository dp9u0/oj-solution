/*
 * @lc app=leetcode.cn id=面试题 17.19 lang=javascript
 *
 * [面试题 17.19] 消失的两个数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
    // s = a+b（线和），q = a²+b²（平方线和）→ ab = (s²-q)/2，解二次方程
    const n = nums.length + 2;
    let s = (n * (n + 1)) / 2;
    let q = (n * (n + 1) * (2 * n + 1)) / 6;
    for (const x of nums) {
        s -= x;
        q -= x * x;
    }
    const p = (s * s - q) / 2;
    const d = Math.sqrt(s * s - 4 * p);
    return [(s + d) / 2, (s - d) / 2];
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a.slice().sort((x, y) => x - y)) === JSON.stringify(b);
console.log(eq(missingTwo([1]), [2, 3]));
console.log(eq(missingTwo([2, 3]), [1, 4]));
console.log(eq(missingTwo([1, 2]), [3, 4]));
console.log(eq(missingTwo([]), [1, 2]));
// 相邻缺失
const big = [];
for (let i = 1; i <= 30000; i++) {
    if (i !== 12345 && i !== 23456) big.push(i);
}
console.log(eq(missingTwo(big), [12345, 23456]));
