/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let solutions = [];
  nums.sort((a, b) => a - b);
  let length = nums.length;
  for (let index1 = 0; index1 < length; index1++) {
    const first = nums[index1];
    if (index1 && first === nums[index1 - 1]) {
      continue;
    }
    for (let index2 = index1 + 1; index2 < length; index2++) {
      const second = nums[index2];
      if ((index2 !== index1 + 1) && second === nums[index2 - 1]) {
        continue;
      }
      let targetSum = target - (first + second);
      let start = index2 + 1;
      let end = length - 1;
      while (start < end) {
        let third = nums[start];
        let forth = nums[end];
        let sum = third + forth;
        if (sum > targetSum) {
          end--;
        } else if (sum < targetSum) {
          start++;
        } else {
          solutions.push([first, second, third, forth]);
          // 跳过相同的数字
          while (third === nums[start + 1]) start++;
          // 跳过相同的数字
          while (forth === nums[end - 1]) end--;
          start++;
          end--;
        }
      }
    }
  }
  return solutions;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));