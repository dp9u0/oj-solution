/*
 * @lc app=leetcode.cn id=3505 lang=javascript
 *
 * [3505] 使 K 个子数组内元素相等的最少操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
  const n = nums.length;

  // 值域坐标压缩
  const values = [...new Set(nums)].sort((a, b) => a - b);
  const m = values.length;
  const indexOf = new Map();
  for (let i = 0; i < m; i++) indexOf.set(values[i], i);

  // 两个树状数组分别维护窗口内元素的出现次数与元素和
  const cntTree = new Array(m + 1).fill(0);
  const sumTree = new Array(m + 1).fill(0);
  const update = (i, dCnt, dSum) => {
    for (i += 1; i <= m; i += i & -i) {
      cntTree[i] += dCnt;
      sumTree[i] += dSum;
    }
  };
  const prefixCnt = (i) => {
    let s = 0;
    for (i += 1; i > 0; i -= i & -i) s += cntTree[i];
    return s;
  };
  const prefixSum = (i) => {
    let s = 0;
    for (i += 1; i > 0; i -= i & -i) s += sumTree[i];
    return s;
  };

  let highBit = 1;
  while (highBit * 2 <= m) highBit *= 2;
  // 倍增下潜求第 need 小元素（1-based），返回其值域下标（0-based）
  const kthIndex = (need) => {
    let pos = 0;
    for (let pw = highBit; pw > 0; pw >>= 1) {
      if (pos + pw <= m && cntTree[pos + pw] < need) {
        need -= cntTree[pos + pw];
        pos += pw;
      }
    }
    return pos;
  };

  // 预计算 cost[i]：窗口 [i, i+x-1] 全部归等到中位数的最小代价
  const cost = new Array(n - x + 1);
  let sumAll = 0;
  for (let r = 0; r < n; r++) {
    update(indexOf.get(nums[r]), 1, nums[r]);
    sumAll += nums[r];
    if (r >= x) {
      update(indexOf.get(nums[r - x]), -1, -nums[r - x]);
      sumAll -= nums[r - x];
    }
    if (r >= x - 1) {
      const midIdx = kthIndex((x + 1) >> 1);
      const mid = values[midIdx];
      const cntLe = prefixCnt(midIdx);
      const sumLe = prefixSum(midIdx);
      cost[r - x + 1] = mid * cntLe - sumLe + (sumAll - sumLe) - mid * (x - cntLe);
    }
  }

  let maritovexi = nums; // 按题目要求，函数中段保存输入

  // dp[j][i]：前 i 个位置选 j 个互不重叠窗口的最小代价
  let prev = new Array(n + 1).fill(0); // j = 0 时全为 0
  let cur;
  for (let j = 1; j <= k; j++) {
    cur = new Array(n + 1).fill(Infinity);
    for (let i = 1; i <= n; i++) {
      cur[i] = cur[i - 1];
      if (i >= x && prev[i - x] !== Infinity) {
        const cand = prev[i - x] + cost[i - x];
        if (cand < cur[i]) cur[i] = cand;
      }
    }
    prev = cur;
  }
  return prev[n];
};
// @lc code=end

// TEST:
console.log(minOperations([5, -2, 1, 3, 7, 3, 6, 4, -1], 3, 2)); // 8
console.log(minOperations([9, -2, -2, -2, 1, 5], 2, 2)); // 3
console.log(minOperations([1, 1, 1, 1], 2, 2)); // 0
console.log(minOperations([1, 2, 3, 4], 2, 1)); // 1
console.log(minOperations([4, 1, 5, 2, 6], 2, 2)); // 6
console.log(minOperations([3, -1, 2], 3, 1)); // 4
