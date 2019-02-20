/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function (A) {
  if (A.length <= 1) {
    return A.length;
  }
  let max = 1;
  let length1 = 1;
  let length2 = 1;
  for (let i = 0; i < A.length; i++) {
    
    if (i % 2 === 0) {
      if (A[i] < A[i + 1]) {
        length1++;
        length2 = 1;
      } else if (A[i] > A[i + 1]) {
        length2++;
        length1 = 1;
      } else {
        length1 = 1;
        length2 = 1;
      }
    } else {
      if (A[i] > A[i + 1]) {
        length1++;
        length2 = 1;
      } else if ((A[i] < A[i + 1])) {
        length2++;
        length1 = 1;
      } else {
        length1 = 1;
        length2 = 1;
      }
    }
    max = Math.max(max, length1, length2)
  }
  return max;
};