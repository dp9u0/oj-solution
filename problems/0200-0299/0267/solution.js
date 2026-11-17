/*
 * @lc app=leetcode.cn id=267 lang=javascript
 *
 * [267] 回文排列 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    const freq = new Map();
    for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);

    let oddCount = 0, mid = '';
    const halfChars = [];
    for (const [c, n] of freq) {
        if (n % 2 === 1) { oddCount++; mid = c; }
        for (let i = 0; i < n >> 1; i++) halfChars.push(c);
    }
    if (oddCount > 1) return [];

    // unique permutations of the half, mirrored on completion
    halfChars.sort();
    const res = [];
    const used = new Array(halfChars.length).fill(false);
    const backtrack = path => {
        if (path.length === halfChars.length) {
            res.push(path.join("") + mid + path.slice().reverse().join(""));
            return;
        }
        for (let i = 0; i < halfChars.length; i++) {
            if (used[i]) continue;
            // skip duplicate: same char at same depth already tried via earlier copy
            if (i > 0 && halfChars[i] === halfChars[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            path.push(halfChars[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    };
    backtrack([]);
    return res;
};
// @lc code=end

// TEST:
console.log(generatePalindromes("aabb")); // ["abba","baab"]
console.log(generatePalindromes("abc")); // []
console.log(generatePalindromes("aab")); // ["aba"]
console.log(generatePalindromes("a")); // ["a"]
console.log(generatePalindromes("carerac").length); // 4
