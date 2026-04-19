/*
 * @lc app=leetcode id=3145 lang=javascript
 *
 * [3145] Find Products of Elements of Big Array
 */

// @lc code=start
/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var findProductsOfElements = function(queries) {
    // Count of integers in [1..n] with bit b set
    const countBit = (n, b) => {
        const p = 1n << BigInt(b + 1);
        const half = 1n << BigInt(b);
        const full = (n + 1n) / p * half;
        const rem = (n + 1n) % p;
        return full + (rem > half ? rem - half : 0n);
    };

    // Total set bits in [1..n]
    const totalCount = (n) => {
        let s = 0n;
        for (let b = 0; b < 60; b++) s += countBit(n, b);
        return s;
    };

    // Sum of (bit_position * count_of_bit) for [1..n]
    const totalSumExp = (n) => {
        let s = 0n;
        for (let b = 0; b < 60; b++) s += BigInt(b) * countBit(n, b);
        return s;
    };

    // S(k) = sum of exponents for first k elements of big_nums
    const S = (k) => {
        if (k <= 0n) return 0n;
        let lo = 1n, hi = k;
        while (lo < hi) {
            const mid = (lo + hi + 1n) >> 1n;
            if (totalCount(mid) <= k) lo = mid;
            else hi = mid - 1n;
        }
        const n = lo;
        let result = totalSumExp(n);
        let rem = k - totalCount(n);
        const next = n + 1n;
        for (let b = 0; b < 60 && rem > 0n; b++) {
            if (next & (1n << BigInt(b))) {
                result += BigInt(b);
                rem--;
            }
        }
        return result;
    };

    const powMod = (exp, mod) => {
        let r = 1, base = 2 % mod;
        let e = exp;
        while (e > 0n) {
            if (e & 1n) r = r * base % mod;
            base = base * base % mod;
            e >>= 1n;
        }
        return r % mod;
    };

    return queries.map(([from, to, mod]) => {
        const expSum = S(BigInt(to + 1)) - S(BigInt(from));
        return powMod(expSum, mod);
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findProductsOfElements([[1,3,7]]))); // [4]
console.log(JSON.stringify(findProductsOfElements([[2,5,3],[7,7,4]]))); // [2,2]
console.log(JSON.stringify(findProductsOfElements([[0,0,5]]))); // [1] (big_nums[0]=1, 1%5=1)
console.log(JSON.stringify(findProductsOfElements([[0,1,10]]))); // [2] (1*2=2, 2%10=2)
console.log(JSON.stringify(findProductsOfElements([[9,9,1]]))); // [0]
