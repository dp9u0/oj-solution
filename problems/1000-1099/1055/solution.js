/*
 * @lc app=leetcode.cn id=1055 lang=javascript
 *
 * [1055] 形成字符串的最短路径
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
    const n = source.length;
    // next[i][c] = smallest index j >= i with source[j] == c, else -1
    const next = Array.from({ length: n + 1 }, () => new Int16Array(26).fill(-1));
    for (let i = n - 1; i >= 0; i--) {
        for (let c = 0; c < 26; c++) next[i][c] = next[i + 1][c];
        next[i][source.charCodeAt(i) - 97] = i;
    }

    let count = 1, pos = 0;
    for (const ch of target) {
        const c = ch.charCodeAt(0) - 97;
        if (next[0][c] === -1) return -1;
        if (next[pos][c] === -1) { // start a new pass from the beginning
            count++;
            pos = 0;
        }
        pos = next[pos][c] + 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(shortestWay("abc", "abcbc")); // 2
console.log(shortestWay("abc", "acdbc")); // -1 (d not in source)
console.log(shortestWay("xyz", "xzyxz")); // 3
console.log(shortestWay("abc", "abc")); // 1
console.log(shortestWay("aaaa", "aaaaaaaaaa")); // 3 (4+4+2)
console.log(shortestWay("abc", "c")); // 1
