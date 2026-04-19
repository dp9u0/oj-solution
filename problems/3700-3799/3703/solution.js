/*
 * @lc app=leetcode id=3703 lang=javascript
 *
 * [3703] Remove K-Balanced Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeSubstring = function(s, k) {
    let stack = []; // [char, count]

    for (let c of s) {
        if (stack.length && stack[stack.length - 1][0] === c) {
            stack[stack.length - 1][1]++;
        } else {
            stack.push([c, 1]);
        }

        if (c === ')' && stack.length >= 2) {
            let [rc, rn] = stack[stack.length - 1];
            let [lc, ln] = stack[stack.length - 2];
            if (rc === ')' && lc === '(' && rn >= k && ln >= k) {
                stack.pop();
                stack.pop();
                if (rn > k) pushOrMerge(stack, ')', rn - k);
                if (ln > k) pushOrMerge(stack, '(', ln - k);
            }
        }
    }

    let res = '';
    for (let [c, n] of stack) res += c.repeat(n);
    return res;
};

function pushOrMerge(stack, c, n) {
    if (stack.length && stack[stack.length - 1][0] === c) {
        stack[stack.length - 1][1] += n;
    } else {
        stack.push([c, n]);
    }
}
// @lc code=end

// TEST:
console.log(removeSubstring('(())', 1)); // ''
console.log(removeSubstring('(()(', 1)); // '(('
console.log(removeSubstring('((()))()()()', 3)); // '()()()'
