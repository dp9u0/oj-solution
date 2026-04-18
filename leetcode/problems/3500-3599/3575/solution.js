/*
 * @lc app=leetcode id=3575 lang=javascript
 *
 * [3575] Maximum Good Subtree Score
 */

// @lc code=start
/**
 * @param {number[]} vals
 * @param {number[]} par
 * @return {number}
 */
var goodSubtreeSum = function(vals, par) {
    const MOD = 1e9 + 7;
    const n = vals.length;

    // get digit bitmask for a value, -1 if has duplicate digits
    const getMask = (v) => {
        let m = 0;
        while (v > 0) {
            const d = v % 10;
            if (m & (1 << d)) return -1;
            m |= 1 << d;
            v = Math.floor(v / 10);
        }
        return m;
    };

    // build children adjacency
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[par[i]].push(i);

    let totalScore = 0;

    // dfs returns a Map: mask -> max sum
    const dfs = (u) => {
        let dp = new Map();

        // include node u itself
        const mu = getMask(vals[u]);
        if (mu >= 0) dp.set(mu, vals[u]);
        dp.set(0, 0);

        for (const v of children[u]) {
            const child = dfs(v);
            const next = new Map(dp);
            for (const [cm, cs] of child) {
                if (cm === 0 && cs === 0) continue;
                for (const [dm, ds] of dp) {
                    if (cm & dm) continue; // digit conflict
                    const nm = cm | dm;
                    const ns = cs + ds;
                    if (!next.has(nm) || next.get(nm) < ns) {
                        next.set(nm, ns);
                    }
                }
            }
            dp = next;
        }

        let best = 0;
        for (const [, s] of dp) if (s > best) best = s;
        totalScore = (totalScore + best) % MOD;

        return dp;
    };

    dfs(0);
    return totalScore;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(goodSubtreeSum, [[2, 3], [-1, 0]], 8);
test(goodSubtreeSum, [[1, 5, 2], [-1, 0, 0]], 15);
test(goodSubtreeSum, [[34, 1, 2], [-1, 0, 1]], 42);
test(goodSubtreeSum, [[3, 22, 5], [-1, 0, 1]], 18);
test(goodSubtreeSum, [[1], [-1]], 1);
test(goodSubtreeSum, [[11, 22], [-1, 0]], 0);
test(goodSubtreeSum, [[12, 34, 56], [-1, 0, 0]], 192);
