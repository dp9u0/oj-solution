/*
 * @lc app=leetcode id=1923 lang=javascript
 *
 * [1923] Longest Common Subpath
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
var longestCommonSubpath = function(n, paths) {
    const M1 = 1000000007n;
    const M2 = 1000000009n;
    const B1 = 131n;
    const B2 = 137n;

    const m = paths.length;
    // use shortest path for binary search upper bound
    let minLen = Infinity;
    for (const p of paths) minLen = Math.min(minLen, p.length);

    const check = (len) => {
        if (len === 0) return true;
        if (len > minLen) return false;

        // compute hashes of subpaths of length `len` in first path
        let common = null;
        for (let pi = 0; pi < m; pi++) {
            const p = paths[pi];
            if (p.length < len) return false;

            const pLen = BigInt(p.length);
            const lenB = BigInt(len);

            // precompute B^len mod M
            let pow1 = 1n, pow2 = 1n;
            for (let i = 0; i < len; i++) {
                pow1 = pow1 * B1 % M1;
                pow2 = pow2 * B2 % M2;
            }

            const set = new Set();
            let h1 = 0n, h2 = 0n;
            for (let i = 0; i < p.length; i++) {
                const v = BigInt(p[i]) + 1n;
                h1 = (h1 * B1 + v) % M1;
                h2 = (h2 * B2 + v) % M2;
                if (i >= len) {
                    const old = BigInt(p[i - len]) + 1n;
                    h1 = (h1 - old * pow1 % M1 + M1) % M1;
                    h2 = (h2 - old * pow2 % M2 + M2) % M2;
                }
                if (i >= len - 1) {
                    const key = h1 * M2 + h2;
                    set.add(key);
                }
            }

            if (common === null) {
                common = set;
            } else {
                const next = new Set();
                for (const h of set) {
                    if (common.has(h)) next.add(h);
                }
                common = next;
                if (common.size === 0) return false;
            }
        }
        return common.size > 0;
    };

    let lo = 0, hi = minLen;
    while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        if (check(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(longestCommonSubpath(5, [[0,1,2,3,4],[2,3,4],[4,0,1,2,3]])); // 2
console.log(longestCommonSubpath(3, [[0],[1],[2]])); // 0
console.log(longestCommonSubpath(5, [[0,1,2,3,4],[4,3,2,1,0]])); // 1
console.log(longestCommonSubpath(5, [[0,1,2,3,4],[0,1,2,3,4]])); // 5
console.log(longestCommonSubpath(3, [[0,1,2],[1,2,0],[2,0,1]])); // 1
