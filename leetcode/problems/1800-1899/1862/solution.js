/*
 * @lc app=leetcode id=1862 lang=javascript
 *
 * [1862] Sum of Floored Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function(nums) {
    const MOD = 1e9 + 7;
    let maxVal = 0;
    for (const v of nums) if (v > maxVal) maxVal = v;

    const cnt = new Int32Array(maxVal + 1);
    for (const v of nums) cnt[v]++;

    const pref = new Int32Array(maxVal + 2);
    for (let i = 1; i <= maxVal; i++) pref[i] = pref[i - 1] + cnt[i];

    let ans = 0;
    for (let d = 1; d <= maxVal; d++) {
        if (cnt[d] === 0) continue;
        let s = 0;
        for (let k = 1; k * d <= maxVal; k++) {
            const l = k * d, r = Math.min((k + 1) * d - 1, maxVal);
            s = (s + k * (pref[r] - pref[l - 1])) % MOD;
        }
        ans = (ans + s * cnt[d]) % MOD;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(sumOfFlooredPairs([2,5,9])); // 10
console.log(sumOfFlooredPairs([7,7,7,7,7,7,7])); // 49
console.log(sumOfFlooredPairs([1])); // 1
console.log(sumOfFlooredPairs([1,2,3])); // 8
console.log(sumOfFlooredPairs([1,1,1])); // 9
console.log(sumOfFlooredPairs([3,6,9])); // 11
