/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const digits = String(num).split('');
    const n = digits.length;
    const lastMax = new Array(n);

    lastMax[n - 1] = n - 1;
    for (let i = n - 2; i >= 0; i--) {
        if (digits[i] > digits[lastMax[i + 1]]) {
            lastMax[i] = i;
        } else {
            lastMax[i] = lastMax[i + 1];
        }
    }

    for (let i = 0; i < n; i++) {
        const j = lastMax[i];
        if (digits[j] > digits[i]) {
            [digits[i], digits[j]] = [digits[j], digits[i]];
            return Number(digits.join(''));
        }
    }

    return num;
};
// @lc code=end

// TEST:
console.log(maximumSwap(2736));
// Expected: 7236

console.log(maximumSwap(9973));
// Expected: 9973

console.log(maximumSwap(98368));
// Expected: 98863
