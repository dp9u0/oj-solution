/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let result = 0;
  for (let j = 0; j < A[0].length; j++) {
    for (let i = 1; i < A.length; i++) {
      if (A[i].charAt(j) < A[i - 1].charAt(j)) {
        result++;
        break;
      }
    }
  }
  return result;
};