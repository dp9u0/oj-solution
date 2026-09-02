/*
 * @lc app=leetcode.cn id=LCP 53 lang=javascript
 *
 * [LCP 53] 守护太空城
 */

// @lc code=start
/**
 * 每个舱室在某些 (position[i], time[i]) 处受陨石冲击,需用屏障覆盖。
 * 屏障有两种:单舱室屏障覆盖 1 列,联合屏障覆盖相邻 2 列;
 * 一段连续时间区间上:单屏障代价 = 时长 + 1(开 2 + 每多维持一时刻 1),
 * 联合屏障代价 = 时长 + 2(开 3 + 每多维持 1)。
 * 时间只取 1..5 → 每个舱室的"受击时刻集合"可压成 5-bit 掩码。
 *
 * 按舱室从左到右 DP。关键状态:相邻两舱室之间的那条"边"上联合屏障活跃的
 * 时间掩码 R(右向)/L(左向)。一条边上的联合屏障同时被两侧舱室使用。
 * dp[j][R] = 处理完 0..j 舱室、边 (j,j+1) 上的联合屏障活跃掩码为 R 的最小代价。
 * 转移:j 列被 左边带来的 L 与自身右边的 R 共同覆盖,二者不能同时覆盖同一时刻
 * (L & R == 0);j 列仍需单屏障覆盖的时刻 = need[j] & ~(L|R),代价按其连续段算。
 *
 * 复杂度:舱室数 ≤ 101,掩码 32 种 → O(pos * 32 * 32)。
 *
 * @param {number[]} time
 * @param {number[]} position
 * @return {number}
 */
var defendSpaceCity = function(time, position) {
  const maxPos = Math.max.apply(null, position);
  const need = new Array(maxPos + 1).fill(0);
  for (let i = 0; i < time.length; i++) {
    need[position[i]] |= (1 << (time[i] - 1)); // 时刻 1..5 -> bit0..4
  }
  const FULL = (1 << 5) - 1;

  // 用额外的"维持"把中间 gap 桥接起来,可能比拆成多段各付一次开启费更省。
  // 例如联合屏障需要活跃时刻 {1,3}:拆两段代价 (1+2)+(1+2)=6;而把时刻 2 也
  // 一并维持(桥接)成一个连续 [1..3] run 代价 3+2=5 更省。
  // 因此对"必须覆盖的掩码 needMask"求最小代价 = 枚举其所有 supermask S(实际
  // 屏障覆盖集合,可多覆盖 gap),对 S 按连续 run 累加 (run长 + open)。
  // 时刻只有 5 个,supermask 最多 32 个,枚举量可忽略。
  const cover = (needMask, open) => {
    // 收集 needMask 中未置位的位置作为可选项
    const free = [];
    for (let t = 0; t < 5; t++) if (!(needMask & (1 << t))) free.push(t);
    let best = Infinity;
    const nf = free.length;
    for (let m = 0; m < (1 << nf); m++) {
      let S = needMask;
      for (let k = 0; k < nf; k++) if (m & (1 << k)) S |= (1 << free[k]);
      let cost = 0, run = 0;
      for (let t = 0; t < 5; t++) {
        if (S & (1 << t)) run++;
        else { if (run) cost += run + open; run = 0; }
      }
      if (run) cost += run + open;
      if (cost < best) best = cost;
    }
    return best;
  };
  // 5 时刻很短,直接对掩码预计算单屏障/联合屏障的最小代价
  const singleCost = [];
  const pairCost = [];
  for (let m = 0; m <= FULL; m++) {
    singleCost[m] = cover(m, 1); // 单屏障:open 费计入 run+1
    pairCost[m] = cover(m, 2);   // 联合屏障:open 费计入 run+2
  }

  // DP
  let prev = new Array(32).fill(Infinity);
  for (let R = 0; R <= FULL; R++) {
    const leftover = need[0] & ~R;
    prev[R] = singleCost[leftover] + pairCost[R];
  }
  for (let j = 1; j <= maxPos; j++) {
    const cur = new Array(32).fill(Infinity);
    for (let R = 0; R <= FULL; R++) {
      for (let L = 0; L <= FULL; L++) {
        if (prev[L] === Infinity) continue;
        if ((L & R) !== 0) continue; // 同一时刻 j 列不能同时被左右两边联合屏障覆盖
        const leftover = need[j] & ~(L | R);
        const v = prev[L] + singleCost[leftover] + pairCost[R];
        if (v < cur[R]) cur[R] = v;
      }
    }
    prev = cur;
  }
  return prev[0]; // 最右列无右向联合屏障
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1
assert.strictEqual(defendSpaceCity([1, 2, 1], [6, 3, 3]), 5);
// 示例 2
assert.strictEqual(defendSpaceCity([1, 1, 1, 2, 2, 3, 5], [1, 2, 3, 1, 2, 1, 3]), 9);
// 单点单时刻:开一个单屏障 = 2
assert.strictEqual(defendSpaceCity([3], [0]), 2);
// 相邻两舱室同 3 时刻:一条联合屏障 = 3+2*0(时长1) = 3
assert.strictEqual(defendSpaceCity([3, 3], [0, 1]), 3);
// 相邻两舱室都需时刻 1,2:联合屏障连续两时刻 = 3 + 1 = 4
assert.strictEqual(defendSpaceCity([1, 2, 1, 2], [0, 0, 1, 1]), 4);

// ---- 独立暴力枚举(小规模,逐"缝隙联合屏障掩码"枚举)对拍 ----
function brute(time, position) {
  const maxCol = Math.max.apply(null, position);
  const need = new Array(maxCol + 1).fill(0);
  for (let i = 0; i < time.length; i++) need[position[i]] |= (1 << (time[i] - 1));
  const E = maxCol;
  const FULL = 31;
  const runCost = (mask, open) => {
    let cost = 0, run = 0;
    for (let t = 0; t < 5; t++) {
      if (mask & (1 << t)) run++;
      else { if (run) cost += run + open; run = 0; }
    }
    if (run) cost += run + open;
    return cost;
  };
  const cover = (needMask, open) => {
    const free = [];
    for (let t = 0; t < 5; t++) if (!(needMask & (1 << t))) free.push(t);
    let best = Infinity, nf = free.length;
    for (let m = 0; m < (1 << nf); m++) {
      let S = needMask;
      for (let k = 0; k < nf; k++) if (m & (1 << k)) S |= (1 << free[k]);
      let cost = 0, run = 0;
      for (let t = 0; t < 5; t++) {
        if (S & (1 << t)) run++;
        else { if (run) cost += run + open; run = 0; }
      }
      if (run) cost += run + open;
      if (cost < best) best = cost;
    }
    return best;
  };
  let best = Infinity;
  const D = new Array(E).fill(0);
  function rec(e) {
    if (e === E) {
      let cost = 0;
      for (let j = 0; j <= maxCol; j++) {
        const leftM = j > 0 ? D[j - 1] : 0;
        const rightM = j < E ? D[j] : 0;
        if ((leftM & rightM) !== 0) return;
        cost += cover(need[j] & ~(leftM | rightM), 1);
      }
      for (let e2 = 0; e2 < E; e2++) cost += cover(D[e2], 2);
      if (cost < best) best = cost;
      return;
    }
    for (let m = 0; m <= FULL; m++) { D[e] = m; rec(e + 1); }
  }
  if (E === 0) {
    // 单列:直接算
    best = cover(need[0], 1);
  } else rec(0);
  return best;
}
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
for (let t = 0; t < 1500; t++) {
  const maxCol = ri(0, 3); // 保持暴力枚举可算
  const n = ri(1, 8);
  const time = [], position = [];
  for (let i = 0; i < n; i++) { time.push(ri(1, 5)); position.push(ri(0, maxCol)); }
  const got = defendSpaceCity(time, position);
  const exp = brute(time, position);
  assert.strictEqual(got, exp, `mismatch t=${JSON.stringify({ time, position })} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
console.log('ex1 =', defendSpaceCity([1, 2, 1], [6, 3, 3]));
console.log('ex2 =', defendSpaceCity([1, 1, 1, 2, 2, 3, 5], [1, 2, 3, 1, 2, 1, 3]));
