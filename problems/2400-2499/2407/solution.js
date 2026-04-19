/*
 * @lc app=leetcode id=2407 lang=javascript
 *
 * [2407] Longest Increasing Subsequence II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function(nums, k) {
  const maxVal = Math.max(...nums);
  let size = 1;
  while (size < maxVal + 1) size <<= 1;

  // Segment tree: tree[node] = max dp value in range
  const tree = new Array(2 * size).fill(0);

  const query = (lo, hi) => {
    // Query max in [lo, hi]
    let res = 0;
    for (lo += size, hi += size; lo <= hi; lo >>= 1, hi >>= 1) {
      if (lo & 1) res = Math.max(res, tree[lo++]);
      if (!(hi & 1)) res = Math.max(res, tree[hi--]);
    }
    return res;
  };

  const update = (pos, val) => {
    pos += size;
    tree[pos] = Math.max(tree[pos], val);
    for (pos >>= 1; pos > 0; pos >>= 1) {
      tree[pos] = Math.max(tree[2 * pos], tree[2 * pos + 1]);
    }
  };

  let result = 0;
  for (const num of nums) {
    const lo = Math.max(1, num - k);
    const hi = num - 1;
    const best = lo <= hi ? query(lo, hi) : 0;
    const newLen = best + 1;
    update(num, newLen);
    result = Math.max(result, newLen);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(lengthOfLIS([4,2,1,4,3,4,5,8,15], 3) === 5);
console.log(lengthOfLIS([7,4,5,1,8,12,4,7], 5) === 4);
console.log(lengthOfLIS([1,5], 1) === 1);
console.log(lengthOfLIS([1], 1) === 1);
console.log(lengthOfLIS([1,2,3,4,5], 1) === 5);
console.log(lengthOfLIS([1,3,5,7,9], 2) === 5);
