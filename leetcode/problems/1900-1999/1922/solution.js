/*
 * @lc app=leetcode id=1922 lang=javascript
 *
 * [1922] Count Good Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = BigInt(1e9 + 7);
    const evenCount = BigInt(Math.ceil(n / 2));
    const oddCount = BigInt(Math.floor(n / 2));

    const pow = (base, exp) => {
        base %= MOD;
        let result = 1n;
        while (exp > 0n) {
            if (exp & 1n) result = result * base % MOD;
            base = base * base % MOD;
            exp >>= 1n;
        }
        return result;
    };

    return Number(pow(5n, evenCount) * pow(4n, oddCount) % MOD);
};
// @lc code=end

// TEST:
console.log(countGoodNumbers(1)); // 5
console.log(countGoodNumbers(4)); // 400
console.log(countGoodNumbers(50)); // 564908303
console.log(countGoodNumbers(2)); // 20
console.log(countGoodNumbers(806166225460393)); // expected large number
