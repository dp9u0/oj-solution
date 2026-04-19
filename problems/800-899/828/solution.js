/*
 * @lc app=leetcode id=828 lang=javascript
 *
 * [828] Count Unique Characters of All Substrings of a Given String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    const n = s.length;
    const prev = new Array(n).fill(-1);
    const next = new Array(n).fill(n);
    const lastPos = new Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - 65;
        prev[i] = lastPos[idx];
        lastPos[idx] = i;
    }

    lastPos.fill(n);
    for (let i = n - 1; i >= 0; i--) {
        const idx = s.charCodeAt(i) - 65;
        next[i] = lastPos[idx];
        lastPos[idx] = i;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += (i - prev[i]) * (next[i] - i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(uniqueLetterString("ABC")); // 10
console.log(uniqueLetterString("ABA")); // 8
console.log(uniqueLetterString("LEETCODE")); // 92
