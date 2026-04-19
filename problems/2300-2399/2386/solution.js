/*
 * @lc app=leetcode id=2386 lang=javascript
 *
 * [2386] Find the K-Sum of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
  let maxSum = 0;
  for (const x of nums) {
    if (x > 0) maxSum += x;
  }
  const absSorted = nums.map(x => Math.abs(x)).sort((a, b) => a - b);
  const n = absSorted.length;

  if (k === 1) return maxSum;

  // Min-heap: [sum, nextIndex]
  // Using "replace" technique to enumerate subsets without duplicates
  // (sum, i): sum is current loss, last included was at index i-1
  // Expand: (sum + a[i], i+1) — add a[i]
  //         (sum - a[i-1] + a[i], i+1) — replace a[i-1] with a[i]
  const heap = [];
  const push = (sum, idx) => {
    heap.push([sum, idx]);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] > heap[i][0]) { [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
      else break;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let s = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
        if (s !== i) { [heap[s], heap[i]] = [heap[i], heap[s]]; i = s; }
        else break;
      }
    }
    return top;
  };

  // Start: include the smallest absolute value
  push(absSorted[0], 1);

  let result = 0;
  // k-th smallest loss: 1st is 0 (empty), then k-1 pops from heap
  for (let i = 0; i < k - 1; i++) {
    const [sum, idx] = pop();
    result = sum;
    if (idx < n) {
      // Add a[idx]
      push(sum + absSorted[idx], idx + 1);
      // Replace a[idx-1] with a[idx]
      push(sum - absSorted[idx - 1] + absSorted[idx], idx + 1);
    }
  }

  return maxSum - result;
};
// @lc code=end

// TEST:
console.log(kSum([2, 4, -2], 5)); // 2
console.log(kSum([1, -2, 3, 4, -10, 12], 16)); // 10
