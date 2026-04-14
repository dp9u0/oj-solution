/*
 * @lc app=leetcode id=3168 lang=javascript
 *
 * [3168] Minimum Number of Chairs in a Waiting Room
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0, max = 0;
    for (const c of s) {
        if (c === 'E') count++;
        else count--;
        max = Math.max(max, count);
    }
    return max;
};
// @lc code=end

// TEST:
console.log(minimumChairs("EEEEEEE"));
console.log(minimumChairs("ELELEEL"));
console.log(minimumChairs("ELEELEELLL"));
