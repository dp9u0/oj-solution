/*
 * @lc app=leetcode id=3660 lang=javascript
 *
 * [3660] Jump Game IX
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
  const n = nums.length;
  const prefMax = new Array(n);
  prefMax[0] = nums[0];
  for (let i = 1; i < n; i++) prefMax[i] = Math.max(prefMax[i - 1], nums[i]);

  const allVals = [...new Set([...nums, ...prefMax])].sort((a, b) => a - b);
  const rank = new Map();
  allVals.forEach((v, i) => rank.set(v, i + 1));
  const sz = allVals.length;
  const tree = new Int32Array(4 * sz);

  const query = (node, lo, hi, qlo, qhi) => {
    if (qlo > hi || qhi < lo) return -1;
    if (qlo <= lo && hi <= qhi) return tree[node];
    const mid = (lo + hi) >> 1;
    return Math.max(query(node * 2, lo, mid, qlo, qhi), query(node * 2 + 1, mid + 1, hi, qlo, qhi));
  };

  const update = (node, lo, hi, pos, val) => {
    if (lo === hi) { tree[node] = Math.max(tree[node], val); return; }
    const mid = (lo + hi) >> 1;
    if (pos <= mid) update(node * 2, lo, mid, pos, val);
    else update(node * 2 + 1, mid + 1, hi, pos, val);
    tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
  };

  const ans = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    const r = rank.get(prefMax[i]);
    const maxRight = r > 1 ? query(1, 1, sz, 1, r - 1) : -1;
    ans[i] = Math.max(prefMax[i], maxRight);
    update(1, 1, sz, rank.get(nums[i]), ans[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxValue([2, 1, 3]))); // [2,2,3]
console.log(JSON.stringify(maxValue([2, 3, 1]))); // [3,3,3]
console.log(JSON.stringify(maxValue([30, 21, 5, 35, 24]))); // [35,35,35,35,35]
console.log(JSON.stringify(maxValue([1]))); // [1]
console.log(JSON.stringify(maxValue([3, 2, 1]))); // [3,3,3]
