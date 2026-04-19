/*
 * @lc app=leetcode id=2749 lang=javascript
 *
 * [2749] Minimum Operations to Make the Integer Zero
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    for (let k = 1; k <= 60; k++) {
        const target = num1 - k * num2;
        if (target > 0 && target >= k && popcount(target) <= k) {
            return k;
        }
    }
    return -1;
};

const popcount = (n) => {
    let c = 0;
    while (n > 0) { c += n & 1; n = Math.floor(n / 2); }
    return c;
};
// @lc code=end

// TEST:
console.log(makeTheIntegerZero(3, -2));     // 3
console.log(makeTheIntegerZero(5, 7));       // -1
console.log(makeTheIntegerZero(10, 0));      // popcount(10)=2
console.log(makeTheIntegerZero(1, 1));       // -1 (target=1-1=0 not > 0)
console.log(makeTheIntegerZero(100, 5));     // 4
