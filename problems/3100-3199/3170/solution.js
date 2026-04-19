/*
 * @lc app=leetcode id=3170 lang=javascript
 *
 * [3170] Lexicographically Minimum String After Removing Stars
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const stacks = Array.from({ length: 26 }, () => []);
    const deleted = new Set();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            for (let c = 0; c < 26; c++) {
                if (stacks[c].length > 0) {
                    deleted.add(stacks[c].pop());
                    break;
                }
            }
        } else {
            stacks[s.charCodeAt(i) - 97].push(i);
        }
    }
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*' && !deleted.has(i)) {
            result += s[i];
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(clearStars("aaba*")); // "aab"
console.log(clearStars("abc"));   // "abc"
console.log(clearStars("de*"));   // "e"
