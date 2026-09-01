/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let left = 0,
    right = A.length - 1;
  while (left < right) {
    if (A[left] % 2 === 0) {
      left++;
    } else if (A[right] % 2 === 1) {
      right--;
    } else {
      [A[left], A[right]] = [A[right], A[left]];
      left++;
      right--;
    }
  }
  return A;
};