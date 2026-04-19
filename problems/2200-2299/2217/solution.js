/*
 * @lc app=leetcode id=2217 lang=javascript
 *
 * [2217] Find Palindrome With Fixed Length
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
    const half = Math.ceil(intLength / 2);
    const base = Math.pow(10, half - 1);
    const maxVal = Math.pow(10, half) - 1;

    return queries.map(q => {
        const prefix = base + q - 1;
        if (prefix > maxVal) return -1;
        const ps = String(prefix);
        const rev = ps.split('').reverse().slice(intLength % 2).join('');
        return Number(ps + rev);
    });
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', JSON.stringify(result), JSON.stringify(result) === JSON.stringify(expected) ? 'OK' : 'FAIL expected ' + JSON.stringify(expected));
};
test(kthPalindrome, [[1,2,3,4,5,90], 3], [101,111,121,131,141,999]);
test(kthPalindrome, [[2,4,6], 4], [1111,1331,1551]);
test(kthPalindrome, [[1], 1], [1]);
test(kthPalindrome, [[1,2,3], 2], [11,22,33]);
test(kthPalindrome, [[1000000000], 15], [-1]);
