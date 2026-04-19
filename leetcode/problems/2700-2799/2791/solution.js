/*
 * @lc app=leetcode id=2791 lang=javascript
 *
 * [2791] Count Paths That Can Form a Palindrome in a Tree
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var countPalindromePaths = function(parent, s) {
    const n = parent.length;
    const children = new Array(n);
    for (let i = 0; i < n; i++) children[i] = [];
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    const mask = new Int32Array(n);
    const stack = [0];
    while (stack.length > 0) {
        const u = stack.pop();
        for (const v of children[u]) {
            mask[v] = mask[u] ^ (1 << (s.charCodeAt(v) - 97));
            stack.push(v);
        }
    }

    const count = new Map();
    let ans = 0;
    for (let u = 0; u < n; u++) {
        const m = mask[u];
        ans += count.get(m) || 0;
        for (let i = 0; i < 26; i++) {
            ans += count.get(m ^ (1 << i)) || 0;
        }
        count.set(m, (count.get(m) || 0) + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countPalindromePaths([-1,0,0,1,1,2], 'acaabc')); // 8
console.log(countPalindromePaths([-1,0,0,0,0], 'aaaaa')); // 10
console.log(countPalindromePaths([-1,0], 'ab')); // 1
console.log(countPalindromePaths([-1,0,1], 'abc')); // 1
console.log(countPalindromePaths([-1], 'a')); // 0
