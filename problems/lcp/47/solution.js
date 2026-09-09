/*
 * @lc app=leetcode.cn id=LCP 47 lang=javascript
 *
 * [LCP 47] 入场安检
 */

// @lc code=start
/**
 * @param {number[]} capacities
 * @param {number} k
 * @return {number}
 */
var securityCheck = function(capacities, k) {
    const MOD = 1000000007;
    const n = capacities.length;
    const weights = capacities.slice(0, n - 1).map(c => c - 1); // LIFO rooms remove c-1 early visitors each
    const lastW = capacities[n - 1] - 1;
    // number of subsets of `weights` summing exactly to target
    const count = (target) => {
        if (target < 0) return 0;
        const dp = new Array(target + 1).fill(0);
        dp[0] = 1;
        for (const x of weights) {
            for (let s = target; s >= x; s--) dp[s] = (dp[s] + dp[s - x]) % MOD;
        }
        return dp[target];
    };
    // last room FIFO: first passer = R; LIFO: first passer = R + c_last - 1
    return (count(k) + count(k - lastW)) % MOD;
};
// @lc code=end

// TEST:
// brute force: simulate all 2^N type assignments
const bruteCheck = (capacities, k) => {
    const n = capacities.length, M = capacities.reduce((a, b) => a + b, 0);
    let cnt = 0;
    for (let mask = 0; mask < (1 << n); mask++) {
        const rooms = Array.from({ length: n }, () => []);
        let first = -1;
        for (let v = 0; v <= M; v++) {
            let cur = v;
            for (let i = 0; i < n; i++) {
                if (rooms[i].length < capacities[i]) { rooms[i].push(cur); break; }
                const out = (mask >> i) & 1 ? rooms[i].pop() : rooms[i].shift(); // 1 = LIFO
                rooms[i].push(cur);
                cur = out;
                if (i === n - 1 && first === -1) first = cur;
            }
        }
        if (first === k) cnt++;
    }
    return cnt;
};
console.log(securityCheck([2, 2, 3], 2) === 2);
console.log(securityCheck([3, 3], 3) === 0);
console.log(securityCheck([4, 3, 2, 2], 6) === 2);
console.log(securityCheck([1], 0) === 2);
console.log(securityCheck([1], 1) === 0);
// randomized cross-check
let seed = 777;
const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed % n; };
let allOk = true;
for (let t = 0; t < 300; t++) {
    const n = 1 + rnd(7);
    const caps = Array.from({ length: n }, () => 1 + rnd(4));
    const M = caps.reduce((a, b) => a + b, 0);
    const k = rnd(M + 1);
    const a = securityCheck(caps, k), b = bruteCheck(caps, k);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(caps), k, a, b); }
}
console.log(allOk);
