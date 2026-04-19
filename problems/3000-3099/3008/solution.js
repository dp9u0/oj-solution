/*
 * @lc app=leetcode id=3008 lang=javascript
 *
 * [3008] Find Beautiful Indices in the Given Array II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const kmpSearch = (text, pattern) => {
        const m = pattern.length;
        if (m === 0 || m > text.length) return [];
        const fail = new Int32Array(m);
        for (let i = 1, j = 0; i < m; i++) {
            while (j > 0 && pattern[i] !== pattern[j]) j = fail[j - 1];
            if (pattern[i] === pattern[j]) j++;
            fail[i] = j;
        }
        const result = [];
        for (let i = 0, j = 0; i < text.length; i++) {
            while (j > 0 && text[i] !== pattern[j]) j = fail[j - 1];
            if (text[i] === pattern[j]) j++;
            if (j === m) {
                result.push(i - m + 1);
                j = fail[j - 1];
            }
        }
        return result;
    };

    const posA = kmpSearch(s, a);
    const posB = kmpSearch(s, b);

    const result = [];
    let j = 0;
    for (const i of posA) {
        while (j < posB.length && posB[j] < i - k) j++;
        if (j < posB.length && posB[j] <= i + k) {
            result.push(i);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15))); // [16,33]
console.log(JSON.stringify(beautifulIndices("abcd", "a", "a", 4))); // [0]
console.log(JSON.stringify(beautifulIndices("abc", "abc", "abc", 3))); // [0]
console.log(JSON.stringify(beautifulIndices("abcdefghi", "def", "abc", 5))); // [3]
console.log(JSON.stringify(beautifulIndices("abcdefghi", "def", "xyz", 5))); // []
