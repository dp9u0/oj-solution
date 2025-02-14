/*
 * @lc app=leetcode id=313 lang=javascript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    // 创建dp数组存储丑数
    const dp = new Array(n);
    dp[0] = 1;
    
    // 为每个质数创建一个指针
    const pointers = new Array(primes.length).fill(0);
    
    // 循环生成n-1个丑数
    for (let i = 1; i < n; i++) {
        // 计算每个质数可能生成的下一个丑数
        let nextUgly = Infinity;
        for (let j = 0; j < primes.length; j++) {
            nextUgly = Math.min(nextUgly, dp[pointers[j]] * primes[j]);
        }
        dp[i] = nextUgly;
        
        // 更新所有能生成这个丑数的质数的指针
        for (let j = 0; j < primes.length; j++) {
            if (dp[pointers[j]] * primes[j] === nextUgly) {
                pointers[j]++;
            }
        }
    }
    
    return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(nthSuperUglyNumber(12, [2,7,13,19])); // 32
console.log(nthSuperUglyNumber(1, [2,3,5])); // 1 
console.log(nthSuperUglyNumber(10, [2,3,5])); // 12
console.log(nthSuperUglyNumber(15, [3,5,7,11,19])); // 49
console.log(nthSuperUglyNumber(100, [2,3,5])); // 1536
