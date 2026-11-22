/*
 * @lc app=leetcode.cn id=2533 lang=javascript
 *
 * [2533] 好二进制字符串的数量
 */

// @lc code=start
/**
 * @param {number} minLength
 * @param {number} maxLength
 * @param {number} oneGroup
 * @param {number} zeroGroup
 * @return {number}
 */
var goodBinaryStrings = function(minLength, maxLength, oneGroup, zeroGroup) {
    const MOD = 1000000007;
    const acc0 = new Int32Array(zeroGroup > maxLength ? maxLength + 1 : maxLength + 1);
    const acc1 = new Int32Array(oneGroup > maxLength ? maxLength + 1 : maxLength + 1);
    acc0[0] = 1; // empty start can begin a 1-block
    acc1[0] = 1; // empty start can begin a 0-block
    const dp0 = new Int32Array(maxLength + 1);
    const dp1 = new Int32Array(maxLength + 1);
    for (let j = 1; j <= maxLength; j++) {
        dp1[j] = acc0[j % oneGroup];
        dp0[j] = acc1[j % zeroGroup];
        acc0[j % oneGroup] = (acc0[j % oneGroup] + dp0[j]) % MOD;
        acc1[j % zeroGroup] = (acc1[j % zeroGroup] + dp1[j]) % MOD;
    }
    let ans = 0;
    for (let j = minLength; j <= maxLength; j++) {
        ans = (ans + dp0[j] + dp1[j]) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(goodBinaryStrings(2, 3, 1, 2)); // 5
console.log(goodBinaryStrings(4, 4, 4, 3)); // 1
console.log(goodBinaryStrings(1, 1, 1, 1)); // 2 ("0","1")
console.log(goodBinaryStrings(1, 5, 2, 3)); // 5
console.log(goodBinaryStrings(5, 5, 5, 5)); // 2 ("00000","11111")
