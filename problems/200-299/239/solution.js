/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [0]; // 构建单调递减队列
  for (let i = 0; i < k; i++) {
    // 构建初始单调递减队列
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  const results = []
  for (let i = k - 1; i < nums.length; i++) {
    // 添加新元素 构建单调递减队列
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    // 移除窗口左侧的索引  ... | i-k | ... | i |
    while (queue[0] <= (i - k)) {
      queue.shift();
    }
    // 当前窗口最大值为递减序列第一个数字
    results.push(nums[queue[0]]);
  }
  return results;
}

// TEST:
let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k))

nums = [1], k = 1
console.log(maxSlidingWindow(nums, k))

nums = [9, 11], k = 2
console.log(maxSlidingWindow(nums, k))

nums = [1, -1], k = 1
console.log(maxSlidingWindow(nums, k))

nums = [4, -2], k = 2
console.log(maxSlidingWindow(nums, k))

nums = [2, 4, 7], k = 2
console.log(maxSlidingWindow(nums, k))