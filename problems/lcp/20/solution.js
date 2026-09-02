/*
 * @lc app=leetcode.cn id=LCP 20 lang=javascript
 *
 * [LCP 20] 快速公交
 */

// @lc code=start
const MOD = 1000000007n;

/**
 * 从 0 走到 target 的最短耗时（可步行 ±1，可坐公交 x -> jump[i]*x，均耗时）。
 * 反向思考：求 target 走回 0 的最短耗时（costBack）。反向图与正向图边数
 * 相同且对称，故最小总耗时不变：
 *   - 反向 "步行 -1"（x -> x-1）等价正向 x-1 -> x，耗时 inc；
 *   - 反向 "步行 +1"（x -> x+1）等价正向 x+1 -> x，耗时 dec；
 *   - 反向 "公交"（x -> x/jump[i]，仅当整除）等价正向 x/jump[i] -> x，耗时 cost[i]。
 * 任意两次公交之间，最优走行必单调（在相邻倍数间交错来回只会徒增距离），
 * 因此只考虑把 x 对齐到 jump[i] 的最近上/下倍数再除，即可覆盖所有最优公交位置。
 * 用记忆化递归求解；x 每次除以下至少减半，状态数 O(m * log2(target))。
 * 因为耗时可达 1e9 * 1e9 量级，全程使用 BigInt，最后对 MOD 取模。
 * @param {number} target
 * @param {number} inc
 * @param {number} dec
 * @param {number[]} jump
 * @param {number[]} cost
 * @return {number}
 */
var busRapidTransit = function(target, inc, dec, jump, cost) {
  const memo = new Map();
  const IN = BigInt(inc), DE = BigInt(dec);
  const J = jump.map(x => BigInt(x)), C = cost.map(x => BigInt(x));
  const m = J.length;

  const dfs = (x) => {
    if (x <= 0n) return 0n;
    if (memo.has(x)) return memo.get(x);
    let best = x * IN; // 全程步行回 0
    for (let i = 0; i < m; i++) {
      const j = J[i], c = C[i];
      const r = x % j;
      if (r === 0n) {
        // 已是 jump 的倍数，直接坐公交
        const q = x / j;
        if (q < x) {
          const v = c + dfs(q);
          if (v < best) best = v;
        }
      } else {
        // 向下走 r 步对齐到最近的较小倍数再除
        const q1 = (x - r) / j;
        if (q1 < x) {
          const v = r * IN + c + dfs(q1);
          if (v < best) best = v;
        }
        // 向上走 (j-r) 步对齐到最近的较大倍数再除
        const q2 = (x + (j - r)) / j;
        if (q2 < x) {
          const v = (j - r) * DE + c + dfs(q2);
          if (v < best) best = v;
        }
      }
    }
    memo.set(x, best);
    return best;
  };

  return Number(dfs(BigInt(target)) % MOD);
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例 1
assert.strictEqual(busRapidTransit(31, 5, 3, [6], [10]), 33);
// 示例 2
assert.strictEqual(busRapidTransit(612, 4, 5, [3, 6, 8, 11, 5, 10, 4], [4, 7, 6, 3, 7, 6, 4]), 26);
// 目标即起点
assert.strictEqual(busRapidTransit(1, 5, 3, [6], [10]), 5);
// 走行比坐公交划算
assert.strictEqual(busRapidTransit(10, 1, 1, [1000000], [1]), 10);
// target 很大，验证不爆栈且返回的是取模后的数（小于 1e9+7）
const big = busRapidTransit(1000000000, 1000000, 1000000, [2], [1]);
assert.ok(Number.isInteger(big) && big >= 0 && big < 1000000007);

// ---- 反向 Dijkstra 暴力对拍（小数据）----
function brute(target, inc, dec, jump, cost, MAX) {
  const dist = new Array(MAX + 1).fill(Infinity);
  dist[0] = 0;
  const used = new Array(MAX + 1).fill(false);
  for (;;) {
    let u = -1, best = Infinity;
    for (let v = 0; v <= MAX; v++) if (!used[v] && dist[v] < best) { best = dist[v]; u = v; }
    if (u === -1) break;
    used[u] = true;
    const relax = (v, w) => { if (v >= 0 && v <= MAX && dist[u] + w < dist[v]) dist[v] = dist[u] + w; };
    relax(u + 1, inc);
    relax(u - 1, dec);
    for (let i = 0; i < jump.length; i++) relax(u * jump[i], cost[i]);
  }
  return dist[target];
}
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
for (let t = 0; t < 600; t++) {
  const target = ri(1, 100);
  const inc = ri(1, 12), dec = ri(1, 12);
  const m = ri(1, 3);
  const jump = [], cost = [];
  for (let i = 0; i < m; i++) { jump.push(ri(2, 7)); cost.push(ri(1, 40)); }
  const exp = brute(target, inc, dec, jump, cost, 4000);
  assert.strictEqual(busRapidTransit(target, inc, dec, jump, cost), exp, `mismatch ${target}`);
}

console.log('All tests passed!');
console.log('ex1 =', busRapidTransit(31, 5, 3, [6], [10]));
console.log('ex2 =', busRapidTransit(612, 4, 5, [3, 6, 8, 11, 5, 10, 4], [4, 7, 6, 3, 7, 6, 4]));
console.log('big =', big);
