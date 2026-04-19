/*
 * @lc app=leetcode id=3211 lang=javascript
 *
 * [3211] Generate Binary Strings Without Adjacent Zeros
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    const result = [];

    const backtrack = (s) => {
        if (s.length === n) { result.push(s); return; }
        backtrack(s + '1');
        if (s.length === 0 || s[s.length - 1] !== '0') backtrack(s + '0');
    };

    backtrack('');
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(validStrings(3))); // ["010","011","101","110","111"]
console.log(JSON.stringify(validStrings(1))); // ["0","1"]
console.log(JSON.stringify(validStrings(2))); // ["01","10","11"]
