/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    const MOD = 1e9 + 7;
    const freq = new Array(101).fill(0);
    for (const x of arr) freq[x]++;
    let res = 0;
    for (let a = 0; a <= 100; a++) {
        if (!freq[a]) continue;
        for (let b = a; b <= 100; b++) {
            if (!freq[b]) continue;
            const c = target - a - b;
            if (c < b || c > 100 || !freq[c]) continue;
            if (a === b && b === c) {
                res = (res + freq[a] * (freq[a] - 1) * (freq[a] - 2) / 6) % MOD;
            } else if (a === b) {
                res = (res + freq[a] * (freq[a] - 1) / 2 * freq[c]) % MOD;
            } else if (b === c) {
                res = (res + freq[a] * freq[b] * (freq[b] - 1) / 2) % MOD;
            } else {
                res = (res + freq[a] * freq[b] * freq[c]) % MOD;
            }
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8)); // 20
console.log(threeSumMulti([1,1,2,2,2,2], 5)); // 12
console.log(threeSumMulti([2,1,3], 6)); // 1
