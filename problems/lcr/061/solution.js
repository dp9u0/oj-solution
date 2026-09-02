/*
 * @lc app=leetcode.cn id=LCR 061 lang=javascript
 *
 * [LCR 061] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  // 最小堆（元素为 [i, j]，键为 nums1[i] + nums2[j]）
  const heap = [];
  const push = (i, j) => {
    heap.push([i, j]);
    let cur = heap.length - 1;
    while (cur > 0) {
      const parent = (cur - 1) >> 1;
      const sumCur = nums1[heap[cur][0]] + nums2[heap[cur][1]];
      const sumPar = nums1[heap[parent][0]] + nums2[heap[parent][1]];
      if (sumCur >= sumPar) break;
      [heap[cur], heap[parent]] = [heap[parent], heap[cur]];
      cur = parent;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let cur = 0;
      const n = heap.length;
      while (true) {
        const sumCur = nums1[heap[cur][0]] + nums2[heap[cur][1]];
        let smallest = cur;
        const l = cur * 2 + 1;
        const r = l + 1;
        if (l < n) {
          const sumL = nums1[heap[l][0]] + nums2[heap[l][1]];
          if (sumL < sumCur) smallest = l;
        }
        if (r < n) {
          const sumS = nums1[heap[smallest][0]] + nums2[heap[smallest][1]];
          const sumR = nums1[heap[r][0]] + nums2[heap[r][1]];
          if (sumR < sumS) smallest = r;
        }
        if (smallest === cur) break;
        [heap[cur], heap[smallest]] = [heap[smallest], heap[cur]];
        cur = smallest;
      }
    }
    return top;
  };

  const m = nums1.length;
  const n = nums2.length;
  const limit = Math.min(m, k);
  for (let i = 0; i < limit; i++) {
    push(i, 0);
  }

  const result = [];
  while (result.length < k && heap.length > 0) {
    const [i, j] = pop();
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < n) push(i, j + 1);
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(kSmallestPairs([1, 7, 11], [2, 4, 6], 3))); // [[1,2],[1,4],[1,6]]
console.log(JSON.stringify(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))); // [[1,1],[1,1]]
console.log(JSON.stringify(kSmallestPairs([1, 2], [3], 3))); // [[1,3],[2,3]]
console.log(JSON.stringify(kSmallestPairs([1, 2, 4], [1, 2, 3], 4))); // [[1,1],[2,1],[1,2],[2,2]] (和 2,3,3,4)
console.log(JSON.stringify(kSmallestPairs([1], [1], 1))); // [[1,1]]
console.log(JSON.stringify(kSmallestPairs([-10, -8], [-5, 0], 4))); // [[-10,-5],[-8,-5],[-10,0],[-8,0]]
console.log(JSON.stringify(kSmallestPairs([1, 1, 2], [1, 1, 3], 5))); // [[1,1],[1,1],[1,1],[1,1],[2,1]]
