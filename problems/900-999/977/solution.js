/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let result = new Array(A.length),
    i = 0,
    j = A.length - 1;
  while (j >= i) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[j - i] = A[i] * A[i++];
    } else {
      result[j - i] = A[j] * A[j--];
    }
  }
  return result;
};