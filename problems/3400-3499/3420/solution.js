/*
 * @lc app=leetcode.cn id=3420 lang=javascript
 *
 * [3420] 统计 K 次操作以内得到非递减子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
  const n = nums.length;
  // 贪心分层栈：层值为严格递增的前缀最大值记录，底层在数组末尾，顶层由 top 指针定位
  // 每层 [v, c, s]：层值 v、元素个数 c、原始值之和 s；总代价 = Σ (v*c - s)
  const st = [];
  let top = 0;
  let cost = 0;
  let r = n - 1;
  let ans = 0;
  for (let l = n - 1; l >= 0; l--) {
    const M = nums[l];
    // 前置 nums[l]：吸收底部所有层值 <= M 的层（它们被抬升到 M）
    let c = 1;
    let s = M;
    while (st.length > top && st[st.length - 1][0] <= M) {
      const b = st.pop();
      cost += b[1] * (M - b[0]);
      c += b[1];
      s += b[2];
    }
    st.push([M, c, s]);
    // cost(l, r) > k 时从右侧收缩（由单调性，r 全程只减不增）
    while (cost > k) {
      const t = st[top];
      cost -= t[0] - nums[r];
      t[1] -= 1;
      t[2] -= nums[r];
      if (t[1] === 0) top += 1;
      r -= 1;
    }
    ans += r - l + 1;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countNonDecreasingSubarrays([6, 3, 1, 2, 4, 4], 7)); // 17
console.log(countNonDecreasingSubarrays([6, 3, 1, 3, 6], 4)); // 12
console.log(countNonDecreasingSubarrays([5, 4, 3, 2, 1], 3)); // 12
console.log(countNonDecreasingSubarrays([5, 4, 3, 2, 1], 100)); // 15
console.log(countNonDecreasingSubarrays([1, 2, 3, 4, 5], 1)); // 15
console.log(countNonDecreasingSubarrays([1], 1)); // 1

// 随机对拍（本地验证用）
function bruteForce(nums, k) {
  const n = nums.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    cnt += 1;
    let prev = nums[i];
    let cost = 0;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < prev) cost += prev - nums[j];
      else prev = nums[j];
      if (cost > k) break;
      cnt += 1;
    }
  }
  return cnt;
}
(function randomCheck() {
  for (let iter = 0; iter < 200; iter++) {
    const n = 1 + Math.floor(Math.random() * 9);
    const nums = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 10));
    const k = 1 + Math.floor(Math.random() * 30);
    const a = countNonDecreasingSubarrays(nums, k);
    const b = bruteForce(nums, k);
    if (a !== b) {
      console.log(`MISMATCH nums=${JSON.stringify(nums)} k=${k} got=${a} want=${b}`);
      return;
    }
  }
  console.log('random check: all passed');
})();
