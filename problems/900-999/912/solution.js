/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1, (a, b) => a > b);
  return nums
};

/**
 * merge sort inplace sort
 * @param {*[]} A source array
 * @param {number} li merge sort start
 * @param {number} hi merge sort end
 * @param {(a,b)=> boolean} disordered The function used to determine if two element is disordered.
 */
function mergeSort(A, li, hi, disordered) {
  if (li < hi) {
    let mid = ~~((hi + li) / 2);
    mergeSort(A, li, mid, disordered);
    mergeSort(A, mid + 1, hi, disordered);
    // merge tow array
    merge(A, li, mid, hi, disordered);
  }
}

/**
 * merge sort inplace sort
 * @param {*[]} A source array
 * @param {number} li merge sort start
 * @param {number} mid mid of merge array
 * @param {number} hi merge sort end
 * @param {(a,b)=> boolean} disordered The function used to determine if two element is disordered.
 */
function merge(A, li, mid, hi, disordered) {
  let left = A.slice(li, mid + 1);
  let right = A.slice(mid + 1, hi + 1);
  for (let i = li; i <= hi; i++) {
    A[i] = (!left.length || disordered(left[0], right[0])) ? right.shift() : left.shift();
  }
}


// TEST: 
let nums;
let results;
nums = [5, 2, 3, 1]
results = sortArray(nums)
console.log(results)


nums = [5, 1, 1, 2, 0, 0]
results = sortArray(nums)
console.log(results)