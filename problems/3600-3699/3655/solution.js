/*
 * @lc app=leetcode id=3655 lang=javascript
 *
 * [3655] XOR After Range Multiplication Queries II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    const MOD = 1e9 + 7;
    const n = nums.length;
    const B = Math.floor(Math.sqrt(n)) + 1;

    // Precise modular multiplication for a, b < MOD
    const mulMod = (a, b) => {
        const a0 = a & 0x7FFF, a1 = a >> 15;
        return ((a1 * b % MOD) * 0x8000 + a0 * b) % MOD;
    };

    const modPow = (base, exp) => {
        base %= MOD;
        let r = 1;
        while (exp > 0) {
            if (exp & 1) r = mulMod(r, base);
            base = mulMod(base, base);
            exp = (exp - (exp & 1)) / 2;
        }
        return r;
    };

    const factor = new Array(n).fill(1);

    // Group small-k queries by k
    const smallQ = new Map();
    const largeQ = [];
    for (const [l, r, k, v] of queries) {
        if (k <= B) {
            if (!smallQ.has(k)) smallQ.set(k, []);
            smallQ.get(k).push([l, r, v]);
        } else {
            largeQ.push([l, r, k, v]);
        }
    }

    // Process small-k: difference arrays per residue class
    for (const [k, qList] of smallQ) {
        const byRes = new Map();
        for (const [l, r, v] of qList) {
            const res = l % k;
            if (!byRes.has(res)) byRes.set(res, []);
            byRes.get(res).push([l, r, v]);
        }

        for (const [res, updates] of byRes) {
            if (res >= n) continue;
            const m = Math.ceil((n - res) / k);
            const diff = new Array(m + 1).fill(1);

            for (const [l, r, v] of updates) {
                const jL = (l - res) / k;
                const jR = Math.floor((r - res) / k);
                diff[jL] = mulMod(diff[jL], v);
                if (jR + 1 <= m) {
                    diff[jR + 1] = mulMod(diff[jR + 1], modPow(v, MOD - 2));
                }
            }

            let prod = 1;
            for (let j = 0; j < m; j++) {
                prod = mulMod(prod, diff[j]);
                const idx = res + j * k;
                if (idx < n) factor[idx] = mulMod(factor[idx], prod);
            }
        }
    }

    // Process large-k: iterate directly
    for (const [l, r, k, v] of largeQ) {
        for (let idx = l; idx <= r; idx += k) {
            factor[idx] = mulMod(factor[idx], v);
        }
    }

    // Compute final XOR
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= mulMod(nums[i], factor[i]);
    }
    return xor;
};
// @lc code=end

// TEST:
console.log(xorAfterQueries([1,1,1], [[0,2,1,4]])); // 4
console.log(xorAfterQueries([2,3,1,5,4], [[1,4,2,3],[0,2,1,2]])); // 31
console.log(xorAfterQueries([5], [[0,0,1,3]])); // 15
console.log(xorAfterQueries([1,2,3], [[0,2,3,2]])); // 1^4^3=6
console.log(xorAfterQueries([1,2,3,4,5], [[0,4,1,2],[1,3,1,3]])); //
console.log(xorAfterQueries([551,78,927], [[2,2,3,10],[2,2,3,1],[0,0,1,7],[2,2,2,9],[2,2,3,12],[1,2,2,1],[0,1,3,6],[1,1,1,8],[2,2,3,6],[0,1,2,6],[0,2,2,14],[2,2,2,20],[2,2,1,5],[2,2,2,20],[0,2,2,2]])); // 385903184
