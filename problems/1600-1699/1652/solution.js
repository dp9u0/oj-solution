/*
 * @lc app=leetcode id=1652 lang=javascript
 *
 * [1652] Defuse the Bomb
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    if (k === 0) return new Array(n).fill(0);
    let doubled = code.concat(code);
    let result = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = i + 1; j <= i + k; j++) sum += doubled[j];
        } else {
            for (let j = i + n + k; j < i + n; j++) sum += doubled[j];
        }
        result.push(sum);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(decrypt([5,7,1,4], 3))); // [12,10,16,13]
console.log(JSON.stringify(decrypt([1,2,3,4], 0))); // [0,0,0,0]
console.log(JSON.stringify(decrypt([2,4,9,3], -2))); // [12,5,6,13]
