/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const seen = new Set();
    for (const x of arr) {
        if (seen.has(2 * x) || (x % 2 === 0 && seen.has(x / 2))) return true;
        seen.add(x);
    }
    return false;
};
// @lc code=end

// TEST:
console.log(checkIfExist([10,2,5,3])); // true
console.log(checkIfExist([3,1,7,11])); // false
console.log(checkIfExist([0,0])); // true
console.log(checkIfExist([-2,0,10,-19,4,6,-8])); // false
