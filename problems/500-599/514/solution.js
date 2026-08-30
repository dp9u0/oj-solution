/*
 * @lc app=leetcode id=514 lang=javascript
 *
 * [514] Freedom Trail
 */

// @lc code=start
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const n = ring.length;
    const m = key.length;

    // 预处理：字符 -> ring 中的所有下标
    const pos = new Map();
    for (let i = 0; i < n; i++) {
        if (!pos.has(ring[i])) pos.set(ring[i], []);
        pos.get(ring[i]).push(i);
    }

    const dist = (a, b) => {
        const d = Math.abs(a - b);
        return Math.min(d, n - d);
    };

    // dp[j]：已拼出当前前缀，且 ring[j] 对齐 12:00 时的最少步数
    let dp = new Array(n).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < m; i++) {
        const ndp = new Array(n).fill(Infinity);
        for (const j of pos.get(key[i])) {
            for (let p = 0; p < n; p++) {
                if (dp[p] === Infinity) continue;
                ndp[j] = Math.min(ndp[j], dp[p] + dist(p, j) + 1);
            }
        }
        dp = ndp;
    }

    return Math.min(...dp);
};
// @lc code=end

// TEST:
console.log(findRotateSteps('godding', 'gd')); // 4
console.log(findRotateSteps('godding', 'godding')); // 13
console.log(findRotateSteps('a', 'a')); // 1
console.log(findRotateSteps('abc', 'c')); // 2 (转 1 步 + 按 1 步)
console.log(findRotateSteps('caotmcaataijkxi', 'atcmaoitijt')); // 36 (BFS 暴力交叉验证)
console.log(findRotateSteps('ababcb', 'acb')); // 6
