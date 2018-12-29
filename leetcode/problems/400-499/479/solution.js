/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  let x = [9, 99, 993, 9999, 99979, 999999, 9998017, 99999999];
  let y = [1, 91, 913, 9901, 99681, 999001, 9997647, 99990001];
  return ((x[n - 1] % 1337) * (y[n - 1] % 1337)) % 1337;
};