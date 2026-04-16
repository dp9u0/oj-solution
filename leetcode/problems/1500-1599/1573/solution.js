/*
 * @lc app=leetcode id=1573 lang=javascript
 *
 * [1573] Number of Ways to Split a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    const MOD = 1e9 + 7;
    let ones = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones.push(i);
    }
    let total = ones.length;

    if (total % 3 !== 0) return 0;
    if (total === 0) {
        let n = s.length;
        return ((n - 1) * (n - 2) / 2) % MOD;
    }

    let target = total / 3;
    // zeros between group1-end and group2-start: ones[target] - ones[target-1]
    // zeros between group2-end and group3-start: ones[2*target] - ones[2*target-1]
    let ways1 = ones[target] - ones[target - 1];
    let ways2 = ones[2 * target] - ones[2 * target - 1];
    return (ways1 * ways2) % MOD;
};
// @lc code=end

// TEST:
console.log(numWays('10101')); // 4
console.log(numWays('1001')); // 0
console.log(numWays('0000')); // 3
console.log(numWays('100100010100110')); // 12
