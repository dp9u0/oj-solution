/*
 * @lc app=leetcode id=2382 lang=javascript
 *
 * [2382] Maximum Segment Sum After Removals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
var maximumSegmentSum = function(nums, removeQueries) {
  const n = nums.length;
  const parent = new Array(n).fill(-1); // -1 means not active
  const sum = new Array(n).fill(0);

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };

  let maxSum = 0;
  const answer = new Array(n).fill(0);

  // Process in reverse: start from all removed, add back one by one
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = maxSum;

    const pos = removeQueries[i];
    parent[pos] = pos;
    sum[pos] = nums[pos];

    // Merge with left neighbor if active
    if (pos > 0 && parent[pos - 1] !== -1) {
      const leftRoot = find(pos - 1);
      const curRoot = find(pos);
      parent[leftRoot] = curRoot;
      sum[curRoot] += sum[leftRoot];
    }

    // Merge with right neighbor if active
    if (pos < n - 1 && parent[pos + 1] !== -1) {
      const rightRoot = find(pos + 1);
      const curRoot = find(pos);
      parent[rightRoot] = curRoot;
      sum[curRoot] += sum[rightRoot];
    }

    maxSum = Math.max(maxSum, sum[find(pos)]);
  }

  return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumSegmentSum([1,2,5,6,1], [0,3,2,4,1])) === JSON.stringify([14,7,2,2,0]));
console.log(JSON.stringify(maximumSegmentSum([3,2,11,1], [3,2,1,0])) === JSON.stringify([16,5,3,0]));
console.log(JSON.stringify(maximumSegmentSum([1], [0])) === JSON.stringify([0]));
console.log(JSON.stringify(maximumSegmentSum([5,1], [1,0])) === JSON.stringify([5,0]));
console.log(JSON.stringify(maximumSegmentSum([1,2,3], [2,1,0])) === JSON.stringify([3,1,0]));
