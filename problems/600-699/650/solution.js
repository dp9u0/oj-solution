/*
 * @lc app=leetcode id=650 lang=javascript
 *
 * [650] 2 Keys Keyboard
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  // 最少操作数 = n 的质因数之和（带重复）
  // 最后一段操作：屏幕有 k 个 'A' 时 Copy All，再 Paste (m-1) 次得到 k*m = n 个，
  // 该段代价为 m = n/k。故 f(n) = min(f(k) + n/k)，最优分解恰为质因数之和。
  let steps = 0;
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      steps += d;
      n /= d;
    }
  }
  if (n > 1) steps += n;
  return steps;
};
// @lc code=end

// TEST:
console.log(minSteps(1) === 0); // 已有 1 个 A，无需操作
console.log(minSteps(2) === 2); // Copy, Paste
console.log(minSteps(3) === 3); // Copy, Paste, Paste
console.log(minSteps(4) === 4); // 2*2: Copy Paste Copy Paste
console.log(minSteps(6) === 5); // 2+3
console.log(minSteps(9) === 6); // 3+3
console.log(minSteps(12) === 7); // 2+2+3
console.log(minSteps(15) === 8); // 3+5
console.log(minSteps(1000) === 21); // 2*3 + 5*3
