/*
 * @lc app=leetcode id=3890 lang=javascript
 *
 * [3890] Integers With Multiple Sum of Two Cubes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var findGoodIntegers = function(n) {
    const cubeCount = new Map();
    const maxVal = Math.floor(Math.cbrt(n));

    for (let a = 1; a <= maxVal; a++) {
        for (let b = a; b <= maxVal; b++) {
            const sum = a * a * a + b * b * b;
            if (sum > n) break;
            cubeCount.set(sum, (cubeCount.get(sum) || 0) + 1);
        }
    }

    const result = [];
    for (const [val, count] of cubeCount) {
        if (count >= 2) result.push(val);
    }

    return result.sort((a, b) => a - b);
};
// @lc code=end

// TEST:
console.log(findGoodIntegers(4104)); // [1729, 4104]
console.log(findGoodIntegers(578));  // []
console.log(findGoodIntegers(1729)); // [1729]
