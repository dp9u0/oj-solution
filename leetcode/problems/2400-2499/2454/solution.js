/*
 * @lc app=leetcode id=2454 lang=javascript
 *
 * [2454] Next Greater Element IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const s1 = [];
  const s2 = [];

  for (let i = 0; i < n; i++) {
    // s2: elements that found their 1st greater, now finding 2nd
    while (s2.length && nums[s2[s2.length - 1]] < nums[i]) {
      ans[s2.pop()] = nums[i];
    }

    // s1: elements finding their 1st greater
    const temp = [];
    while (s1.length && nums[s1[s1.length - 1]] < nums[i]) {
      temp.push(s1.pop());
    }

    // Push to s2 in reverse to maintain decreasing order
    for (let j = temp.length - 1; j >= 0; j--) {
      s2.push(temp[j]);
    }

    s1.push(i);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(secondGreaterElement([2, 4, 0, 9, 6])); // [9,6,6,-1,-1]
console.log(secondGreaterElement([3, 3])); // [-1,-1]
console.log(secondGreaterElement([1, 2, 4, 3])); // [4,3,-1,-1]
console.log(secondGreaterElement([1, 2, 3, 4, 5])); // [3,4,5,-1,-1]
console.log(secondGreaterElement([1])); // [-1]
console.log(secondGreaterElement([3, 3, 5, 4])); // [4,4,-1,-1]
