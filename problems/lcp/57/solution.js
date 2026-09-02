/*
 * @lc app=leetcode.cn id=LCP 57 lang=javascript
 *
 * [LCP 57] 打地鼠
 */

// @lc code=start
/**
 * @param {number[][]} moles
 * @return {number}
 */
var getMaximumNumber = function(moles) {
  // 按时间分组。棋盘 3*3,同时间同位置至多一只,故每组至多 9 只。
  const timeToMoles = new Map();
  for (const [t, x, y] of moles) {
    let list = timeToMoles.get(t);
    if (!list) {
      list = [];
      timeToMoles.set(t, list);
    }
    list.push([x, y]);
  }
  const times = [...timeToMoles.keys()].sort((a, b) => a - b);

  // window 按时间升序存放近 4 秒内的组 {time, moles, dps}。
  // 初始位置 (1,1) 视为 time=0 的一只虚拟"地鼠",dp=0。
  const window = [{ time: 0, moles: [[1, 1]], dps: [0] }];
  // preMax = 所有 time <= curT-4 组的 dp 最大值。最大曼哈顿距离为 4,
  // 故时间差 >= 4 时任意两格可达,可用前缀最大值 O(1) 转移。
  let preMax = -Infinity;

  for (const t of times) {
    const curMoles = timeToMoles.get(t);
    // 过期组并入 preMax
    while (window.length > 0 && window[0].time <= t - 4) {
      const grp = window.shift();
      for (const d of grp.dps) if (d > preMax) preMax = d;
    }

    const n = curMoles.length;
    const dps = new Array(n);
    for (let i = 0; i < n; i++) {
      const [x, y] = curMoles[i];
      let best = preMax;
      // 时间差 < 4 的组暴力检查(窗口内最多 4 组,每组 <= 9,共 <= 36)
      for (const grp of window) {
        const dt = t - grp.time;
        for (let j = 0; j < grp.moles.length; j++) {
          const dist = Math.abs(x - grp.moles[j][0]) + Math.abs(y - grp.moles[j][1]);
          if (dist <= dt && grp.dps[j] > best) best = grp.dps[j];
        }
      }
      dps[i] = best + 1;
    }
    window.push({ time: t, moles: curMoles, dps });
  }

  let ans = 0;
  for (const grp of window) {
    for (const d of grp.dps) if (d > ans) ans = d;
  }
  return ans;
};
// @lc code=end

// TEST:
// Example 1
console.log(getMaximumNumber([[1, 1, 0], [2, 0, 1], [4, 2, 2]]) === 2);
// Example 2
console.log(getMaximumNumber([[2, 0, 2], [5, 2, 0], [4, 1, 0], [1, 2, 1], [3, 0, 2]]) === 3);
// Example 3: 第 0 秒只能敲 (1,1),无法敲 (1,0)/(0,1)
console.log(getMaximumNumber([[0, 1, 0], [0, 0, 1]]) === 0);
// 初始位置有地鼠,第 0 秒直接敲
console.log(getMaximumNumber([[0, 1, 1]]) === 1);
// 原地等待后敲
console.log(getMaximumNumber([[2, 1, 1]]) === 1);
// 1 秒不足以从 (1,1) 到 (2,2)(距离 2)
console.log(getMaximumNumber([[1, 2, 2]]) === 0);
// 先敲初始位置,5 秒后敲 (2,2)
console.log(getMaximumNumber([[0, 1, 1], [5, 2, 2]]) === 2);
// 同一时间两只,2 秒内只能到达一只
console.log(getMaximumNumber([[2, 0, 0], [2, 2, 2]]) === 1);
// 连续衔接
console.log(getMaximumNumber([[1, 1, 0], [2, 0, 0], [3, 0, 1]]) === 3);
