/*
 * @lc app=leetcode id=3015 lang=javascript
 *
 * [3015] Count the Number of Houses at a Certain Distance I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function(n, x, y) {
    const result = new Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const direct = j - i;
            const viaShortcut = Math.min(
                Math.abs(i - x) + 1 + Math.abs(j - y),
                Math.abs(i - y) + 1 + Math.abs(j - x)
            );
            const dist = Math.min(direct, viaShortcut);
            result[dist - 1] += 2; // (i, j) and (j, i)
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countOfPairs(3, 1, 3))); // [6,0,0]
console.log(JSON.stringify(countOfPairs(5, 2, 4))); // [10,8,2,0,0]
console.log(JSON.stringify(countOfPairs(4, 1, 1))); // [6,4,2,0]
console.log(JSON.stringify(countOfPairs(2, 1, 2))); // [2,0]
console.log(JSON.stringify(countOfPairs(6, 1, 5))); // expected: compute manually
