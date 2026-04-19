/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let i = 0;
  A.reverse();
  while (K) {
    K += (A[i] || 0);
    A[i] = K % 10;
    K = ~~(K / 10);
    i++;
  }
  return A.reverse();
};

/**
// TEST:
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))
*/