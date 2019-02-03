/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let odd = 0,
    even = 0;
  A.forEach((el, index) => {
    if (index % 2 === 0) { //even
      while (A[even] % 2 !== 0) {
        even++;
      }
      [A[even], A[index]] = [A[index], A[even]];
      even++;
    } else { // odd
      while (A[odd] % 2 !== 1) {
        odd++;
      }
      [A[odd], A[index]] = [A[index], A[odd]];
      odd++;
    }
  });
  return A;
};