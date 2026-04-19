/*
 * @lc app=leetcode id=3069 lang=javascript
 *
 * [3069] Distribute Elements Into Two Arrays I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
  const arr1 = [nums[0]], arr2 = [nums[1]];
  for (let i = 2; i < nums.length; i++) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }
  return arr1.concat(arr2);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(resultArray([2, 1, 3]))); // [2,3,1]
console.log(JSON.stringify(resultArray([5, 4, 3, 8]))); // [5,3,4,8]
console.log(JSON.stringify(resultArray([1, 2, 3, 4, 5]))); // [1,3,5,2,4]
console.log(JSON.stringify(resultArray([3, 1, 2]))); // [3,2,1]
console.log(JSON.stringify(resultArray([10, 1, 2, 3, 4, 5]))); // [10,2,4,1,3,5]
