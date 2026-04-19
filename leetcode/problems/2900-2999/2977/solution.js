/*
 * @lc app=leetcode id=2977 lang=javascript
 *
 * [2977] Minimum Cost to Convert String II
 */

// @lc code=start
/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const n = source.length;

    // Group conversions by string length, build graph
    const groups = new Map();
    const allStrings = new Map();
    for (let i = 0; i < original.length; i++) {
        const L = original[i].length;
        if (!groups.has(L)) {
            groups.set(L, []);
            allStrings.set(L, new Set());
        }
        groups.get(L).push([original[i], changed[i], cost[i]]);
        allStrings.get(L).add(original[i]);
        allStrings.get(L).add(changed[i]);
    }

    // Floyd-Warshall per length group, store as Map<from, Map<to, minCost>>
    const convCost = new Map();
    for (const [L, edges] of groups) {
        const nodes = [...allStrings.get(L)];
        const idx = new Map();
        nodes.forEach((s, i) => idx.set(s, i));
        const m = nodes.length;
        const dist = Array.from({length: m}, (_, i) =>
            new Float64Array(m).fill(Infinity).map((_, j) => i === j ? 0 : Infinity)
        );
        for (let i = 0; i < m; i++) dist[i][i] = 0;
        for (const [from, to, c] of edges) {
            const fi = idx.get(from), ti = idx.get(to);
            dist[fi][ti] = Math.min(dist[fi][ti], c);
        }
        for (let k = 0; k < m; k++)
            for (let i = 0; i < m; i++)
                for (let j = 0; j < m; j++)
                    if (dist[i][k] + dist[k][j] < dist[i][j])
                        dist[i][j] = dist[i][k] + dist[k][j];
        const mc = new Map();
        for (let i = 0; i < m; i++) {
            const inner = new Map();
            for (let j = 0; j < m; j++)
                if (dist[i][j] < Infinity) inner.set(nodes[j], dist[i][j]);
            mc.set(nodes[i], inner);
        }
        convCost.set(L, mc);
    }

    // DP on string positions
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        if (dp[i] === Infinity) continue;
        if (source[i] === target[i]) dp[i + 1] = Math.min(dp[i + 1], dp[i]);
        for (const [L, mc] of convCost) {
            if (i + L > n) continue;
            const sub = source.substring(i, i + L);
            const tgt = target.substring(i, i + L);
            if (mc.has(sub) && mc.get(sub).has(tgt)) {
                dp[i + L] = Math.min(dp[i + L], dp[i] + mc.get(sub).get(tgt));
            }
        }
    }

    return dp[n] === Infinity ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(minimumCost('abcd', 'acbe', ['a','b','c','c','e','d'], ['b','c','b','e','b','e'], [2,5,5,1,2,20])); // 28
console.log(minimumCost('abcdefgh', 'acdeeghh', ['bcd','fgh','thh'], ['cde','thh','ghh'], [1,3,5])); // 9
console.log(minimumCost('abcdefgh', 'addddddd', ['bcd','defgh'], ['ddd','ddddd'], [100,1578])); // -1
console.log(minimumCost('a', 'a', ['a'], ['b'], [1])); // 0
console.log(minimumCost('abcd', 'abce', ['d'], ['e'], [100])); // 100
