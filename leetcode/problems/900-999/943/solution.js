/*
 * @lc app=leetcode id=943 lang=javascript
 *
 * [943] Find the Shortest Superstring
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
    const n = words.length;

    // overlap[i][j] = chars added when appending words[j] after words[i]
    const overlap = Array.from({ length: n }, () => new Int32Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const a = words[i], b = words[j];
            let maxOv = 0;
            for (let k = Math.min(a.length, b.length); k >= 1; k--) {
                if (a.slice(a.length - k) === b.slice(0, k)) {
                    maxOv = k;
                    break;
                }
            }
            overlap[i][j] = b.length - maxOv;
        }
    }

    // dp[mask][i] = min added length, last word is i
    const full = (1 << n) - 1;
    const INF = 1e9;
    const dp = Array.from({ length: 1 << n }, () => new Int32Array(n).fill(INF));
    const parent = Array.from({ length: 1 << n }, () => new Int32Array(n).fill(-1));

    for (let i = 0; i < n; i++) dp[1 << i][i] = words[i].length;

    for (let mask = 1; mask <= full; mask++) {
        for (let last = 0; last < n; last++) {
            if (!(mask & (1 << last))) continue;
            if (dp[mask][last] === INF) continue;
            for (let next = 0; next < n; next++) {
                if (mask & (1 << next)) continue;
                const newMask = mask | (1 << next);
                const newLen = dp[mask][last] + overlap[last][next];
                if (newLen < dp[newMask][next]) {
                    dp[newMask][next] = newLen;
                    parent[newMask][next] = last;
                }
            }
        }
    }

    // Find best ending
    let bestLen = INF, bestLast = 0;
    for (let i = 0; i < n; i++) {
        if (dp[full][i] < bestLen) {
            bestLen = dp[full][i];
            bestLast = i;
        }
    }

    // Reconstruct path
    const path = [];
    let mask = full, cur = bestLast;
    while (cur !== -1) {
        path.push(cur);
        const p = parent[mask][cur];
        mask ^= (1 << cur);
        cur = p;
    }
    path.reverse();

    // Build result
    let result = words[path[0]];
    for (let i = 1; i < n; i++) {
        const prev = path[i - 1], curr = path[i];
        const maxOv = words[curr].length - overlap[prev][curr];
        result += words[curr].slice(maxOv);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(shortestSuperstring(['alex','loves','leetcode']));
console.log(shortestSuperstring(['catg','ctaagt','gcta','ttca','atgcatc']));
console.log(shortestSuperstring(['abc','bcd','cde']));
console.log(shortestSuperstring(['a']));
console.log(shortestSuperstring(['ab','ba']));