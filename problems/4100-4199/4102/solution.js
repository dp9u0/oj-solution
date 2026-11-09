/*
 * @lc app=leetcode.cn id=4102 lang=javascript
 *
 * [4102] 统计有效子字符串 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countValidSubstrings = function(s) {
    let ans = 0;
    let lastEnd = -1; // 最近一次 "abc" 结束的下标
    for (let r = 0; r < s.length; r++) {
        if (r >= 2 && s[r - 2] === 'a' && s[r - 1] === 'b' && s[r] === 'c') lastEnd = r;
        ans += lastEnd < 0 ? r + 1 : r - lastEnd + 2;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countValidSubstrings('abac') === 10);
console.log(countValidSubstrings('abc') === 5);
console.log(countValidSubstrings('ac') === 3);
console.log(countValidSubstrings('a') === 1);
console.log(countValidSubstrings('aabbcc') === 21);
console.log(countValidSubstrings('abcbc') === 12);
console.log(countValidSubstrings('abcabc') === 14);
