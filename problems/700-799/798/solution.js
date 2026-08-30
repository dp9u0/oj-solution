/*
 * @lc app=leetcode id=798 lang=javascript
 *
 * [798] Smallest Rotation with Highest Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function (nums) {
  const n = nums.length;
  // diff[k]: 差分数组，统计每个旋转量 k 的“坏元素”个数（nums[i] > 新下标）
  const diff = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const v = nums[i];
    if (v === 0) continue; // 0 永远 <= 任何下标，无坏区间
    // 坏区间是长度为 v 的环形区间，起点 l = (i - v + 1) mod n，终点 i
    const l = (((i - v + 1) % n) + n) % n;
    const r = l + v - 1;
    if (r <= n - 1) {
      diff[l]++;
      diff[r + 1]--;
    } else {
      // 跨过 n-1 与 0 的边界，拆成两段 [l, n-1] 和 [0, r-n]
      diff[l]++;
      diff[n]--;
      diff[0]++;
      diff[r + 1 - n]--;
    }
  }

  let best = 0;
  let minBad = Infinity;
  let bad = 0;
  for (let k = 0; k < n; k++) {
    bad += diff[k];
    if (bad < minBad) {
      minBad = bad;
      best = k;
    }
  }
  return best;
};
// @lc code=end

// TEST:
const bruteForce = (nums) => {
  const n = nums.length;
  let bestK = 0;
  let bestScore = -1;
  for (let k = 0; k < n; k++) {
    let score = 0;
    for (let j = 0; j < n; j++) {
      if (nums[(j + k) % n] <= j) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestK = k;
    }
  }
  return bestK;
};

console.log(bestRotation([2, 3, 1, 4, 0]) === 3); // -> true
console.log(bestRotation([1, 3, 0, 2, 4]) === 0); // -> true
console.log(bestRotation([0]) === 0); // -> true
console.log(bestRotation([2, 4, 1, 3, 0]) === bruteForce([2, 4, 1, 3, 0])); // -> true
console.log(bestRotation([0, 0, 0]) === 0); // -> true
console.log(bestRotation([4, 3, 2, 1, 0]) === bruteForce([4, 3, 2, 1, 0])); // -> true
// 随机对拍验证
let allPass = true;
for (let t = 0; t < 200; t++) {
  const n = 1 + Math.floor(Math.random() * 30);
  const nums = Array.from({ length: n }, () => Math.floor(Math.random() * n));
  if (bestRotation(nums.slice()) !== bruteForce(nums)) {
    allPass = false;
    console.log('FAIL', nums);
    break;
  }
}
console.log(allPass); // -> true
