/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let left = 0,
    length = A.length,
    right = length - 1;
  while (A[left] < A[left + 1]) left++;
  while (A[right - 1] > A[right]) right--;
  return left === right && left > 0 && left < length - 1;
};

/**
// TEST:
console.log(validMountainArray([1, 2]))
console.log(validMountainArray([1, 2, 3]))
console.log(validMountainArray([1, 2, 3, 2, 1]))
console.log(validMountainArray([1, 2, 3, 2, 2]))
console.log(validMountainArray([1, 2, 3, 2, 3]))

*/