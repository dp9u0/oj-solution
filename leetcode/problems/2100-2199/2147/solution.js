/*
 * @lc app=leetcode id=2147 lang=javascript
 *
 * [2147] Number of Ways to Divide a Long Corridor
 */

// @lc code=start
/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const MOD = 1e9 + 7;
    const seats = [];
    for (let i = 0; i < corridor.length; i++) {
        if (corridor[i] === 'S') seats.push(i);
    }
    if (seats.length === 0 || seats.length % 2 !== 0) return 0;
    let ans = 1;
    for (let i = 1; i < seats.length / 2; i++) {
        ans = ans * (seats[2 * i] - seats[2 * i - 1]) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfWays("SSPPSPS")); // 3
console.log(numberOfWays("PPSPSP")); // 1
console.log(numberOfWays("S")); // 0
console.log(numberOfWays("SS")); // 1
console.log(numberOfWays("SSPPSS")); // 3
