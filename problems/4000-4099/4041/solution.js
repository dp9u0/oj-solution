/*
 * @lc app=leetcode id=4041 lang=javascript
 *
 * [4041] Minimum Operations to Form Subset Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} sum
 * @return {number}
 */
var minOperations = function(nums, sum) {
  const INF = Infinity;
  let dp = new Array(sum + 1).fill(INF);
  dp[0] = 0;

  for (const x of nums) {
    // 枚举单元素候选值：先除 d 次，再乘 m 次 → floor(x/2^d) * 2^m，代价 d+m
    const cost = new Map(); // value -> min cost
    let v = x;
    let d = 0;
    while (v >= 1) {
      let w = v;
      let m = 0;
      while (w <= sum) {
        const c = d + m;
        if (!cost.has(w) || cost.get(w) > c) cost.set(w, c);
        w *= 2;
        m++;
      }
      v = Math.floor(v / 2);
      d++;
    }

    // 分组背包：该元素不选，或选某个候选值
    const ndp = dp.slice();
    for (let s = 0; s <= sum; s++) {
      if (dp[s] === INF) continue;
      const base = dp[s];
      for (const [w, c] of cost) {
        const ns = s + w;
        if (ns <= sum && base + c < ndp[ns]) ndp[ns] = base + c;
      }
    }
    dp = ndp;
  }

  return dp[sum] === INF ? -1 : dp[sum];
};
// @lc code=end

// TEST:
console.log(minOperations([10, 2], 13) === 3, minOperations([10, 2], 13)); // 5 + 8 = 13
console.log(minOperations([6, 3], 8) === 2, minOperations([6, 3], 8)); // 3→2（除1次乘1次），6+2=8
console.log(minOperations([2, 2], 7) === -1, minOperations([2, 2], 7)); // 无法凑出 7
console.log(minOperations([1], 5000) === -1, minOperations([1], 5000)); // 只能到 2 的幂
console.log(minOperations([500], 500) === 0, minOperations([500], 500)); // 无需操作
console.log(minOperations([7, 7, 7], 15) === 2, minOperations([7, 7, 7], 15)); // 7+7+1（7→3→1）
console.log(minOperations([16], 1) === 4, minOperations([16], 1)); // 连除 4 次
console.log(minOperations([3, 5], 4) === 2, minOperations([3, 5], 4)); // 5→2→4
console.log(minOperations([2, 2, 2, 2], 15) === 4, minOperations([2, 2, 2, 2], 15)); // 8+4+2+1
