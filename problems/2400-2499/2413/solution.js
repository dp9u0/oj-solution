/*
 * @lc app=leetcode id=2413 lang=javascript
 *
 * [2413] Smallest Even Multiple
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n % 2 === 0 ? n : 2 * n;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(smallestEvenMultiple, [5], 10);
test(smallestEvenMultiple, [6], 6);
test(smallestEvenMultiple, [1], 2);
test(smallestEvenMultiple, [2], 2);
test(smallestEvenMultiple, [150], 150);
