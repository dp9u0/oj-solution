/*
 * @lc app=leetcode id=2434 lang=javascript
 *
 * [2434] Using a Robot to Print the Lexicographically Smallest String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let n = s.length;
    // suffixMin[i] = min character in s[i..n-1]
    let suffixMin = new Array(n + 1);
    suffixMin[n] = '{'; // '{' is after 'z' in ASCII
    for (let i = n - 1; i >= 0; i--) {
        suffixMin[i] = s[i] < suffixMin[i + 1] ? s[i] : suffixMin[i + 1];
    }

    let stack = [];
    let res = '';
    for (let i = 0; i < n; i++) {
        stack.push(s[i]);
        while (stack.length && stack[stack.length - 1] <= suffixMin[i + 1]) {
            res += stack.pop();
        }
    }
    while (stack.length) res += stack.pop();
    return res;
};
// @lc code=end

// TEST:
console.log(robotWithString('zza')); // 'azz'
console.log(robotWithString('bac')); // 'abc'
console.log(robotWithString('bdda')); // 'addb'
