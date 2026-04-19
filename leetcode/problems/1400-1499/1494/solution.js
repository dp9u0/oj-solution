/*
 * @lc app=leetcode id=1494 lang=javascript
 *
 * [1494] Parallel Courses II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, relations, k) {
    const full = (1 << n) - 1;
    const prereq = new Int32Array(n);
    for (const [prev, next] of relations) {
        prereq[next - 1] |= 1 << (prev - 1);
    }

    const dp = new Uint8Array(1 << n).fill(255);
    dp[0] = 0;

    for (let mask = 0; mask <= full; mask++) {
        if (dp[mask] === 255) continue;

        let available = 0;
        for (let i = 0; i < n; i++) {
            if (!(mask >> i & 1) && (prereq[i] & mask) === prereq[i]) {
                available |= 1 << i;
            }
        }
        if (!available) continue;

        const take = Math.min(k, popcount(available));
        if (take === popcount(available)) {
            const next = mask | available;
            if (dp[mask] + 1 < dp[next]) dp[next] = dp[mask] + 1;
            continue;
        }

        // Enumerate subsets of size exactly 'take' from available
        enumerate(available, take, (sub) => {
            const next = mask | sub;
            if (dp[mask] + 1 < dp[next]) dp[next] = dp[mask] + 1;
        });
    }

    return dp[full];
};

const popcount = (x) => { let c = 0; while (x) { c++; x &= x - 1; } return c; };

const enumerate = (mask, count, fn) => {
    const bits = [];
    for (let i = 0; i < 32; i++) {
        if (mask >> i & 1) bits.push(i);
    }
    const choose = (start, rem, sub) => {
        if (rem === 0) { fn(sub); return; }
        for (let i = start; i <= bits.length - rem; i++) {
            choose(i + 1, rem - 1, sub | (1 << bits[i]));
        }
    };
    choose(0, count, 0);
};
// @lc code=end

// TEST:
console.log(minNumberOfSemesters(4, [[2,1],[3,1],[1,4]], 2)); // 3
console.log(minNumberOfSemesters(5, [[2,1],[3,1],[4,1],[1,5]], 2)); // 4
console.log(minNumberOfSemesters(4, [[2,1],[3,1],[1,4]], 3)); // 3
console.log(minNumberOfSemesters(1, [], 1)); // 1
console.log(minNumberOfSemesters(5, [], 2)); // 3
console.log(minNumberOfSemesters(8, [[1,2],[2,3],[3,4],[5,6],[6,7],[7,8]], 2)); // 4
