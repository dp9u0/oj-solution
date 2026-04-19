/*
 * @lc app=leetcode id=1467 lang=javascript
 *
 * [1467] Probability of a Two Boxes Having The Same Number of Distinct Balls
 */

// @lc code=start
/**
 * @param {number[]} balls
 * @return {number}
 */
var getProbability = function(balls) {
    const k = balls.length;
    const total = balls.reduce((a, b) => a + b, 0);
    const n = total >> 1;

    const fact = [1n];
    for (let i = 1; i <= total; i++) fact.push(fact[i - 1] * BigInt(i));

    let favorable = 0n;
    let allWays = 0n;
    const x = new Array(k).fill(0);

    const dfs = (idx, sum) => {
        if (idx === k) {
            if (sum !== n) return;
            let denom = 1n;
            for (let i = 0; i < k; i++) denom *= fact[x[i]] * fact[balls[i] - x[i]];
            const ways = fact[n] * fact[n] / denom;
            allWays += ways;
            let d1 = 0, d2 = 0;
            for (let i = 0; i < k; i++) {
                if (x[i] > 0) d1++;
                if (balls[i] - x[i] > 0) d2++;
            }
            if (d1 === d2) favorable += ways;
            return;
        }
        for (let v = 0; v <= balls[idx] && sum + v <= n; v++) {
            x[idx] = v;
            dfs(idx + 1, sum + v);
        }
        x[idx] = 0;
    };

    dfs(0, 0);

    const scale = 1000000000000n;
    return Number(favorable * scale / allWays) / 1e12;
};
// @lc code=end

// TEST:
console.log(getProbability([1, 1])); // 1.0
console.log(getProbability([2, 1, 1])); // 0.66667
console.log(getProbability([1, 2, 1, 2])); // 0.6
console.log(getProbability([3, 2, 1])); // ~0.3
console.log(getProbability([6, 6, 6, 6, 6, 6])); // some value
