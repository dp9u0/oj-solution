/*
 * @lc app=leetcode id=632 lang=javascript
 *
 * [632] Smallest Range Covering Elements from K Lists
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const k = nums.length;
  // 最小堆，元素为 [值, 列表索引, 元素索引]
  const heap = [];

  const push = (item) => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (heap[parent][0] <= heap[i][0]) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  };

  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let smallest = i;
        if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
        if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
        if (smallest === i) break;
        [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
        i = smallest;
      }
    }
    return top;
  };

  // 初始化：每个列表的首元素入堆，同时维护堆中最大值
  let maxVal = -Infinity;
  for (let i = 0; i < k; i++) {
    push([nums[i][0], i, 0]);
    if (nums[i][0] > maxVal) maxVal = nums[i][0];
  }

  let bestA = 0;
  let bestB = Infinity;

  // 多路归并：弹出全局最小值，范围 [minVal, maxVal] 覆盖所有列表
  while (true) {
    const [minVal, li, ei] = pop();
    if (maxVal - minVal < bestB - bestA) {
      bestA = minVal;
      bestB = maxVal;
    }
    // 该列表耗尽，终止
    if (ei + 1 === nums[li].length) break;
    const nextVal = nums[li][ei + 1];
    if (nextVal > maxVal) maxVal = nextVal;
    push([nextVal, li, ei + 1]);
  }

  return [bestA, bestB];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]])) === JSON.stringify([20, 24]));
console.log(JSON.stringify(smallestRange([[1, 2, 3], [1, 2, 3], [1, 2, 3]])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(smallestRange([[1]])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(smallestRange([[1, 2], [3, 4], [5, 6]])) === JSON.stringify([2, 5]));
console.log(JSON.stringify(smallestRange([[-5, -3], [1, 10]])) === JSON.stringify([-3, 1]));
console.log(JSON.stringify(smallestRange([[10, 20], [30, 40]])) === JSON.stringify([20, 30]));
