/*
 * @lc app=leetcode id=3762 lang=javascript
 *
 * [3762] Minimum Operations to Equalize Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var minOperations = function(nums, k, queries) {
  const n = nums.length;

  // Remainder check: prefix-based
  const rem = new Int32Array(n);
  for (let i = 0; i < n; i++) rem[i] = nums[i] % k;
  const prefixSame = new Int32Array(n + 1);
  for (let i = 1; i < n; i++) {
    prefixSame[i + 1] = prefixSame[i] + (rem[i] === rem[i - 1] ? 1 : 0);
  }

  // Coordinate compression
  const vals = [...new Set(nums)].sort((a, b) => a - b);
  const M = vals.length;
  const rankMap = new Map();
  for (let i = 0; i < M; i++) rankMap.set(vals[i], i);

  // Persistent segment tree (chair tree)
  const maxN = (n + 1) * 18;
  const cnt = new Int32Array(maxN);
  const sm = new Float64Array(maxN);
  const lc = new Int32Array(maxN);
  const rc = new Int32Array(maxN);
  let tn = 1; // node 0 is null

  const roots = new Int32Array(n + 1);
  roots[0] = 0;

  const update = (prev, lo, hi, pos, val) => {
    const cur = tn++;
    cnt[cur] = cnt[prev] + 1;
    sm[cur] = sm[prev] + val;
    if (lo === hi) return cur;
    const mid = (lo + hi) >> 1;
    if (pos <= mid) {
      rc[cur] = rc[prev];
      lc[cur] = update(lc[prev], lo, mid, pos, val);
    } else {
      lc[cur] = lc[prev];
      rc[cur] = update(rc[prev], mid + 1, hi, pos, val);
    }
    return cur;
  };

  for (let i = 0; i < n; i++) {
    roots[i + 1] = update(roots[i], 0, M - 1, rankMap.get(nums[i]), nums[i]);
  }

  // k-th smallest in range
  const kth = (cur, prev, lo, hi, k) => {
    if (lo === hi) return lo;
    const mid = (lo + hi) >> 1;
    const leftCnt = cnt[lc[cur]] - cnt[lc[prev]];
    if (k <= leftCnt) return kth(lc[cur], lc[prev], lo, mid, k);
    return kth(rc[cur], rc[prev], mid + 1, hi, k - leftCnt);
  };

  // Prefix query: count and sum of elements with rank <= pos
  const query = (cur, prev, lo, hi, pos) => {
    if (pos < lo) return [0, 0];
    if (hi <= pos) return [cnt[cur] - cnt[prev], sm[cur] - sm[prev]];
    const mid = (lo + hi) >> 1;
    const [cl, sl] = query(lc[cur], lc[prev], lo, mid, pos);
    const [cr, sr] = query(rc[cur], rc[prev], mid + 1, hi, pos);
    return [cl + cr, sl + sr];
  };

  const ans = [];
  for (const [l, r] of queries) {
    // Check if all elements in [l, r] have same remainder mod k
    if (l < r && prefixSame[r + 1] - prefixSame[l + 1] !== r - l) {
      ans.push(-1);
      continue;
    }
    const len = r - l + 1;
    if (len === 1) { ans.push(0); continue; }

    const cur = roots[r + 1], prev = roots[l];
    const medRank = kth(cur, prev, 0, M - 1, (len + 1) >> 1);
    const medVal = vals[medRank];

    const [cntLE, sumLE] = query(cur, prev, 0, M - 1, medRank);
    const totalSum = sm[cur] - sm[prev];
    const cntG = len - cntLE;
    const sumG = totalSum - sumLE;

    const cost = medVal * cntLE - sumLE + sumG - medVal * cntG;
    ans.push(cost / k);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(minOperations([1,4,7], 3, [[0,1],[0,2]])); // [1,2]
console.log(minOperations([1,2,4], 2, [[0,2],[0,0],[1,2]])); // [-1,0,1]
console.log(minOperations([5], 1, [[0,0]])); // [0]
console.log(minOperations([1,3,5,7], 2, [[0,3]])); // all rem 1, median=3, cost=(3-1+(5-3)+(7-3))/2=8/2=4
console.log(minOperations([2,4,6,8], 2, [[0,3]])); // all rem 0, median=4 or 5, cost=(4-2+(6-4)+(8-4))/2=8/2=4
console.log(minOperations([10,10,10], 5, [[0,2]])); // all same, cost=0
