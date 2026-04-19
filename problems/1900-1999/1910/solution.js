/*
 * @lc app=leetcode id=1910 lang=javascript
 *
 * [1910] Remove All Occurrences of a Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = [];
    let m = part.length;
    for (let c of s) {
        stack.push(c);
        if (stack.length >= m) {
            let match = true;
            for (let i = 0; i < m; i++) {
                if (stack[stack.length - m + i] !== part[i]) {
                    match = false;
                    break;
                }
            }
            if (match) stack.length -= m;
        }
    }
    return stack.join('');
};
// @lc code=end

// TEST:
console.log(removeOccurrences('daabcbaabcbc', 'abc')); // 'dab'
console.log(removeOccurrences('axxxxyyyyb', 'xy')); // 'ab'
