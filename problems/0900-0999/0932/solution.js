/*
 * @lc app=leetcode id=932 lang=javascript
 *
 * [932] Beautiful Array
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    let arr = [1];
    while (arr.length < n) {
        const next = [];
        for (const x of arr) next.push(2 * x - 1);
        for (const x of arr) next.push(2 * x);
        arr = next;
    }
    return arr.filter(x => x <= n);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(beautifulArray(4))); // e.g. [2,1,4,3] or [1,3,2,4]
console.log(JSON.stringify(beautifulArray(5))); // e.g. [3,1,2,5,4] or [1,5,3,2,4]
console.log(JSON.stringify(beautifulArray(1))); // [1]
