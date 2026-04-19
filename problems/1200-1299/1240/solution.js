/*
 * @lc app=leetcode id=1240 lang=javascript
 *
 * [1240] Tiling a Rectangle with the Fewest Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function(n, m) {
    if (n === m) return 1;
    if (n > m) [n, m] = [m, n];

    let ans = n * m;
    const h = new Array(m).fill(0);

    const dfs = (cnt) => {
        if (cnt >= ans) return;

        let minH = h[0], pos = 0;
        for (let j = 1; j < m; j++) {
            if (h[j] < minH) { minH = h[j]; pos = j; }
        }

        if (minH === n) { ans = cnt; return; }

        let maxLen = 1;
        while (pos + maxLen < m && h[pos + maxLen] === minH && minH + maxLen + 1 <= n) {
            maxLen++;
        }

        for (let len = maxLen; len >= 1; len--) {
            for (let j = pos; j < pos + len; j++) h[j] += len;
            dfs(cnt + 1);
            for (let j = pos; j < pos + len; j++) h[j] -= len;
        }
    };

    dfs(0);
    return ans;
};
// @lc code=end

// TEST:
console.log(tilingRectangle(2, 3)); // 3
console.log(tilingRectangle(5, 8)); // 5
console.log(tilingRectangle(11, 13)); // 6
console.log(tilingRectangle(1, 1)); // 1
console.log(tilingRectangle(4, 4)); // 1
