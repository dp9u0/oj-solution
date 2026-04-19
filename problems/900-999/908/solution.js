/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let max = min = A[0];
  for (let a of A) {
    max = Math.max(max, a);
    min = Math.min(min, a);
  }
  return Math.max(0, max - min - 2 * K);
};