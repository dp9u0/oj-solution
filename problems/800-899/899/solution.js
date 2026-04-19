/*
 * @lc app=leetcode id=899 lang=javascript
 *
 * [899] Orderly Queue
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k === 1) {
        let result = s;
        for (let i = 0; i < s.length; i++) {
            const rotated = s.slice(i) + s.slice(0, i);
            if (rotated < result) result = rotated;
        }
        return result;
    }
    return s.split('').sort().join('');
};
// @lc code=end

// TEST:
console.log(orderlyQueue("cba", 1)); // "acb"
console.log(orderlyQueue("baaca", 3)); // "aaabc"
