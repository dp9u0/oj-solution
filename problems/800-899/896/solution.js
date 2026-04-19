/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = dec = true;
  for (let i = 1; i < A.length; ++i) {
    inc &= A[i - 1] <= A[i];
    dec &= A[i - 1] >= A[i];
    // 提前判断 终止循环
    if (!inc && !dec) {
      return false;
    }
  }
  return inc || dec;
};