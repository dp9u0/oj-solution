/*
 * @lc app=leetcode.cn id=2955 lang=javascript
 *
 * [2955] 同端子串的数量
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sameEndSubstringCount = function(s, queries) {
    const n = s.length;
    const pre = Array.from({ length: 26 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        for (let j = 0; j < 26; j++) pre[j][i + 1] = pre[j][i];
        pre[c][i + 1]++;
    }
    const ans = [];
    for (const [l, r] of queries) {
        let total = 0;
        for (let c = 0; c < 26; c++) {
            const t = pre[c][r + 1] - pre[c][l];
            total += (t * (t + 1)) / 2;
        }
        ans.push(total);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sameEndSubstringCount("abcaab", [[0,0],[1,4],[2,5],[0,5]]))); // [1,5,5,10]
console.log(JSON.stringify(sameEndSubstringCount("abcd", [[0,3]]))); // [4]
console.log(JSON.stringify(sameEndSubstringCount("aa", [[0,1]]))); // 3
