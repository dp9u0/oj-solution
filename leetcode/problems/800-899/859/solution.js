/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length !== B.length) {
    return false;
  }
  if (A === B) {
    return new Set(A).size !== A.length;
  }
  let n = A.length - 1;
  let diff = [];
  while (n >= 0) {
    if (A[n] !== B[n]) {
      diff.push(n);
      if (diff.length > 2) {
        return false;
      }
    }
    n--;
  }
  return diff.length === 2 && A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]
};