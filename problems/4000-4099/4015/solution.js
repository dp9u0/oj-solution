/*
 * @lc app=leetcode id=4015 lang=javascript
 *
 * [4015] Weighted Sum of a Tree
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {number[]} nums
 * @return {number}
 */
var weightedSum = function(parent, nums) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) children[parent[i]].push(i);

  const depth = new Array(n).fill(0);
  depth[0] = 1;
  const queue = [0];
  let h = 1;
  for (let qi = 0; qi < queue.length; qi++) {
    const node = queue[qi];
    if (depth[node] > h) h = depth[node];
    for (const child of children[node]) {
      depth[child] = depth[node] + 1;
      queue.push(child);
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i] * (h - depth[i] + 1);
  return sum;
};
// @lc code=end

// TEST:
console.log(weightedSum([-1, 0, 0, 0, 2, 2], [5, 2, 3, 1, 4, 6]) === 37);
console.log(weightedSum([-1, 0, 1, 2], [1, 2, 3, 4]) === 20);
console.log(weightedSum([-1], [7]) === 7);
console.log(weightedSum([-1, 0, 0], [1, 2, 3]) === 7);
console.log(weightedSum([-1, 0, 1, 2, 3], [1, 1, 1, 1, 1]) === 15);
