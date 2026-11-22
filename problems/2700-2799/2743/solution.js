/*
 * @lc app=leetcode.cn id=2743 lang=javascript
 *
 * [2743] 计算没有重复字符的子字符串数量
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSpecialSubstrings = function(s) {
    const last = new Array(26).fill(-1);
    let left = 0, ans = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;
        if (last[c] >= left) left = last[c] + 1;
        last[c] = i;
        ans += i - left + 1;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfSpecialSubstrings("abcd")); // 10
console.log(numberOfSpecialSubstrings("ooo")); // 3
console.log(numberOfSpecialSubstrings("abab")); // 7
console.log(numberOfSpecialSubstrings("a")); // 1
console.log(numberOfSpecialSubstrings("abcabcbb")); // 18
