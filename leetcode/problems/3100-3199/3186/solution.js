/*
 * @lc app=leetcode id=3186 lang=javascript
 *
 * [3186] Maximum Total Damage With Spell Casting
 */

// @lc code=start
/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    power.sort((a, b) => a - b);
    const vals = [];
    const sums = [];
    let i = 0;
    while (i < power.length) {
        let j = i;
        let sum = 0;
        while (j < power.length && power[j] === power[i]) {
            sum += power[j];
            j++;
        }
        vals.push(power[i]);
        sums.push(sum);
        i = j;
    }

    const m = vals.length;
    const dp = new Array(m + 1).fill(0);
    dp[1] = sums[0];

    for (let i = 1; i < m; i++) {
        let j = i - 1;
        while (j >= 0 && vals[j] >= vals[i] - 2) j--;
        const take = (j >= 0 ? dp[j + 1] : 0) + sums[i];
        dp[i + 1] = Math.max(dp[i], take);
    }

    return dp[m];
};
// @lc code=end

// TEST:
console.log(maximumTotalDamage([1,1,3,4]));   // 6
console.log(maximumTotalDamage([7,1,6,6]));    // 13
console.log(maximumTotalDamage([5,9,2,10]));   // 17
