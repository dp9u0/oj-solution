/*
 * @lc app=leetcode.cn id=351 lang=javascript
 *
 * [351] 安卓系统手势解锁
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
    // skips[a][b] = the dot between a and b that must already be used
    const skips = Array.from({ length: 9 }, () => new Array(9).fill(0));
    skips[0][2] = skips[2][0] = 1;
    skips[0][6] = skips[6][0] = 3;
    skips[2][8] = skips[8][2] = 5;
    skips[6][8] = skips[8][6] = 7;
    skips[1][7] = skips[7][1] = 4;
    skips[3][5] = skips[5][3] = 4;
    skips[0][8] = skips[8][0] = 4;
    skips[2][6] = skips[6][2] = 4;

    const used = new Array(9).fill(false);

    const dfs = (cur, remaining) => {
        if (remaining === 0) return 1;
        let count = 0;
        for (let next = 0; next < 9; next++) {
            const need = skips[cur][next];
            if (!used[next] && (need === 0 || used[need])) {
                used[next] = true;
                count += dfs(next, remaining - 1);
                used[next] = false;
            }
        }
        return count;
    };

    let total = 0;
    for (let len = m; len <= n; len++) {
        for (let start = 0; start < 9; start++) {
            used[start] = true;
            total += dfs(start, len - 1);
            used[start] = false;
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(numberOfPatterns(1, 1)); // 9
console.log(numberOfPatterns(1, 2)); // 54
console.log(numberOfPatterns(3, 3)); // 12? (standard: m=n=1 -> 9; known lc answer for 1,1 is 9)
console.log(numberOfPatterns(2, 2)); // 56
