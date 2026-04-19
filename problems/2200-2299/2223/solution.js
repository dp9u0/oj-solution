/*
 * @lc app=leetcode id=2223 lang=javascript
 *
 * [2223] Sum of Scores of Built Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    const n = s.length;
    const z = new Int32Array(n);
    z[0] = n;
    let l = 0, r = 0;
    for (let i = 1; i < n; i++) {
        if (i < r) z[i] = Math.min(r - i, z[i - l]);
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
        if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    let sum = 0;
    for (let i = 0; i < n; i++) sum += z[i];
    return sum;
};
// @lc code=end

// TEST:
console.log(sumScores("babab")); // 9
console.log(sumScores("azbazbzaz")); // 14
console.log(sumScores("a")); // 1
console.log(sumScores("aaaa")); // 10 (4+3+2+1)
console.log(sumScores("abc")); // 3 (3+0+0)
console.log(sumScores("abab")); // 6 (4+0+2+0)
