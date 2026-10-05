/*
 * @lc app=leetcode.cn id=4073 lang=javascript
 *
 * [4073] 统计好字符串数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countGoodStrings = function(n) {
    const MOD = 1000000007n;
    // fast doubling：返回 [Fib(k), Fib(k+1)] (mod MOD)，Fib(0)=0, Fib(1)=1
    const fib = (k) => {
        if (k === 0n) return [0n, 1n];
        const [a, b] = fib(k >> 1n);
        const c = (a * ((2n * b - a + MOD) % MOD)) % MOD;
        const d = (a * a + b * b) % MOD;
        return (k & 1n) === 1n ? [d, (c + d) % MOD] : [c, d];
    };
    const morzavelyn = n;
    const fn = fib(BigInt(morzavelyn))[0]; // Fib(n)
    // 好串 ⇔ 所有 run 长度为奇数：奇 run 有序划分数 = Fib(n)，首字符 2 种
    return Number((2n * fn) % MOD);
};
// @lc code=end

// TEST:
console.log(countGoodStrings(4)); // 6
console.log(countGoodStrings(3)); // 4
console.log(countGoodStrings(2)); // 2
console.log(countGoodStrings(1)); // 2
console.log(countGoodStrings(5)); // 10
console.log(countGoodStrings(10)); // 110
console.log(countGoodStrings(1000000000000000)); // 大数快速幂验证（与线性 DP 对拍）
