/*
 * @lc app=leetcode id=2939 lang=javascript
 *
 * [2939] Maximum Xor Product
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @return {number}
 */
var maximumXorProduct = function(a, b, n) {
    const MOD = 1000000007n;
    const A = BigInt(a), B = BigInt(b);
    let ax = A, bx = B;

    for (let i = n - 1; i >= 0; i--) {
        const bit = 1n << BigInt(i);
        const aBit = (A >> BigInt(i)) & 1n;
        const bBit = (B >> BigInt(i)) & 1n;

        if (aBit === bBit) {
            if (aBit === 0n) { ax ^= bit; bx ^= bit; }
        } else {
            if ((ax < bx && aBit === 0n) || (ax >= bx && bBit === 0n)) {
                ax ^= bit; bx ^= bit;
            }
        }
    }

    return Number((ax % MOD) * (bx % MOD) % MOD);
};
// @lc code=end

// TEST:
console.log(maximumXorProduct(12, 5, 4)); // 98
console.log(maximumXorProduct(6, 7, 5)); // 930
console.log(maximumXorProduct(1, 6, 3)); // 12
console.log(maximumXorProduct(0, 0, 0)); // 0
console.log(maximumXorProduct(536870911, 1073741823, 30)); // 906250025
