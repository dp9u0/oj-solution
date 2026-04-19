/*
 * @lc app=leetcode id=1053 lang=javascript
 *
 * [1053] Previous Permutation With One Swap
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
  const n = arr.length;

  // Find rightmost descent: arr[i] > arr[i+1]
  let i = n - 2;
  while (i >= 0 && arr[i] <= arr[i + 1]) i--;

  if (i < 0) return arr;

  // Find largest value < arr[i] in arr[i+1..n-1]
  let bestJ = -1, bestVal = -1;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[i] && arr[j] > bestVal) {
      bestVal = arr[j];
      bestJ = j;
    }
  }

  [arr[i], arr[bestJ]] = [arr[bestJ], arr[i]];
  return arr;
};
// @lc code=end

// TEST:
console.log(prevPermOpt1([3,2,1])); // [3,1,2]
console.log(prevPermOpt1([1,1,5])); // [1,1,5]
console.log(prevPermOpt1([1,9,4,6,7])); // [1,7,4,6,9]
console.log(prevPermOpt1([1,2,3])); // [1,2,3] - already smallest
console.log(prevPermOpt1([3,1,1,3])); // [1,3,1,3]
