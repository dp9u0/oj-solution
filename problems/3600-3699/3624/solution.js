/*
 * @lc app=leetcode id=3624 lang=javascript
 *
 * [3624] Number of Integers With Popcount-Depth Equal to K II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var popcountDepth = function(nums, queries) {
    const popcount = (x) => {
        let c = 0;
        // Handle large numbers: use toString(2) for numbers > 2^32
        if (x > 0xFFFFFFFF) {
            const bin = x.toString(2);
            for (const ch of bin) if (ch === '1') c++;
            return c;
        }
        while (x) { c++; x &= x - 1; }
        return c;
    };

    const getDepth = (x) => {
        let d = 0;
        while (x !== 1) { x = popcount(x); d++; }
        return d;
    };

    const n = nums.length;
    const depth = nums.map(getDepth);

    // 6 BITs for k = 0..5
    class BIT {
        constructor(n) { this.n = n; this.t = new Int32Array(n + 1); }
        add(i, v) { for (i++; i <= this.n; i += i & -i) this.t[i] += v; }
        sum(i) { let s = 0; for (i++; i > 0; i -= i & -i) s += this.t[i]; return s; }
        rangeSum(l, r) { return this.sum(r) - (l > 0 ? this.sum(l - 1) : 0); }
    }

    const bits = Array.from({ length: 6 }, () => new BIT(n));
    for (let i = 0; i < n; i++) bits[depth[i]].add(i, 1);

    const ans = [];
    for (const q of queries) {
        if (q[0] === 1) {
            const [, l, r, k] = q;
            ans.push(k <= 5 ? bits[k].rangeSum(l, r) : 0);
        } else {
            const [, idx, val] = q;
            bits[depth[idx]].add(idx, -1);
            depth[idx] = getDepth(val);
            bits[depth[idx]].add(idx, 1);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(popcountDepth([2, 4], [[1, 0, 1, 1], [2, 1, 1], [1, 0, 1, 0]]))); // [2,1]
console.log(JSON.stringify(popcountDepth([3, 5, 6], [[1, 0, 2, 2], [2, 1, 4], [1, 1, 2, 1], [1, 0, 1, 0]]))); // [3,1,0]
console.log(JSON.stringify(popcountDepth([1, 2], [[1, 0, 1, 1], [2, 0, 3], [1, 0, 0, 1], [1, 0, 0, 2]]))); // [1,0,1]
console.log(JSON.stringify(popcountDepth([1], [[1, 0, 0, 0]]))); // [1]
console.log(JSON.stringify(popcountDepth([7], [[1, 0, 0, 3]]))); // [1]
