/*
 * @lc app=leetcode id=1190 lang=javascript
 *
 * [1190] Reverse Substrings Between Each Pair of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const chars = s.split('');
    const stack = [];
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '(') {
            stack.push(i);
        } else if (chars[i] === ')') {
            const left = stack.pop();
            let l = left + 1, r = i - 1;
            while (l < r) {
                [chars[l], chars[r]] = [chars[r], chars[l]];
                l++; r--;
            }
        }
    }
    return chars.filter(c => c !== '(' && c !== ')').join('');
};
// @lc code=end

// TEST:
console.log(reverseParentheses("(abcd)")); // "dcba"
console.log(reverseParentheses("(u(love)i)")); // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")); // "leetcode"
console.log(reverseParentheses("a(bc)d")); // "acbd"
console.log(reverseParentheses("(ab(cd)ef)")); // "fecdba"
console.log(reverseParentheses("ta()us")); // "taus"
