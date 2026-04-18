/*
 * @lc app=leetcode id=1835 lang=javascript
 *
 * [1835] Find XOR Sum of All Pairs Bitwise AND
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
    const xor1 = arr1.reduce((a, b) => a ^ b, 0);
    const xor2 = arr2.reduce((a, b) => a ^ b, 0);
    return xor1 & xor2;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(getXORSum, [[1,2,3], [6,5]], 0);
test(getXORSum, [[12], [4]], 4);
test(getXORSum, [[1,2], [3,4]], 3);
test(getXORSum, [[0], [0]], 0);
test(getXORSum, [[7], [7]], 7);
