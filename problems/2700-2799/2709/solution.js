/*
 * @lc app=leetcode id=2709 lang=javascript
 *
 * [2709] Greatest Common Divisor Traversal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
    const n = nums.length;
    if (n === 1) return true;

    const maxVal = Math.max(...nums);
    const spf = new Int32Array(maxVal + 1);
    for (let i = 2; i <= maxVal; i++) spf[i] = i;
    for (let i = 2; i * i <= maxVal; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= maxVal; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    const getPrimes = (x) => {
        const primes = [];
        while (x > 1) {
            const p = spf[x];
            primes.push(p);
            while (x % p === 0) x = Math.floor(x / p);
        }
        return primes;
    };

    const parent = new Int32Array(n);
    const rnk = new Int8Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a, b) => {
        a = find(a); b = find(b);
        if (a === b) return;
        if (rnk[a] < rnk[b]) { const t = a; a = b; b = t; }
        parent[b] = a;
        if (rnk[a] === rnk[b]) rnk[a]++;
    };

    const primeToFirst = new Map();
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) return false;
        const primes = getPrimes(nums[i]);
        for (const p of primes) {
            if (primeToFirst.has(p)) {
                union(primeToFirst.get(p), i);
            } else {
                primeToFirst.set(p, i);
            }
        }
    }

    const root = find(0);
    for (let i = 1; i < n; i++) {
        if (find(i) !== root) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canTraverseAllPairs([2,3,6])); // true
console.log(canTraverseAllPairs([3,9,5])); // false
console.log(canTraverseAllPairs([4,3,12,8])); // true
console.log(canTraverseAllPairs([1])); // true
console.log(canTraverseAllPairs([1,1])); // false
