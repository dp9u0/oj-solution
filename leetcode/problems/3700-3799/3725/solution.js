/*
 * @lc app=leetcode id=3725 lang=javascript
 *
 * [3725] Count Ways to Choose Coprime Integers from Rows
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var countCoprime = function(mat) {
    const MOD = 1e9 + 7;
    const MAXV = 150;

    // Sieve Möbius function
    const mu = new Array(MAXV + 1).fill(1);
    const isPrime = new Array(MAXV + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= MAXV; i++) {
        if (!isPrime[i]) continue;
        for (let j = i; j <= MAXV; j += i) {
            isPrime[j] = (j === i);
            mu[j] *= -1;
        }
        const i2 = i * i;
        for (let j = i2; j <= MAXV; j += i2) {
            mu[j] = 0;
        }
    }

    // For each d, count how many elements in each row are divisible by d
    let result = 0;
    for (let d = 1; d <= MAXV; d++) {
        if (mu[d] === 0) continue;
        let ways = 1;
        for (const row of mat) {
            let cnt = 0;
            for (const x of row) {
                if (x % d === 0) cnt++;
            }
            ways = (ways * cnt) % MOD;
        }
        result = (result + mu[d] * ways % MOD + MOD) % MOD;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countCoprime([[1,2],[3,4]]) === 3);
console.log(countCoprime([[2,2],[2,2]]) === 0);
console.log(countCoprime([[1]]) === 1);
console.log(countCoprime([[2,3]]) === 0);
console.log(countCoprime([[6,10,15],[4,9,12]]) === 2);
console.log(countCoprime([[1,1],[1,1]]) === 4);
