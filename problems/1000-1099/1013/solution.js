/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const map = {}
  let sum = 0;
  arr.forEach((n, i) => { sum += n; });
  if (sum % 3 !== 0) return false;
  let partSum = 0;
  let count = 0;
  arr.forEach((n) => {
    partSum += n;
    if (partSum === (sum / 3)) {
      partSum = 0;
      count++;
    }
  });
  return count >= 3;
};


// TEST:
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]))
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]))
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))
console.log(canThreePartsEqualSum([6, 1, 1, 13, -1, 0, -10, 20]))
console.log(canThreePartsEqualSum([10, -10, 10, -10, 10, -10, 10, -10]))
console.log(canThreePartsEqualSum([29, 31, 27, -10, -67, 22, 15, -1, -16, -29, 59, -18, 48]))
console.log(canThreePartsEqualSum([1, -1, 1, -1]))