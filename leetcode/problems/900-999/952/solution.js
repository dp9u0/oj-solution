/*
 * @lc app=leetcode id=952 lang=javascript
 *
 * [952] Largest Component Size by Common Factor
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestComponentSize = function(nums) {
    const maxVal = Math.max(...nums);

    // Sieve for smallest prime factor
    const spf = new Array(maxVal + 1).fill(0);
    for (let i = 2; i <= maxVal; i++) {
        if (spf[i] === 0) {
            for (let j = i; j <= maxVal; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }

    // Union-Find
    const parent = new Array(maxVal + 1);
    const rank = new Array(maxVal + 1).fill(0);
    for (let i = 0; i <= maxVal; i++) parent[i] = i;

    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(a, b) {
        const ra = find(a), rb = find(b);
        if (ra === rb) return;
        if (rank[ra] < rank[rb]) parent[ra] = rb;
        else if (rank[ra] > rank[rb]) parent[rb] = ra;
        else { parent[rb] = ra; rank[ra]++; }
    }

    // Factorize each num, union with prime factors
    for (const num of nums) {
        let x = num;
        while (x > 1) {
            const p = spf[x];
            union(num, p);
            while (x % p === 0) x = Math.floor(x / p);
        }
    }

    // Count by root
    const count = new Map();
    let ans = 0;
    for (const num of nums) {
        const root = find(num);
        const c = (count.get(root) || 0) + 1;
        count.set(root, c);
        ans = Math.max(ans, c);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(largestComponentSize([4, 6, 15, 35]));           // 4
console.log(largestComponentSize([20, 50, 9, 63]));          // 2
console.log(largestComponentSize([2, 3, 6, 7, 4, 12, 21, 39])); // 8
