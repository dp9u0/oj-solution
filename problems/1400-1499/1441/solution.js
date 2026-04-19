/*
 * @lc app=leetcode id=1441 lang=javascript
 *
 * [1441] Build an Array With Stack Operations
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const set = new Set(target);
    const result = [];
    const max = target[target.length - 1];
    for (let i = 1; i <= max; i++) {
        result.push('Push');
        if (!set.has(i)) {
            result.push('Pop');
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(buildArray([1,3], 3)));       // ["Push","Push","Pop","Push"]
console.log(JSON.stringify(buildArray([1,2,3], 3)));     // ["Push","Push","Push"]
console.log(JSON.stringify(buildArray([1,2], 4)));       // ["Push","Push"]
console.log(JSON.stringify(buildArray([2,3,4], 4)));     // ["Push","Pop","Push","Push","Push"]
console.log(JSON.stringify(buildArray([1], 1)));         // ["Push"]
