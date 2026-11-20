/*
 * @lc app=leetcode.cn id=1794 lang=javascript
 *
 * [1794] 统计距离最小的子串对个数
 */

// @lc code=start
/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {number}
 */
var countQuadruples = function(firstString, secondString) {
    const first1 = new Array(26).fill(-1);
    for (let i = 0; i < firstString.length; i++) {
        const c = firstString.charCodeAt(i) - 97;
        if (first1[c] === -1) first1[c] = i;
    }
    const last2 = new Array(26).fill(-1);
    for (let i = secondString.length - 1; i >= 0; i--) {
        const c = secondString.charCodeAt(i) - 97;
        if (last2[c] === -1) last2[c] = i;
    }
    let minDiff = Infinity, count = 0;
    for (let c = 0; c < 26; c++) {
        if (first1[c] === -1 || last2[c] === -1) continue;
        const diff = first1[c] - last2[c];
        if (diff < minDiff) {
            minDiff = diff;
            count = 1;
        } else if (diff === minDiff) {
            count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countQuadruples("abcd", "bccda")); // 1
console.log(countQuadruples("ab", "cd")); // 0
console.log(countQuadruples("aa", "aa")); // 1
