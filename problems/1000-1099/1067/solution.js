/*
 * @lc app=leetcode.cn id=1067 lang=javascript
 *
 * [1067] 范围内的数字计数
 */

// @lc code=start
/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function(d, low, high) {
    const count = (x) => { // occurrences of d in 1..x
        if (x <= 0) return 0;
        let total = 0;
        for (let p = 1; p <= x; p *= 10) {
            const higher = Math.floor(x / (p * 10));
            const cur = Math.floor(x / p) % 10;
            const lower = x % p;
            if (d === 0) {
                // subtract leading-zero block (higher == 0 has no such position)
                if (cur > 0) total += higher * p;
                else total += (higher - 1) * p + lower + 1;
            } else if (cur > d) {
                total += (higher + 1) * p;
            } else if (cur === d) {
                total += higher * p + lower + 1;
            } else {
                total += higher * p;
            }
        }
        return total;
    };
    return count(high) - count(low - 1);
};
// @lc code=end

// TEST:
console.log(digitsCount(1, 1, 13)); // 6
console.log(digitsCount(3, 100, 250)); // 35
console.log(digitsCount(0, 1, 100)); // 11 (10,20,...,90 + 100 twice)
console.log(digitsCount(2, 1, 22)); // 6 (units 2,12,22 + tens 20,21,22)
console.log(digitsCount(9, 1, 9)); // 1
console.log(digitsCount(0, 1, 1)); // 0
