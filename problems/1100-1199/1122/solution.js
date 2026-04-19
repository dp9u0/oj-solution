/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let seqMap = {};
  const length = arr2.length;
  arr2.forEach((n, i) => { seqMap[n] = i; });
  return arr1.sort((a, b) => {
    let ai = seqMap[a];
    if (ai === undefined) ai = a + length;
    let bi = seqMap[b];
    if (bi === undefined) bi = b + length;
    return ai - bi;
  })
};

// TEST:
let arr1;
let arr2;
let result;
arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
result = relativeSortArray(arr1, arr2);
console.log(result)
