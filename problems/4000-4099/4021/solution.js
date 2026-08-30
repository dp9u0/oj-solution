/*
 * @lc app=leetcode id=4021 lang=javascript
 *
 * [4021] Minimum Operations to Make a Rotated Palindrome I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  const n = s.length;
  // 字母环上两字符的最短距离（递增次数之和的最小值）
  const pairCost = (a, b) => {
    const d = Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
    return Math.min(d, 26 - d);
  };
  let ans = Infinity;
  // 枚举左旋转次数 r：最终串为 t[i] = s[(i + r) % n]，代价 r + 各配对距离和
  for (let r = 0; r < n; r++) {
    let cost = r;
    for (let i = 0, j = n - 1; i < j; i++, j--) {
      cost += pairCost(s[(i + r) % n], s[(j + r) % n]);
    }
    if (cost < ans) ans = cost;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minOperations('abc')); // 2
console.log(minOperations('yb')); // 3
console.log(minOperations('aa')); // 0
console.log(minOperations('ab')); // 1
console.log(minOperations('zzzz')); // 0
console.log(minOperations('azy')); // 2
console.log(minOperations('abcd')); // 2
console.log(minOperations('racecar')); // 0
