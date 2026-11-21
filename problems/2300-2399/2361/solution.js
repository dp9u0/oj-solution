/*
 * @lc app=leetcode.cn id=2361 lang=javascript
 *
 * [2361] 乘坐火车路线的最少费用
 */

// @lc code=start
/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function(regular, express, expressCost) {
    const n = regular.length;
    const res = new Array(n);
    let reg = 0, exp = Infinity;
    for (let i = 0; i < n; i++) {
        const nReg = Math.min(reg, exp) + regular[i];
        const nExp = Math.min(reg + expressCost, exp) + express[i];
        reg = nReg;
        exp = nExp;
        res[i] = Math.min(reg, exp);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumCosts([1,6,9,5], [5,2,3,10], 8))); // [1,7,14,19]
console.log(JSON.stringify(minimumCosts([11,5,13], [7,10,6], 3))); // [10,15,24]
console.log(JSON.stringify(minimumCosts([5], [1], 2))); // [3] (express only)
console.log(JSON.stringify(minimumCosts([1,1,1], [100,100,100], 1000))); // [1,2,3]
console.log(JSON.stringify(minimumCosts([10,1,1], [1,1,1], 2))); // [3,4,5]
