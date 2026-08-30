/*
 * @lc app=leetcode id=3939 lang=javascript
 *
 * [3939] Count Non Adjacent Subsets in a Rooted Tree
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countValidSubsets = function(parent, nums, k) {
    const MOD = 1e9 + 7;
    const n = parent.length;

    // children[i]: 节点 i 的所有子节点
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    // f[u][r]: 子树 u 中不选 u、和 ≡ r 的独立集数
    // g[u][r]: 子树 u 中选 u、和 ≡ r 的独立集数
    const f = [], g = [];
    for (let u = 0; u < n; u++) {
        f[u] = new Array(k).fill(0);
        f[u][0] = 1;
        g[u] = new Array(k).fill(0);
        g[u][nums[u] % k] = 1;
    }

    // 模 k 余数卷积：a ⊛ b（15 位拆分乘法避免 2^53 精度丢失）
    const conv = (a, b) => {
        const res = new Array(k).fill(0);
        for (let i = 0; i < k; i++) {
            const ai = a[i];
            if (ai === 0) continue;
            const hi = (ai / 32768) | 0, lo = ai & 32767;
            for (let j = 0; j < k; j++) {
                const bv = b[j];
                if (bv === 0) continue;
                let prod = (hi * bv % MOD) * 32768 + lo * bv;
                prod %= MOD;
                let r = i + j;
                if (r >= k) r -= k;
                res[r] = (res[r] + prod) % MOD;
            }
        }
        return res;
    };

    // parent[i] < i，逆序处理保证子节点先于父节点
    for (let u = n - 1; u >= 0; u--) {
        for (const c of children[u]) {
            const fcg = new Array(k);
            for (let r = 0; r < k; r++) fcg[r] = (f[c][r] + g[c][r]) % MOD;
            f[u] = conv(f[u], fcg);
            g[u] = conv(g[u], f[c]);
        }
    }

    const ans = (f[0][0] + g[0][0] - 1) % MOD; // 减去空集
    return (ans + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(countValidSubsets([-1, 0, 1], [1, 2, 3], 3)); // 1
console.log(countValidSubsets([-1, 0, 0, 0], [2, 1, 2, 1], 3)); // 2
console.log(countValidSubsets([-1], [5], 5)); // 1
console.log(countValidSubsets([-1], [5], 3)); // 0
console.log(countValidSubsets([-1, 0, 1], [7, 7, 7], 1)); // 4 ({0},{1},{2},{0,2})
console.log(countValidSubsets([-1, 0], [1, 1], 2)); // 0 ({0,1} 相邻非法，{0},{1} 和均不被 2 整除)
console.log(countValidSubsets([-1, 0, 0], [2, 1, 1], 2)); // 2 ({0}, {1,2})
console.log(countValidSubsets([-1, 0, 1, 1], [3, 1, 2, 3], 4)); // 1 ({0,2,3})
