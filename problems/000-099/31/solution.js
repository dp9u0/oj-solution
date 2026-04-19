/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let length = nums.length;
  if (length === 1 || length === 0) {
    return;
  }
  const lastIndex = length - 1;
  let reverseIndex = 0;
  for (let index = lastIndex; index > 0; index--) {
    const element = nums[index];
    if (element > nums[index - 1]) {
      reverseIndex = index;
      break;
    }
  }
  if (reverseIndex === 0) {
    nums.reverse();
    return;
  }
  // 恢复已经排列过的序列的顺序
  let start = reverseIndex;
  let end = lastIndex;
  while (start <= end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  // 交换数字
  let swapIndex = reverseIndex - 1;
  let swap = nums[swapIndex];
  let swapTargetIndex = lastIndex;
  for (let index = lastIndex; index >= reverseIndex; index--) {
    const element = nums[index];
    if (element > swap && element <= nums[swapTargetIndex]) {
      swapTargetIndex = index;
    }
  }

  // console.log({
  //   nums,
  //   swapIndex,
  //   swapTargetIndex
  // })
  nums[swapIndex] = nums[swapTargetIndex];
  nums[swapTargetIndex] = swap;

};
let nums;
nums = [1, 1];
nums = [1, 2, 3];
nums = [1, 2, 3, 4];
nums = [2, 3, 1, 3, 3];
nums = [2, 3, 1];
nums = [2, 1, 2, 2, 2, 2, 2, 1];
console.log(nums)
nextPermutation(nums);
console.log(nums)