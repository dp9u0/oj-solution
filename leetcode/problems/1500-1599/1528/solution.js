/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length);
    for (let i = 0; i < s.length; i++) res[indices[i]] = s[i];
    return res.join('');
};
// @lc code=end

// TEST:
console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3])); // leetcode
console.log(restoreString('abc', [0,1,2])); // abc
