/*
 * @lc app=leetcode id=1987 lang=javascript
 *
 * [1987] Number of Unique Good Subsequences
 */

// @lc code=start
/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
    const MOD = 1e9 + 7;
    let ends0 = 0, ends1 = 0;
    let has0 = false;

    for (const c of binary) {
        if (c === '0') {
            ends0 = (ends0 + ends1) % MOD;
            has0 = true;
        } else {
            ends1 = (ends0 + ends1 + 1) % MOD;
        }
    }

    let result = (ends0 + ends1) % MOD;
    if (has0) result = (result + 1) % MOD;
    return result;
};
// @lc code=end

// TEST:
console.log(numberOfUniqueGoodSubsequences('001')); // 2
console.log(numberOfUniqueGoodSubsequences('11')); // 2
console.log(numberOfUniqueGoodSubsequences('101')); // 5
console.log(numberOfUniqueGoodSubsequences('0')); // 1
console.log(numberOfUniqueGoodSubsequences('1')); // 1