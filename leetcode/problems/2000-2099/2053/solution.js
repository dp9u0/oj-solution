/*
 * @lc app=leetcode id=2053 lang=javascript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const count = new Map();
    for (const s of arr) count.set(s, (count.get(s) || 0) + 1);
    for (const s of arr) {
        if (count.get(s) === 1 && --k === 0) return s;
    }
    return '';
};
// @lc code=end

// TEST:
console.log(kthDistinct(["d","b","c","b","c","a"], 2));
console.log(kthDistinct(["aaa","aa","a"], 1));
console.log(kthDistinct(["a","b","a"], 3));
