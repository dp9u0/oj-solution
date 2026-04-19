/*
 * @lc app=leetcode id=3525 lang=javascript
 *
 * [3525] Find X Value of Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
  const n = nums.length;
  let sz = 1;
  while (sz < n) sz <<= 1;

  const tot = new Int32Array(2 * sz).fill(1);
  const cnt = new Array(2 * sz);
  for (let i = 0; i < 2 * sz; i++) cnt[i] = new Int32Array(k);

  for (let i = 0; i < n; i++) {
    const r = nums[i] % k;
    tot[sz + i] = r;
    cnt[sz + i][r] = 1;
  }

  const pull = (i) => {
    const l = 2 * i, r = 2 * i + 1;
    const lt = tot[l], lc = cnt[l], rc = cnt[r];
    tot[i] = (lt * tot[r]) % k;
    const dc = cnt[i];
    for (let x = 0; x < k; x++) dc[x] = lc[x];
    for (let j = 0; j < k; j++) dc[(lt * j) % k] += rc[j];
  };

  for (let i = sz - 1; i >= 1; i--) pull(i);

  const update = (pos, val) => {
    const r = val % k;
    pos += sz;
    tot[pos] = r;
    cnt[pos].fill(0);
    cnt[pos][r] = 1;
    for (pos >>= 1; pos >= 1; pos >>= 1) pull(pos);
  };

  // Pre-allocated buffers for query
  const lc = new Int32Array(k);
  const rc = new Int32Array(k);
  const tmp = new Int32Array(k);

  const query = (l, r) => {
    l += sz; r += sz;
    let lt = 1, rt = 1;
    lc.fill(0); rc.fill(0);

    while (l <= r) {
      if (l & 1) {
        const nt = tot[l], nc = cnt[l];
        tmp.fill(0);
        for (let x = 0; x < k; x++) tmp[x] = lc[x];
        for (let j = 0; j < k; j++) tmp[(lt * j) % k] += nc[j];
        lt = (lt * nt) % k;
        lc.set(tmp);
        l++;
      }
      if (!(r & 1)) {
        const nt = tot[r], nc = cnt[r];
        tmp.fill(0);
        for (let x = 0; x < k; x++) tmp[x] = nc[x];
        for (let j = 0; j < k; j++) tmp[(nt * j) % k] += rc[j];
        rt = (nt * rt) % k;
        rc.set(tmp);
        r--;
      }
      l >>= 1; r >>= 1;
    }

    // Final combine left + right
    tmp.fill(0);
    for (let x = 0; x < k; x++) tmp[x] = lc[x];
    for (let j = 0; j < k; j++) tmp[(lt * j) % k] += rc[j];
  };

  const ans = [];
  for (const [idx, val, start, x] of queries) {
    update(idx, val);
    query(start, n - 1);
    ans.push(tmp[x]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(resultArray([1,2,3,4,5], 3, [[2,2,0,2],[3,3,3,0],[0,1,0,1]])); // [2,2,2]
console.log(resultArray([1,2,4,8,16,32], 4, [[0,2,0,2],[0,2,0,1]])); // [1,0]
console.log(resultArray([1,1,2,1,1], 2, [[2,1,0,1]])); // [5]
