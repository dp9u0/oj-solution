/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargestv2 = function (nums, k) {

  /**
   * @param {number[]} nums
   * @param {number} start
   * @param {number} end
   * @param {number} kth
   * @return {number}
   */
  const quickSelect = (nums, start, end, kth) => {
    let i = j = start;
    for (; j < end; j++) {
      if (nums[j] <= nums[end]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[end]] = [nums[end], nums[i]];
    let count = end - i + 1;
    if (count === kth) {
      return nums[i];
    }
    return count > kth ? quickSelect(nums, i + 1, end, kth) : quickSelect(nums, start, i - 1, kth - count);
  }
  return quickSelect(nums, 0, nums.length - 1, k);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const count = (target, nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) count++
    }
    return count;
  }
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    if (count(mid, nums) >= k) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};